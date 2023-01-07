import React from 'react'; 
import '../styling/Tournament.styles.css'

const Tournament = ({tournament}) => {

    const { Name, Location, Venue, Purse, Par, Yards } = tournament
    return (
        <div className='tournament-module'>
        test
            <div className='tournament-name'> {Name} </div>
            <div className='tournament-location'> {Location} {Venue} </div>
            <div className='tournament-details'> {Purse} {Par} {Yards} </div>
        </div>
    )
};

export default Tournament;