
  var express = require("express");
  var bodyParser = require("body-parser");
  var path = require("path");
  
  var htmlRouter = require("./app/routing/htmlRoutes.js");
  var apiRouter = require("./app/routing/apiRoutes.js");
  var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + "/app/public"));
app.use(express.static(__dirname + "/app/data"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/", htmlRouter);
app.use("/survey", htmlRouter);
app.post("/api/friends", apiRouter);
app.get("/api/friends", apiRouter);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });







  