import {useState, useEffect} from 'react'; 
import Leaderboard from './Components/Leaderboard';
//import Player from './Components/Player';
import './styling/styles.css';

//todo
    //1:
        //set up states for three portions of fetch req
        //confirm data is received on frontend
        //pass data to leaderboard and player components
    //2: render players in individual divs on page
    //3: TBD
const App = () => {
    const [leaderBoard, setLeaderboard] = useState([]);
    // console.log(leaderboard)
    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setLeaderboard(data))
    }, []);


    return (
        <div className='App'>
            <Leaderboard leaderBoard = {leaderBoard} />
        </div>
        )
    };

    export default App; 
