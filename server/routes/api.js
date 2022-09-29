
const express = require('express')
const tournamentController = require('../controllers/tournamentController');
//const leaderboardController = require('../controllers/leaderboardController');
// import leaderboardController from '../controllers/leaderboardController.js';
// const leaderboardController = require('../controllers/leaderboardController.js')
const router = express.Router(); 

//access leaderboard data here; 

router.get('/', tournamentController.getSeason, tournamentController.getTournament, tournamentController.getLeaderboard, (req, res) => {
    console.log(res.locals)
    res.status(200).send(res.locals);  //.tournamentData
});

router.get('/tournament', tournamentController.getTournament, (req, res) => {
    return res.status(200).send(res.locals); 
})


module.exports= router; 