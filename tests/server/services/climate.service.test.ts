import { beforeEach, describe, expect, it, vi } from "vitest";
import { geocodeCity } from "@/lib/climate/geocode";
import { getClimateNormals } from "@/lib/climate/nasa-power";
import { ExternalServiceError } from "@/lib/errors";
import { getClimateForCity } from "@/server/services/climate.service";
import type { ClimateNormals, GeoLocation } from "@/types/climate";

vi.mock("@/lib/climate/geocode");
vi.mock("@/lib/climate/nasa-power");

const enugu: GeoLocation = {
  name: "Enugu",
  region: "Enugu",
  country: "Nigeria",
  countryCode: "NG",
  latitude: 6.44132,
  longitude: 7.49883,
  elevationM: 223,
};

const normals: ClimateNormals = {
  latitude: 6.44,
  longitude: 7.5,
  source: "NASA POWER climatology",
  months: [],
};

describe("getClimateForCity", () => {
  beforeEach(() => {
    vi.mocked(geocodeCity).mockReset();
    vi.mocked(getClimateNormals).mockReset();
  });

  it("returns location and normals for a known city", async () => {
    vi.mocked(geocodeCity).mockResolvedValue(enugu);
    vi.mocked(getClimateNormals).mockResolvedValue(normals);

    await expect(getClimateForCity("Enugu")).resolves.toEqual({
      ok: true,
      value: { location: enugu, normals },
    });
  });

  it("normalises the city and rounds coordinates before calling out (cache keys)", async () => {
    vi.mocked(geocodeCity).mockResolvedValue(enugu);
    vi.mocked(getClimateNormals).mockResolvedValue(normals);

    await getClimateForCity("  ENUGU ");

    expect(geocodeCity).toHaveBeenCalledWith("enugu", "NG");
    expect(getClimateNormals).toHaveBeenCalledWith(6.44, 7.5);
  });

  it("returns `not_found` and skips NASA when the city is unknown", async () => {
    vi.mocked(geocodeCity).mockResolvedValue(null);

    await expect(getClimateForCity("Atlantis")).resolves.toEqual({ ok: false, error: "not_found" });
    expect(getClimateNormals).not.toHaveBeenCalled();
  });

  it("returns `unavailable` instead of throwing when an upstream service fails", async () => {
    vi.mocked(geocodeCity).mockResolvedValue(enugu);
    vi.mocked(getClimateNormals).mockRejectedValue(
      new ExternalServiceError("nasa-power", "timeout"),
    );

    await expect(getClimateForCity("Enugu")).resolves.toEqual({
      ok: false,
      error: "unavailable",
    });
  });
});
