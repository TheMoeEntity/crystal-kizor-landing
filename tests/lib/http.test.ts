import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { ExternalServiceError } from "@/lib/errors";
import { fetchJson } from "@/lib/http";
import { jsonResponse } from "@tests/fixtures/climate";

const schema = z.object({ value: z.number() });
const url = new URL("https://api.example.test/data");

async function failureReason(promise: Promise<unknown>) {
  const error = await promise.catch((caught: unknown) => caught);
  expect(error).toBeInstanceOf(ExternalServiceError);
  return (error as ExternalServiceError).reason;
}

describe("fetchJson", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("returns parsed data on success", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ value: 42 })));
    await expect(fetchJson("test", url, schema)).resolves.toEqual({ value: 42 });
  });

  it("reports a non-2xx status as `http`", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({}, 503)));
    expect(await failureReason(fetchJson("test", url, schema))).toBe("http");
  });

  it("reports a body that fails the schema as `invalid_response`", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ value: "42" })));
    expect(await failureReason(fetchJson("test", url, schema))).toBe("invalid_response");
  });

  it("reports a body that is not JSON as `invalid_response`", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("<html>")));
    expect(await failureReason(fetchJson("test", url, schema))).toBe("invalid_response");
  });

  it("reports a dropped connection as `network`", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fetch failed")));
    expect(await failureReason(fetchJson("test", url, schema))).toBe("network");
  });

  it("reports a timeout as `timeout`", async () => {
    const timeout = new DOMException("The operation timed out.", "TimeoutError");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(timeout));
    expect(await failureReason(fetchJson("test", url, schema))).toBe("timeout");
  });
});
