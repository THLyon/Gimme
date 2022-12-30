import React from 'react'; 
//import { render } from 'react-dom';
//import { Route } from 'react-router'
import Player from './Player'
import  '../styling/Leaderboard.styles.css';

 const Leaderboard = ({leaderBoard}) => {
    // const {Key, Name, Rank, TotalScore} = leaderBoard;
    return (
        <div className = 'leaderboard-div' >
        {leaderBoard.map((player, index) => (//parenthesis rather than curly bracket elemenates need for return statement; 
           <Player player = {player} key={index}/>
        ))}
      </div>
    )
}

export default Leaderboard;
