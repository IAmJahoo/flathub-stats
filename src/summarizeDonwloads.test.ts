import { expect } from "chai";

import { transformDownloads, sumDownloadsForArchs, AppsData } from './summarizeDownloads';

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
})