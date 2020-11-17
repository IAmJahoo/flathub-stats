import { generatePathsForTimeRange } from "./generatePathsForTimeRange";
import { expect } from "chai";

describe("Generate paths for time range", () => {
  it("should generate request paths for every date between `start` and `until`", () => {
    const start = "1999, 12, 30";
    const until = "2000, 01, 03";
    const expectedPaths = [
      "1999/12/30.json",
      "1999/12/31.json",
      "2000/01/01.json",
      "2000/01/02.json",
      "2000/01/03.json",
    ];

    expect(generatePathsForTimeRange(start, until)).to.be.deep.equal(
      expectedPaths
    );
  });
});
