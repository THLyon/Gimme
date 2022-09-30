const fs = require('fs/promises'); 
const path = require('path'); 
const dateFunctionController = require('./dateFunctionController.js');


let seasonId; 

let tournamentId;

//output is a string 
//if string.length - 2 + string.length - 1 is >= startdate.length -2 + startDate.length - 1 &&  string.length - 2 + string.length - 1 is <= endDate.length -2 + enddate.length - 1
    //return tournamentid





//api to access current season
const currentSeasonApi = `https://api.sportsdata.io/golf/v2/json/CurrentSeason`;

//api to access tournaments via season 
const TournamentIdApi = `https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`

//api to access leaderboard of a tournament
const leaderboardApi = `https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`;

//site wide api key (https://sportsdata.io/developers/api-documentation/golf)
const apiKey = '74708e84c6d243bc832af07d61be8d8d';

//error handler?

//middleware fetching tournament id based on date; 
    //pass in tournament id based on date




function currentDate(date, num = 0) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + num) ,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};

const tournamentController = {}; 


//middleware to access season: 
tournamentController.getSeason = (req, res, next) => {
   const { SeasonId } = req.body; 
    console.log('getSeason')
    fetch(currentSeasonApi,{
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
            'Accept': 'application/json', 
            'Content-type': 'application/json'
        }

    }) 
    .then((data) => data.json())
    .then((data) => {
        res.locals.season = data.SeasonID
        console.log(res.locals.season);
        next(); 
    })
    .catch(err => next(createErr({
        //    method: 'getTournament', 
        //    type: 'when reading file', 
        //    err: err, 
              log: 'getSeason middleware Error',  
              status: 400,
              message: {err: 'error in getSeason middlware'}
       })));
}


//middleware to access tournament:
tournamentController.getTournament = (req, res, next) => {
  seasonId = res.locals.season;
fetch(TournamentIdApi,{
    method: 'GET',
    headers: {
        'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        'Content-type': 'application/json'
    }
})
   .then((data) => data.json())
   .then((data) => {
    //  if(data.date === new Date.now()){
    //     res.locals.tournaments = data.date; 
    //  }
       res.locals.tournaments = data; 
       console.log(res.locals.tournaments)
   })
   .catch(err => createErr({
    //    method: 'getTournament', 
    //    type: 'when reading file', 
    //    err: err, 
          log: 'getTournament middleware Error', 
          status: 400,
          message: {err: 'error in getTournament middlware'}
   }));
}


//middleware to access leaderboard
tournamentController.getLeaderboard = (req, res, next) => {
    //const leaderboardData = req.params.leaderboardData; 
    fetch(leaderboardApi,{
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
            'Content-type': 'application/json'
        },
        // body: JSON.stringify(data)
    })
    .then((data) => data.json())
    .then((data) => {
        res.locals.leaderboard = data; 

    })
    .catch(err => createErr({
        //    method: 'getTournament', 
        //    type: 'when reading file', 
        //    err: err, 
              log: 'getLeaderboard middleware Error', 
              status: 400,
              message: {err: 'error in getLeaderboard middlware'}
       }));
}


//controller error handler
const createErr = (errInfo) => {
    const { log, status, message } = errInfo; 
    return {
        log: `${log, status}`, 
        message: { err: `${message}`}
    }
}

//potential add player file controller here

module.exports = tournamentController; 