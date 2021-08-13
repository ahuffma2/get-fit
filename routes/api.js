const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");

router.get('/api/workouts/', async (req,res) => {
    const workout = await Workout.aggregate( [
        {
            $addFields: 
            {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }])
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => res.status(400).json(err));
});

//Might not be being used??? Might Only Be posting
router.get('/api/workouts/:id', async (req,res) => {
    
});

router.get('/api/workouts/range/', async (req,res) => {
    
});

//POST requests

router.post('api/workouts/:id', async (req,res) => {
    
});

//PUT requests

router.put('api/workouts/:id', async (req,res) => {
    
});

module.exports = router;