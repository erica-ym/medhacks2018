//Main Script for starting the server.
var express = require("express");
var app = express();
var path = require('path');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var DaySymptoms = require("./schema.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://127.0.0.1/medhacks");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({extended:true}));

//These access control things are needed to test with Firebase and on Erica's Mac
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', function(req, res) {
  console.log(req.body)
  //send to mongoose here
  var newDay = {name: req.body.details || "none",
    feeling: req.body.feeling || "none",
    cramping: Number(req.body.cramping) || 0,
    urinationpain: Number(req.body.urination) || 0,
    nausea: Number(req.body.nausea) || 0,
    swelling: Number(req.body.swelling) || 0,
    headaches: Number(req.body.headaches) || 0,
    feverorchills: Number(req.body.feverorchills) || 0,
    backpain: Number(req.body.backpain) || 0,
    blurredvision: Number(req.body.blurredvision) || 0,
    vagbleeding: Number(req.body.vagbleeding) || 0,
    shortbreath: Number(req.body.shortbreath) || 0,
    hunger: Number(req.body.hunger) || 0,
    dehydrated: Number(req.body.dehydrated) || 0,
    reducedapp: Number(req.body.reducedapp) || 0,
    babydecline: Number(req.body.babydecline) || 0
     };
  DaySymptoms.create(newDay, function(err, campground){
      if(err){
      console.log("you received this error" + err);
  } else {
     res.redirect("/");
  }
  })
})


// app.post('/postOutput', function(req, res){
//   console.log(req.body)
//   output = req.body
//   outputArr[0] = output
//   console.log(outputArr)
//   //var result = GCP.publishMessage(output)
//   var result = BigQuery.publish(outputArr)
//   res.sendStatus(200);
// });

if(!module.parent){
	app.listen(8080, function() {
			console.log("server had started on 8080");
	} );
}

module.exports = app
