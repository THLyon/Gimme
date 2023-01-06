import {useState, useEffect} from 'react'; 
import Leaderboard from './Components/Leaderboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tournament from './Components/Tournament';
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
    const [favorites, SetFavorites] = useState([]); 
    const [tournament, setTournament] = useState({});
    // console.log(leaderboard)
    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setLeaderboard(data))
    }, []);

    useEffect(() => {
        fetch('/api/details')
            .then(res => res.json())
            .then(data => setTournament(data))
    }, {});

    return (
        <div className='App'>
                <Header />
                <Tournament tournament = {tournament} />
                <Leaderboard leaderBoard = {leaderBoard} />
                <Footer />
        </div>
        )
    };

    export default App; 
