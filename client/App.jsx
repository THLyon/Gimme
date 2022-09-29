import React, { Component } from 'react'; 
// import Leaderboard from './Components/Leaderboard.jsx'; 
import { Route }  from 'react-router-dom';
import './styling/styles.css';


export default class App extends Component {
   constructor(props){
        super(props); 
        
        // this.state = {
        //     tournament: { 
        //         tournamentName: [],
        //         venue: [],
        //         Location: [], 
        //         par: [], 
        //         yardage: [],
        //         players: []  
        //     }, 
        //     players: {
        //         name: [], 
        //         rank: [], 
        //         shots: []
        //     }
        // }
    }

    componentDidMount(){
        // fetch('/api/')
        //     .then(res => res.json())
        //     .then((data) => {

        //     })
    }

    render(){
        return (
            <div>
                <main>
                    <h1> Test </h1>
                    {/* <LeaderBoard/> */}
                </main>
           </div>
        );
    }
}

