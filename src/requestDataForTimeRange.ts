import { SuperAgentRequest } from "superagent";

export async function requestDataForTimeRange(
  requestFunction: (date: string) => SuperAgentRequest,
  timeRange: string[]
) {
  const promises = timeRange.map(async (date) => {
    const response = await requestFunction(date);
    console.log(
      `Request for date: ${date} resolved with status: `,
      response.status
    );
    return {
      [date]: response.body,
    };
  });

  const results = await Promise.all(promises);

  return results;
}
