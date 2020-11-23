type Downloads = {
    downloads: number;
    downloadsWithUpdates: number
}

type DownloadsPerArch = {
    [key: string]: number[];
}

export type CalculatedDownloadsForApp = {
  [key: string]: Downloads;
}

export type AppsData = {
    [key: string]: DownloadsPerArch;
}


export function transformDownloads(downloadsArray: number[]): Downloads {
  const [downloads, downloadsWithUpdates] = downloadsArray.sort((a, b) => a - b);

  return {
    downloads,
    downloadsWithUpdates
  }
}

export function sumDownloadsForArchs(downloadsPerArch: DownloadsPerArch): Downloads {
  const mappedDownloads: Downloads[] = Object.keys(downloadsPerArch)
    .map(arch => transformDownloads(downloadsPerArch[arch]));

  return mappedDownloads.reduce(
    (prev, curr) => {
      return {
        downloads: prev.downloads + curr.downloads,
        downloadsWithUpdates: prev.downloadsWithUpdates + curr.downloadsWithUpdates
      }
  }, {
    downloads: 0,
    downloadsWithUpdates: 0
  })
}

export function calculateDownloadsPerApp(appsRawData: AppsData): CalculatedDownloadsForApp {
  const summarizedDownloads = {} as CalculatedDownloadsForApp;
  Object.keys(appsRawData).forEach(app => {
    summarizedDownloads[app] = sumDownloadsForArchs(appsRawData[app]);
  });

  return summarizedDownloads;
}