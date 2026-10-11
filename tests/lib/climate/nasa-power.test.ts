import { describe, expect, it, vi } from "vitest";
import { getClimateNormals } from "@/lib/climate/nasa-power";
import { jsonResponse, nasaPowerBody, seriesWith } from "@tests/fixtures/climate";

describe("getClimateNormals", () => {
  it("maps NASA's parameter codes to named fields, month by month", async () => {
    const body = nasaPowerBody({ T2M_MAX: seriesWith(33.1, "MAR", 36.4) });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(body)));

    const normals = await getClimateNormals(6.44, 7.5);

    expect(normals.months).toHaveLength(12);
    expect(normals.months[0]).toEqual({
      month: "JAN",
      maxTempC: 33.1,
      meanTempC: 27.4,
      humidityPct: 78.2,
      rainMmPerDay: 5.6,
      solarKwhPerM2PerDay: 5.1,
      windMs: 2.3,
    });
    expect(normals.months.find((m) => m.month === "MAR")?.maxTempC).toBe(36.4);
  });

  it("requests the coordinates it was given", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(nasaPowerBody()));
    vi.stubGlobal("fetch", fetchMock);

    await getClimateNormals(6.44, 7.5);

    const requested = fetchMock.mock.calls[0]?.[0] as URL;
    expect(requested.searchParams.get("latitude")).toBe("6.44");
    expect(requested.searchParams.get("longitude")).toBe("7.5");
  });
});
