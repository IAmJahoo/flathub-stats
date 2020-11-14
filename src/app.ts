import https from 'https';

import config from './config';

export function main(): void {
    console.log("Main function is running");

    const requestOptions = { ...config.service, path: "/stats/2018/04/29.json" };
    console.log(`Performing request with options: ${JSON.stringify(requestOptions)}`)
    const request = https.request(requestOptions, response => {
        console.log(`Response status code: ${response.statusCode}`)

        response.on('data', data => {
            process.stdout.write("Data received");
        });
    });

    request.on('error', error => {
        console.error(error)
    })

    request.end();
}

main();
