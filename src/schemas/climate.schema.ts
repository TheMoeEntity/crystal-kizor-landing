import { z } from "zod";
import { NASA_MISSING_VALUE } from "@/constants/climate";

export const geocodingResponseSchema = z.object({
  // Open-Meteo leaves `results` out entirely when nothing matches.
  results: z
    .array(
      z.object({
        name: z.string(),
        latitude: z.number(),
        longitude: z.number(),
        elevation: z.number().optional(),
        country: z.string().optional(),
        country_code: z.string(),
        admin1: z.string().optional(),
      }),
    )
    .optional(),
});

const reading = z.number().refine((value) => value > NASA_MISSING_VALUE, {
  message: "NASA POWER returned no data for this month",
});

const monthlySeries = z.object({
  JAN: reading,
  FEB: reading,
  MAR: reading,
  APR: reading,
  MAY: reading,
  JUN: reading,
  JUL: reading,
  AUG: reading,
  SEP: reading,
  OCT: reading,
  NOV: reading,
  DEC: reading,
});

export const nasaPowerResponseSchema = z.object({
  properties: z.object({
    parameter: z.object({
      T2M_MAX: monthlySeries,
      T2M: monthlySeries,
      RH2M: monthlySeries,
      PRECTOTCORR: monthlySeries,
      ALLSKY_SFC_SW_DWN: monthlySeries,
      WS2M: monthlySeries,
    }),
  }),
});
