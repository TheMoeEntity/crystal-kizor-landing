import type { ExternalFailure } from "@/types/external";

export class ExternalServiceError extends Error {
  constructor(
    readonly service: string,
    readonly reason: ExternalFailure,
    options?: { cause?: unknown },
  ) {
    super(`${service}: ${reason}`, options);
    this.name = "ExternalServiceError";
  }
}
