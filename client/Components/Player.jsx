import React, { Component} from 'react'; 
//import { render } from 'react-dom';
//import { Route } from 'react-router'
import  '../styling/Player.styles.css';

 const Player = ({player}) => {
    const {Position, Name, Rank, TotalScore} = player;
    return (
        // key={Key}
        <div className='player-div'>
           <p className = 'position-div'> {Position + 1 } </p>
           <h1 alt={`player  ${Name}`} className = 'name-div'> {Name} </h1>
           {/* <p className = 'rank-div'> {Rank}</p> */}
           <p className = 'score-div'>{TotalScore}</p>
        </div>
    )
}

export default Player;
