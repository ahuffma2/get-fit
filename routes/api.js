const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");

router.get('/api/workouts/', (req,res) => {
    Workout.find({})
      .limit(1)
      .sort({$natural:-1})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => res.status(400).json(err));
});

//Might not be being used??? Might Only Be posting
router.get('/api/workouts/:id', (req,res) => {
    
});

router.get('/api/workouts/range/', (req,res) => {
    
});

router.post('api/workouts/:id', (req,res) => {
    
});

router.put('api/workouts/:id', (req,res) => {
    
});

module.exports = router;