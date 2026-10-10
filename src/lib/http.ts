import "server-only";
import type { z } from "zod";
import { ExternalServiceError } from "@/lib/errors";
import type { ExternalFailure } from "@/types/external";

const DEFAULT_TIMEOUT_MS = 8_000;

function failure(service: string, reason: ExternalFailure, cause?: unknown): ExternalServiceError {
  // Log here, where the details exist: they may not survive past a cache boundary.
  console.error(`[external:${service}] ${reason}`);
  return new ExternalServiceError(service, reason, { cause });
}

export async function fetchJson<Schema extends z.ZodType>(
  service: string,
  url: URL,
  schema: Schema,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<z.output<Schema>> {
  let response: Response;
  try {
    response = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { accept: "application/json" },
    });
  } catch (cause) {
    const timedOut = cause instanceof DOMException && cause.name === "TimeoutError";
    throw failure(service, timedOut ? "timeout" : "network", cause);
  }

  if (!response.ok) throw failure(service, "http", `status ${response.status}`);

  const body: unknown = await response.json().catch(() => undefined);
  const parsed = schema.safeParse(body);
  if (!parsed.success) throw failure(service, "invalid_response", parsed.error);

  return parsed.data;
}
