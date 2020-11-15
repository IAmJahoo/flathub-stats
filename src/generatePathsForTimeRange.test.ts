import { generatePathsForTimeRange } from "./generatePathsForTimeRange";
import { expect } from "chai";

describe("Generate paths for time range", () => {
  it("should generate request paths for every date between `start` and `until`", () => {
    const start = "2020, 01, 01";
    const until = "2020, 01, 05";
    const expectedPaths = [
      "2020/01/01.json",
      "2020/01/02.json",
      "2020/01/03.json",
      "2020/01/04.json",
      "2020/01/05.json",
    ];

    expect(generatePathsForTimeRange(start, until)).to.be.deep.equal(
      expectedPaths
    );
  });
});
