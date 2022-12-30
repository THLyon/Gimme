import React, { Component} from 'react'; 
//import { render } from 'react-dom';
//import { Route } from 'react-router'
import  '../styling/Player.styles.css';

 const Player = ({player}) => {
    const {Key, Name, Rank, TotalScore} = player;
    return (
        // key={Key}
        <div className='player-div'>
           <h1 alt={`player  ${Name}`}> {Name} </h1>
           <p> {Rank}</p>
           <p>{TotalScore}</p>
        </div>
    )
}

export default Player;
