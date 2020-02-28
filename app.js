const express = require("express");
const bodyParser = require("body-parser");
const ha = express();
ha.use(bodyParser.urlencoded({extended: true}));
ha.use(express.static("public"));

ha.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

ha.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;

  res.send("The Answer is:" + result);
});

let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

ha.listen(port, function() {
  console.log("Server started Successfully");
});


module.exports = app;
