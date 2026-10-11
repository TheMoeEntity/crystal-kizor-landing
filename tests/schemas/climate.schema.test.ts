import { describe, expect, it } from "vitest";
import { NASA_MISSING_VALUE } from "@/constants/climate";
import { geocodingResponseSchema, nasaPowerResponseSchema } from "@/schemas/climate.schema";
import { enuguGeocodingBody, nasaPowerBody, seriesWith } from "@tests/fixtures/climate";

describe("geocodingResponseSchema", () => {
  it("accepts a match", () => {
    expect(geocodingResponseSchema.safeParse(enuguGeocodingBody).success).toBe(true);
  });

  it("accepts no matches, because Open-Meteo omits `results` entirely", () => {
    const parsed = geocodingResponseSchema.parse({});
    expect(parsed.results).toBeUndefined();
  });
});

describe("nasaPowerResponseSchema", () => {
  it("accepts a complete response", () => {
    expect(nasaPowerResponseSchema.safeParse(nasaPowerBody()).success).toBe(true);
  });

  it("rejects NASA's missing-data marker instead of passing -999 °C downstream", () => {
    const body = nasaPowerBody({ T2M: seriesWith(27, "JUL", NASA_MISSING_VALUE) });
    expect(nasaPowerResponseSchema.safeParse(body).success).toBe(false);
  });

  it("rejects a response with a parameter missing", () => {
    const body = nasaPowerBody();
    delete (body.properties.parameter as Record<string, unknown>).RH2M;
    expect(nasaPowerResponseSchema.safeParse(body).success).toBe(false);
  });
});
