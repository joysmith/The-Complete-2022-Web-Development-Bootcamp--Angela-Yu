const express = require("express");
const bodyParser = require("body-parser");

//create express app
const app = express();

// create home route
app.get("/", function (req, res) {
  //send hello to browser
  res.send("Hello");
});

//server listen to this port
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
