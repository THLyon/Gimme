import React from 'react'; 
import  '../styling/Header.styles.css';

const Header = () => {

    return(
        <div className = 'header-div'>
            <div className = 'menu-div'> 
                <button id='menu-button'> Menu </button>
            </div>
            <div className = 'name-div'>
                <h1 id='header-name'> Gimme </h1>
            </div>
            <div className = 'sign-in-div'>
                <button id='sign-in-button'> Sign In </button>
            </div>
        </div>
    )
}

export default Header; 