import superagent from "superagent";

import config from "./config";
import { requestDataForTimeRange } from "./requestDataForTimeRange";
import { generatePathsForTimeRange } from "./generatePathsForTimeRange";

function requestStatsForDate(datePath: string): Promise<any> {
  const requestOptions = {
    ...config.service,
    path: `${config.service.pathBase}/${datePath}`,
  };

  console.log(
    "Requesting data for",
    `${requestOptions.hostname}${requestOptions.path}`
  );
  return superagent.get(`${requestOptions.hostname}${requestOptions.path}`);
}

export async function main(): Promise<void> {
  console.log("Main function is running");

  console.log("Generating dates...");
  const datePaths = generatePathsForTimeRange("2020, 01, 01", "2020, 01, 09");

  console.log("~~~ PERFORMING REQUESTS ~~~");
  const data = await requestDataForTimeRange(requestStatsForDate, datePaths);
  console.log("Result data", data);
}

main();
