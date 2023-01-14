import {useState, useEffect} from 'react'; 
import Favorites from './Components/Favorites';
import Leaderboard from './Components/Leaderboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tournament from './Components/Tournament';
import Feed from './Components/Feed'
//import Player from './Components/Player';
import './styling/styles.css';

/* //todo
   * 1: Set up Favorite Player Functionality 
        * -backend controller 
        * -fetch logic
   * 2: Set up Database (thinking non-relational)
   * 3: Set up Authentication
   * 4: Routes to: 
        * -Login/Signup
        * -Home
        * -About
        * -Chrome Extension 
   * 5: CSS fixing 
        * -Leaderboard / Favorites Options: 
            * 1. Stretch leaderboard unless logged in, functionality for favorites;
            * 2. Favorites with filler suggesting create account or log in to see favorites; 
        * -NavBar
        * -Footer Details
        * -Login/Signup 
*/

const App = () => {
    const [leaderBoard, setLeaderboard] = useState([]);
    const [favorites, SetFavorites] = useState([]); 
    const [tournament, setTournament] = useState([]);
  
  //* Leaderboard Fetch; 
    useEffect(() => {
        fetch('/api/test')  
            .then(res => res.json())
            .then(data => setLeaderboard(data))
    }, []);

  //* Course Details Fetch; 
    useEffect(() => {
        fetch('/api/details')
            .then(res => res.json())
            .then(data => setTournament(data))
    }, []);
  //* Favorite Players Fetch; 
    // useEffect(() => {
    //     fetch('/api/...')
    //     .then(res => res.json())
    //     .then(data => setFavorites(data))
    // }, []);

    return (
        <div className='App'>
                <Header />
                <Tournament tournament = {tournament} />
                {/* <Favorites favorites = {favorites}/> */}
                <Leaderboard leaderBoard = {leaderBoard} />
                <Feed />
                <Footer />
        </div>
        )
    };

    export default App; 
