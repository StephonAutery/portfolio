// require express
var express = require("express");
var app = express();

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// define the static path for express server
app.use(express.static("public"));

// set urlencoding, parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/apiRoutes.js")(app);

// start express app.
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
