import { MONTHS, NASA_POWER_PARAMETERS } from "@/constants/climate";

type Series = Record<(typeof MONTHS)[number], number>;

// Every month gets the same value, so a test can tell parameters apart at a glance.
function series(value: number): Series {
  return Object.fromEntries(MONTHS.map((month) => [month, value])) as Series;
}

const VALUES: Record<(typeof NASA_POWER_PARAMETERS)[number], number> = {
  T2M_MAX: 33.1,
  T2M: 27.4,
  RH2M: 78.2,
  PRECTOTCORR: 5.6,
  ALLSKY_SFC_SW_DWN: 5.1,
  WS2M: 2.3,
};

export function nasaPowerBody(overrides: Partial<Record<keyof typeof VALUES, Series>> = {}) {
  const parameter = Object.fromEntries(
    NASA_POWER_PARAMETERS.map((code) => [code, overrides[code] ?? series(VALUES[code])]),
  );
  return { properties: { parameter } };
}

export function seriesWith(value: number, month: (typeof MONTHS)[number], monthValue: number) {
  return { ...series(value), [month]: monthValue };
}

export const enuguGeocodingBody = {
  results: [
    {
      name: "Enugu",
      latitude: 6.44132,
      longitude: 7.49883,
      elevation: 223,
      country: "Nigeria",
      country_code: "NG",
      admin1: "Enugu",
    },
  ],
};

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
