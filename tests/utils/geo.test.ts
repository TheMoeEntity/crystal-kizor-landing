import { describe, expect, it } from "vitest";
import { roundCoordinate } from "@/utils/geo";

describe("roundCoordinate", () => {
  it("rounds to the requested decimals", () => {
    expect(roundCoordinate(6.44132, 2)).toBe(6.44);
    expect(roundCoordinate(7.49883, 2)).toBe(7.5);
  });

  it("handles negative coordinates", () => {
    expect(roundCoordinate(-3.14159, 2)).toBe(-3.14);
  });
});
