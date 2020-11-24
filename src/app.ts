import superagent, { SuperAgentRequest } from "superagent";

import config from "./config";
import { requestDataForTimeRange } from "./requestDataForTimeRange";
import { generatePathsForTimeRange } from "./generatePathsForTimeRange";
import { calculateDownloadsPerApp } from "./summarizeDownloads";

function requestStatsForDate(datePath: string): SuperAgentRequest {
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
  const datePaths = generatePathsForTimeRange("2020, 10, 22", "2020, 11, 22");

  console.log("~~~ PERFORMING REQUESTS ~~~");
  const data = await requestDataForTimeRange(requestStatsForDate, datePaths);
  console.log("Result data items: ", data.length);

  const dataStore: any = {};

  data.forEach((dataEntry, index) => {
    console.log(Object.keys(dataEntry));
    dataStore[dataEntry[datePaths[index]].date] =
      dataEntry[datePaths[index]].refs;
  });

  Object.keys(dataStore).forEach(date => {
    dataStore[date] = calculateDownloadsPerApp(dataStore[date]);
  });

  console.log(dataStore);
}

main();
