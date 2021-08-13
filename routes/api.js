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
      .then(workoutDb => {
        res.json(workoutDb);
      })
      .catch(err => res.status(400).json(err));
});

//Might not be being used??? Might Only Be posting
router.get('/api/workouts/:id', async (req,res) => {
    
});

//GET RANGE
router.get('/api/workouts/range/', async (req,res) => {
    
});

//POST WORKOUT
router.post('api/workouts/', async ({body},res) => {
        await Workout.create(body)
          .then(workoutDb => {
            res.json(workoutDb);
          })
          .catch(err => res.status(400).json(err));
});

//UPDATE WORKOUT
router.put('api/workouts/:id', ({body},res) => {
    // Workout.findByIdAndUpdate({body.id})
    // .then(workoutDb => {
    //     res.json(workoutDb)
    // })
    // .catch(err => res.status(400).json(err));
});

module.exports = router;