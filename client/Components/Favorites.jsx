import '../styling/Favorites.styles.css';

const Favorites = ({players}) => {
    const [Name, Score, Rank] = Players
    return(
        <div className = 'Favorites-div'>
            {players.map((player, index) => {
                <Favorites player={player} score={Score} rank={Rank} key={index}/>
            })}
        </div>
    )
}