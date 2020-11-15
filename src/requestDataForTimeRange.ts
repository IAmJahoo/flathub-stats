export function requestDataForTimeRange(requestFunction: (date: string) => any, timeRange: string[]) {
    return timeRange.map(date => (
        {
            [date]: requestFunction(date)
        }
    ));
}