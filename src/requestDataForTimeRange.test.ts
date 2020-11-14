import { expect } from 'chai';

import { requestDataForTimeRange } from './requestDataForTimeRange';

describe('Request data for time range', () => {
    it('should call for data for every passed dates', () => {
        const exampleDates: string[] = [
            '2018/10/10.json',
            '2018/10/11.json',
            '2018/10/12.json',
            '2018/10/13.json',
        ];

        let callRequestMockCount = 0;
        const requestMock = (date: string) => {
            callRequestMockCount += 1;
        }

        requestDataForTimeRange(requestMock, exampleDates);
        expect(callRequestMockCount).to.be.equal(exampleDates.length)
    });
})