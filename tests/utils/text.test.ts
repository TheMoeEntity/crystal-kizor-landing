import { describe, expect, it } from "vitest";
import { normaliseCityName } from "@/utils/text";

describe("normaliseCityName", () => {
  it("gives differently typed names the same cache key", () => {
    expect(normaliseCityName("  ENUGU ")).toBe("enugu");
    expect(normaliseCityName("Enugu")).toBe("enugu");
  });

  it("collapses inner whitespace", () => {
    expect(normaliseCityName("Port   Harcourt")).toBe("port harcourt");
  });
  it("handles tabs and newlines, not just spaces", () => {
    expect(normaliseCityName("Port\tHarcourt\n")).toBe("port harcourt");
  });
});
