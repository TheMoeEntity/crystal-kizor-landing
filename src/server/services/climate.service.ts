import "server-only";
import { COORDINATE_DECIMALS, DEFAULT_COUNTRY_CODE } from "@/constants/climate";
import { geocodeCity } from "@/lib/climate/geocode";
import { getClimateNormals } from "@/lib/climate/nasa-power";
import type { CityClimate, ClimateFailure } from "@/types/climate";
import type { Result } from "@/types/common";
import { roundCoordinate } from "@/utils/geo";
import { normaliseCityName } from "@/utils/text";

// The boundary where thrown errors become values the UI can act on.
export async function getClimateForCity(
  city: string,
  countryCode: string = DEFAULT_COUNTRY_CODE,
): Promise<Result<CityClimate, ClimateFailure>> {
  try {
    const location = await geocodeCity(normaliseCityName(city), countryCode);
    if (!location) return { ok: false, error: "not_found" };

    const normals = await getClimateNormals(
      roundCoordinate(location.latitude, COORDINATE_DECIMALS),
      roundCoordinate(location.longitude, COORDINATE_DECIMALS),
    );
    return { ok: true, value: { location, normals } };
  } catch {
    // Details were already logged where they happened (lib/http.ts).
    return { ok: false, error: "unavailable" };
  }
}
