const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
    day: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
  