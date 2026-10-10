export const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

// NASA POWER parameter codes, in the order requested.
export const NASA_POWER_PARAMETERS = [
  "T2M_MAX", // daily maximum temperature, °C
  "T2M", // mean temperature, °C
  "RH2M", // relative humidity, %
  "PRECTOTCORR", // rainfall, mm/day
  "ALLSKY_SFC_SW_DWN", // solar radiation, kWh/m²/day
  "WS2M", // wind speed at 2 m, m/s
] as const;

// NASA marks missing data with this value instead of leaving it out.
export const NASA_MISSING_VALUE = -999;

export const DEFAULT_COUNTRY_CODE = "NG";

// About 1 km. NASA's grid is far coarser, so more decimals would only split the cache.
export const COORDINATE_DECIMALS = 2;
