import { expect } from "chai";

import { transformDownloads, sumDownloadsForArchs, calculateDownloadsPerApp, AppsData, CalculatedDownloadsForApp } from './summarizeDownloads';

const exampleData: AppsData = {
    "cc.arduino.arduinoide": {
      "aarch64": [
        1,
        0
      ],
      "x86_64": [
        177,
        94
      ]
    },
    "cc.retroshare.retroshare-gui": {
      "x86_64": [
        5,
        4
      ]
    },
    "ch.openboard.OpenBoard": {
      "arm": [
        1,
        1
      ],
      "i386": [
        1,
        0
      ],
      "x86_64": [
        67,
        33
      ]
    },
}


describe('Transform downloads', () => {
    it('should transform downloads array properly', () => {
        const testArray = [456, 10];
        const expected = {
            downloads: 10,
            downloadsWithUpdates: 456
        };

        expect(transformDownloads(testArray)).to.deep.equal(expected);
    });
});

describe('Sum downloads for Architectures', () => {
  it('should sum downloads for all architectures', () => {
    expect(sumDownloadsForArchs(exampleData["cc.arduino.arduinoide"])).to.deep.equal({
      downloads: 94,
      downloadsWithUpdates: 178
    })
  })
});

describe("Calculate downloads per app", () => {
  it('should represent data as summarized downloads as values of application', () => {
    const expectedOutput: CalculatedDownloadsForApp = {
      "cc.arduino.arduinoide": {
        downloads: 94,
        downloadsWithUpdates: 178
      },
      "cc.retroshare.retroshare-gui": {
        downloads: 4,
        downloadsWithUpdates: 5
      },
      "ch.openboard.OpenBoard": {
        downloads: 34,
        downloadsWithUpdates: 69
      }
    };

    expect(calculateDownloadsPerApp(exampleData)).to.deep.equal(expectedOutput);
  });
});