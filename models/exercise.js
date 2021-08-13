const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter a name for your Workout"
    },
    type: {
      type: String,
      trim: true,
      required: "Please enter a type of Workout"
    },
    weight: {
      type: Number,

    },
    sets:{
      type: Number,

    },
    reps:{
      type: Number
    },
    duration:{
      type: Number,
      require: "Please Enter the Minutes spent Exercising"
    },
    date: {
      type: Date,
      default: Date.now
    }   
  });
  
  const Exercise = mongoose.model("Exercise", exerciseSchema);
  
  module.exports = Exercise;
  