import React, { Component} from 'react'; 
import { render } from 'react-dom';
import { Route } from 'react-router'

 const Leaderboard = ({leaderBoard}) => {
    const {name, rank, TotalScore} = leaderBoard;
    // const [leaderBoard, setLeaderboard] = useState([]);
    // console.log(leaderboard)
    // useEffect(() => {
    //     fetch('localhost:3000/gimme/api')
    //         .then(res => res.json())
    //         .then(players => setLeaderBoard(players))
    // }, []);

    return (
        <div>
           {/* <Player/> */}
        </div>
    )
}

export default Leaderboard;
