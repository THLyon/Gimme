import {useState, useEffect} from 'react'; 
import Leaderboard from './Components/Leaderboard';
import Player from './Components/Player';
import './styling/styles.css';

//todo
    //1:
        //set up states for three portions of fetch req
        //confirm data is received on frontend
        //pass data to leaderboard and player components
    //2: render players in individual divs on page
    //3: TBD
const App = () => {
    const [leaderBoard, setLeaderboard] = useState([]);
    console.log(leaderboard)

    useEffect(() => {
        fetch('http://localhost:3000/gimme/api')
            .then(res => res.json())
            .then(players => setLeaderBoard(players))
        
        // //api to access current season
        // const currentSeasonApi = `https://api.sportsdata.io/golf/v2/json/CurrentSeason`;

        // //api to access tournaments via season 
        // //const TournamentIdApi = `https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`

        // //api to access leaderboard of a tournament
        // //const leaderboardApi = `https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`;

        // //site wide api key (https://sportsdata.io/developers/api-documentation/golf)
        // const apiKey = '74708e84c6d243bc832af07d61be8d8d';



        // function currentDate(date, num = 0) {
        //     let d = new Date(date),
        //         month = '' + (d.getMonth() + 1),
        //         day = '' + (d.getDate() + num) ,
        //         year = d.getFullYear();

        //     if (month.length < 2) month = '0' + month;
        //     if (day.length < 2) day = '0' + day;

        //     return ([year, month, day].join('-')+ 'T00:00:00');
        // };

        // //middleware to access season: 
        //     fetch(currentSeasonApi, {
        //         method: 'GET',
        //         headers: {
        //             'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //             'Accept': 'application/json', 
        //             'Content-type': 'application/json'
        //         }
        //     }) 
        //     .then((data) => data.json())
        //     .then((data) => {
        //         // res.locals.season = data.SeasonID
        //         // console.log(data.SeasonID);
        //         seasonId = data.SeasonID; 
        //         console.log('seasonID')
        //         // next(); 
        //         // setLeaderboard(data);
        //     })
        //     .then(fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`,{
        //                 method: 'GET',
        //                 headers: {
        //                     'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //                     'Accept': 'application/json',
        //                     'Content-type': 'application/json'
        //                 }
        //         })
        //         .then((data) => data.json())
        //         .then((data) => {
        //             for(let i = 0; i < data.length; i++){
        //                 if(data[i].hasOwnProperty('StartDate') || data[i].hasOwnProperty('EndDate')){
        //                     if(data[i].StartDate === currentDate(Date(), 0) || data[i].StartDate === currentDate(Date(), 1) || data[i].StartDate === currentDate(Date(), 2) || data[i].StartDate === currentDate(Date(), 3) || data[i].StartDate === currentDate(Date(), 4) || data[i].EndDate === currentDate(Date(), 0) || data[i].EndDate === currentDate(Date(), 1) || data[i].EndDate === currentDate(Date(), 2) || data[i].EndDate === currentDate(Date(), 3) || data[i].EndDate === currentDate(Date(), 4)){
        //                         // res.locals.tournament = data[i].TournamentID;
        //                         tournamentId = data[i].TournamentID;
        //                         // console.log(res.locals.tournament)
        //                 }
        //             }
        //             console.log('tournaments')
        //             }
        //             // next()
        //         })
        //         .then( fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`,{
        //         method: 'GET',
        //         headers: {
        //             'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json'
        //         }
        //             })
        //             .then((data) => data.json())
        //             .then((data) => {
        //                 // console.log(data)
        //                 const leaders = []; 
        //                 // for(let i = 0; i < data.Tournament.Players.length; i++){
        //                 //     if(i <= 10){
        //                 //         leaders.push(data.Tournament.Players[i])
        //                 //     }
        //                 //  }
        //                 let i = 0; 
        //                 while(i < 10){
        //                     leaders.push(data.Players[i].Name)
        //                     i++
        //                 }
        //                 // console.log(leaders)
        //                 // console.log(leaders.length)
        //                 // res.locals.leaders = leaders
        //                 setLeaderboard(leaders);
        //                 console.log('leaders')
        //                 // next();
        //             })
        //             .catch(err => createErr({
        //                     log: 'getLeaderboard middleware Error', 
        //                     status: 400,
        //                     message: {err: 'error in getLeaderboard middlware'}
        //     })))
        //         .catch(err => createErr({
        //                 log: 'getTournament middleware Error', 
        //                 status: 400,
        //                 message: {err: 'error in getTournament middlware'}
        //         })))
        //     .catch(err => next(createErr({ 
        //             log: 'getSeason middleware Error',  
        //             status: 500,
        //             message: {err: 'error in getSeason middlware'}
        //     })));

    }, []);


    return (
        <div className='App'>
            {/* <Leaderboard leaders = {leaderBoard}/>
            console.log(leaderBoard); */}
            testing
        </div>
        )
    };

    export default App; 
