
const http = require('http');
const https = require("https");
const url = 'http://adventofcode.com/2015/day/1/input';
//   "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
http.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log( body
    //   `City: ${body.results[0].formatted_address} -`,
    //   `Latitude: ${body.results[0].geometry.location.lat} -`,
    //   `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});
 
// function getInput(url){
//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.send(null);
//     request.onreadystatechange = function () {
//         if (request.readyState === 4 && request.status === 200) {
//             var type = request.getResponseHeader('Content-Type');
//             if (type.indexOf("text") !== 1) {
//                 return request.responseText;
//             }
//         }
//     }
// }

// let txt = getInput('http://adventofcode.com/2015/day/1/input');