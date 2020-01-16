var http = require("https");

var options = {
  "method": "GET",
  "hostname": "community-open-weather-map.p.rapidapi.com",
  "port": null,
  "path": "/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
  "headers": {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "a4c36028f2msh81092be3de7f311p1303a6jsn6886c06328b5"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
