const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000; 
app.use(express.json()); 


// const api = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/{tournamentid}'; 
// const apiKey = '74708e84c6d243bc832af07d61be8d8d'; 

//require routers
const apiRouter = require('./routes/api'); 
// const playerRouter = require('.routes/player'); 
// const tournamentRouter = require('./routes/tournament'); 


app.use('/build' , express.static(path.join(__dirname, '../build')));


// //route handlers
app.use('/api', apiRouter);
// // app.use('/playerRouter', playerRouter); 
// // app.use('/tournamentRouter', tournamentRouter); 


app.get('/', (req, res) => {
   // return res.status(200).sendFile(path.join(__dirname, './build/index.html'));
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

//Local error handler
app.use((req, res) => res.status(404)); 


//global error handler; 
app.use((err, req, res, next) => {
    const defaultErr =
    {
        log: 'Express error handler caught unknown middleware errror',
        status: 400, 
        message: { err: 'An error occured'},
    };
    const errorObj = Object.assign(defaultErr, err); 
    return res.status((errorObj.status)).json(errorObj.message);
})



app.listen(PORT, () => {console.log(`listening on port ${PORT}`)}); 


module.exports = app; 