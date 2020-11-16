import { expect } from "chai";

import { requestDataForTimeRange } from "./requestDataForTimeRange";

const exampleDates: string[] = [
  "2018/10/10.json",
  "2018/10/11.json",
  "2018/10/12.json",
  "2018/10/13.json",
];

const expectedDataStructure = [
  {
    "2018/10/10.json": {
      data: "2018/10/10",
    },
  },
  {
    "2018/10/11.json": {
      data: "2018/10/11",
    },
  },
  {
    "2018/10/12.json": {
      data: "2018/10/12",
    },
  },
  {
    "2018/10/13.json": {
      data: "2018/10/13",
    },
  },
];

describe("Request data for time range", () => {
  it("should call for data for every passed dates", async () => {
    let callRequestMockCount = 0;

    const requestMock = (date: string) => {
      setTimeout(() => {
        callRequestMockCount += 1;
      }, 100);
    };

    const result = await requestDataForTimeRange(requestMock, exampleDates);
    console.log(result);
    expect(callRequestMockCount).to.be.equal(exampleDates.length);
  });
});
