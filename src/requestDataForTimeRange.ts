export async function requestDataForTimeRange(
  requestFunction: (date: string) => any,
  timeRange: string[]
) {
  const promises = timeRange.map(async (date) => {
    const response = await requestFunction(date);
    return {
      [date]: response.body,
    };
  });

  const results = await Promise.all(promises);

  return results;
}
