import React from 'react'; 
import '../Styling/Tournament.styles.css'

const Tournament = ({tournament}) => {

    const { Name, Location, Venue, Purse, Par, Yards } = tournament
    return (
        <div className='tournament-module'>
            <div className = 'tournament-header'>
                <div className='tournament-name'> <b>Name:</b> {Name} </div>
                <div className='tournament-location'> <b>Location :</b> {Location} <b>Venue:</b> {Venue} </div>
                <div className='tournament-details'> <b>Purse: </b>{Purse} <b>Par: </b>{Par} <b>Yardage:</b> {Yards} </div>
            </div>
        </div>
    )
};

export default Tournament;