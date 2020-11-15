import { expect } from 'chai';

import { requestDataForTimeRange } from './requestDataForTimeRange';

const exampleDates: string[] = [
    '2018/10/10.json',
    '2018/10/11.json',
    '2018/10/12.json',
    '2018/10/13.json',
];

describe('Request data for time range', () => {
    it('should call for data for every passed dates', () => {
        let callRequestMockCount = 0;
        const requestMock = (date: string) => {
            callRequestMockCount += 1;
        }

        requestDataForTimeRange(requestMock, exampleDates);
        expect(callRequestMockCount).to.be.equal(exampleDates.length)
    });

    it('should return object with expected data structure',() => {
        const requestMock = (date: string) => ({
            data: date.split(".")[0],
        });
        const expectedDataStructure = [
            {
                '2018/10/10.json': {
                    data: '2018/10/10'
                }
            },
            {
                '2018/10/11.json': {
                    data: '2018/10/11'
                }
            },
            {
                '2018/10/12.json': {
                    data: '2018/10/12'
                }
            },
            {
                '2018/10/13.json': {
                    data: '2018/10/13'
                }
            },
        ];

        expect(
            requestDataForTimeRange(requestMock, exampleDates)
        ).to.be.deep.equal(expectedDataStructure);
    })
})