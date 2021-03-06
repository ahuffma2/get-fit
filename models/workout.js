const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  exercises: [
  {
    name: {
      type: String,
      trim: true,
      required: "Workout Name Needed"
    },
    type: {
      type: String,
      trim: true,
      required: "Workout Name Needed"
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
    distance:{
      type: Number
    }
  }
  ],
    day: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
  