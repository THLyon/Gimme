import React from 'react'; 


const Tournament = ({tournament}) => {
    const { Name, Location, City, State, Purse, Par, Yards } = tournament
    return (
        <div class = 'tournament-module'>
            <div class = 'tournament-name'> {Name} </div>
            <div class = 'tournament-location'> {Location} {City} {State} </div>
            <div class = 'tournament-details'> {Purse} {Par} {Yards} </div>
        </div>
    )
};

export default Tournament;