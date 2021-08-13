const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter a name for your Workout"
    },
    value: {
      type: String,
      required: "Please enter a type of Workout"
    },
    weight: {
      type: Number,
      trim: true,
        
    },
    sets:{

    },
    reps:{

    },
    duration:{

    },
    date: {
      type: Date,
      default: Date.now
    }   
  });
  
  const Exercise = mongoose.model("Exercise", exerciseSchema);
  
  module.exports = Exercise;
  