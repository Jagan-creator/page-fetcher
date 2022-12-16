const request = require('request');                                           // require request and fs
const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

request (url, (error, response, body) => {
  if (error) {
    console.log('there has been the following error: ', error);               // catch any initial errors
  }
  fs.writeFile(`${localPath}`, body, function(error) {                        // our write file intiates here
    if (error) {
      console.log('there has been the following error: ', error);
    } else {
      console.log(`you have downloaded and saved ${response.headers["content-length"]} bytes to ${localPath}`);
    }
  });
});