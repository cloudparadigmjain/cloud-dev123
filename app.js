const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const https = require("https");
var dist = 0;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res) {
  res.render("home");
});

app.get("/home", function(req,res) {
  res.render("index",{distance:dist});
});

app.get("/home1", function(req,res) {
  res.render("directions");
});

app.post("/from", function(req,res) {
  const from = req.body.from;
  const to = req.body.to;
  const url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metrics&origins="+ from +"&destinations="+ to +"&key=AIzaSyDYRICW4Bm4donS0-9LCp_h0nlsyWvEuGY";
  https.get(url, function(response) {
    console.log(response.statuscode);

    response.on("data", function(data){
      const distanceData = JSON.parse(data);
      const dist = distanceData.rows[0].elements[0].distance.text;
      res.render("index",{distance:dist});
    });
  });
});

let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started Successfully");
});


module.exports = app;
