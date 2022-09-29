// const express = require('express'); 
const express = require('express')

const router = express.Router(); 
// const tournament = require('./tournamentController');

//need to fetch leaderboard data from api


const leaderboardApi = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/498'; //hardcoded next tournament date into 
const leaderboardApiKey = '74708e84c6d243bc832af07d61be8d8d'; 

const leaderboardController = {}; 

const createErr = (errInfo) => {
    const { method, type, err } = errInfo; 
    return {
        log: `leaderboardController.${getLeaderboard}: ${type} ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`, 
        message: { err: `leaderboardController.${getLeaderboard}. ERROR: check console log for more details`}
    }
}



leaderboardController.getLeaderboard = (req, res, next) => {
    //const leaderboardData = req.params.leaderboardData; 
    fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`,{
        method: 'POST',
        headers: {
            'X-API-KEY': '74708e84c6d243bc832af07d61be8d8d',
            'Accept': 'application/json', 
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((data) => data.json())
    .then((data) => {
        res.locals.leaderboard = data; 
        return next(); 
    })
    .catch(err => next(createErr({
        method: 'getLeaderboard', 
        type: 'when reading file', 
        err: err
    })));
}


module.exports = leaderboardController;