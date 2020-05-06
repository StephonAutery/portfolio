// 2020.04.05 - you tried this configuration from this URL:
// it failed but you didn't finish the config. got back and try again after class.
// https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/

// require express
var express = require("express");
var app = express();

// process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8080;


const http = require('express');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});


// define the static path for express server
app.use(express.static("public"));

// set urlencoding, parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/apiRoutes.js")(app);

// start express app.
// app.listen(PORT, function() {
// console.log("App listening on PORT " + PORT);
// });
