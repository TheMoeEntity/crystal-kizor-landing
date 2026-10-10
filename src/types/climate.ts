import type { MONTHS } from "@/constants/climate";

export type Month = (typeof MONTHS)[number];

export interface GeoLocation {
  name: string;
  region: string | null;
  country: string | null;
  countryCode: string;
  latitude: number;
  longitude: number;
  elevationM: number | null;
}

export interface MonthlyClimate {
  month: Month;
  maxTempC: number;
  meanTempC: number;
  humidityPct: number;
  rainMmPerDay: number;
  solarKwhPerM2PerDay: number;
  windMs: number;
}

export interface ClimateNormals {
  latitude: number;
  longitude: number;
  source: string;
  months: readonly MonthlyClimate[];
}

export interface CityClimate {
  location: GeoLocation;
  normals: ClimateNormals;
}

export type ClimateFailure = "not_found" | "unavailable";
