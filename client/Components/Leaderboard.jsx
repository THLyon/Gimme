import React from 'react'; 
//import { render } from 'react-dom';
//import { Route } from 'react-router'
import Player from './Player'

 const Leaderboard = ({leaderBoard}) => {
    const {Key, Name, Rank, TotalScore} = leaderBoard;
    // const [leaderBoard, setLeaderboard] = useState([]);
    // console.log(leaderboard)
    // useEffect(() => {
    //     fetch('localhost:3000/gimme/api')
    //         .then(res => res.json())
    //         .then(players => setLeaderBoard(players))
    // }, []);

    return (
        <div className = 'leaderboard' >
        {leaderBoard.map((player) => { //parenthesis rather than curly bracket elemenates need for return statement; 
         console.log(player);
          {/* return <Player Name = {Name} key = {Key}  score = { TotalScore} /> */}
          return <Player player = {player} />
        })}
      </div>
    )
}

export default Leaderboard;
