import React from 'react'; 
//import { render } from 'react-dom';
//import { Route } from 'react-router'
import Player from './Player'

 const Leaderboard = ({leaderBoard}) => {
    // const {Key, Name, Rank, TotalScore} = leaderBoard;
    return (
        <div className = 'leaderboard' >
        {leaderBoard.map((player, index) => (//parenthesis rather than curly bracket elemenates need for return statement; 
           <Player player = {player} key={index}/>
        ))}
      </div>
    )
}

export default Leaderboard;
