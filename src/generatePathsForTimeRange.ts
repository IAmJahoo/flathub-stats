export function generatePathsForTimeRange(
  start: string = "2018, 04, 29",
  until: string = "2018, 05, 29"
) {
  const untilDate = new Date(until);
  const current = new Date(start);
  const datesPaths: string[] = [];

  do {
    datesPaths.push(
      `${current.getFullYear()}/` +
        `${("0" + (current.getMonth() + 1).toString()).slice(-2)}/` +
        `${("0" + current.getDate().toString()).slice(-2)}.json`
    );
    current.setDate(current.getDate() + 1);
  } while (current <= untilDate);

  return datesPaths;
}
