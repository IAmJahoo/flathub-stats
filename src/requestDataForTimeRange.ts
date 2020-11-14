export function requestDataForTimeRange(requestFunction: (date: string) => void, timeRange: string[]) {
    return timeRange.map(date => (
        {
            [date]: requestFunction(date)
        }
    ));
}