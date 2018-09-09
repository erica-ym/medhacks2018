var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Day = new Schema({
  details: String,
  feeling: String,
  cramping: Number,
  urinationpain: Number,
  nausea: Number,
  swelling: Number,
  headaches: Number,
  feverorchills: Number,
  backpain: Number,
  blurredvision: Number,
  vagbleeding: Number,
  shortbreath: Number,
  hunger: Number,
  dehydrated: Number,
  reducedapp: Number,
  babydecline: Number
});

// Compile model from schema
var DaySymptoms = mongoose.model('DaySymptoms', Day );

module.exports = DaySymptoms;
