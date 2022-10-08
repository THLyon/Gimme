import React, { Component } from 'react'; 
import Leaderboard from './Components/Leaderboard.jsx'; 
import {BrowserRouter, Route, Routes }  from 'react-router-dom';
import './styling/styles.css';


export default function App() {
//    constructor(props){
//         super(props); 
        
//         this.state = {
//             // tournament: { 
//             //     tournamentName: [],
//             //     venue: [],
//             //     Location: [], 
//             //     par: [], 
//             //     yardage: [],
//             //     players: []  
//             // }, 
//             players: {
//                 name: [], 
//                 rank: [], 
//                 shots: []
//             }
//         }
//     }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/gimme" element={<Leaderboard />} />
                {/* <Route path="/documents" element={<Documents />} /> */}
            </Routes>
        </BrowserRouter>
        )
    }
