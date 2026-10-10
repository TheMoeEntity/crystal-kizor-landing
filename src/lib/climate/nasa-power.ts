import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { MONTHS, NASA_POWER_PARAMETERS } from "@/constants/climate";
import { fetchJson } from "@/lib/http";
import { nasaPowerResponseSchema } from "@/schemas/climate.schema";
import type { ClimateNormals } from "@/types/climate";

const NASA_POWER_URL = "https://power.larc.nasa.gov/api/temporal/climatology/point";

// Long-term monthly averages barely change, so cache for the longest profile.
export async function getClimateNormals(
  latitude: number,
  longitude: number,
): Promise<ClimateNormals> {
  "use cache";
  cacheLife("max");
  cacheTag("climate-normals");

  const url = new URL(NASA_POWER_URL);
  url.search = new URLSearchParams({
    parameters: NASA_POWER_PARAMETERS.join(","),
    community: "RE",
    latitude: String(latitude),
    longitude: String(longitude),
    format: "JSON",
  }).toString();

  // NASA is slower than most APIs; give it longer than the default.
  const data = await fetchJson("nasa-power", url, nasaPowerResponseSchema, 15_000);
  const p = data.properties.parameter;

  return {
    latitude,
    longitude,
    source: "NASA POWER climatology",
    months: MONTHS.map((month) => ({
      month,
      maxTempC: p.T2M_MAX[month],
      meanTempC: p.T2M[month],
      humidityPct: p.RH2M[month],
      rainMmPerDay: p.PRECTOTCORR[month],
      solarKwhPerM2PerDay: p.ALLSKY_SFC_SW_DWN[month],
      windMs: p.WS2M[month],
    })),
  };
}
