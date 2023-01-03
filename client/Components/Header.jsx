import React, { Component} from 'react'; 
import  '../styling/Header.styles.css';

const Header = () => {

    return(
        <div className = 'header-div'>
            <div className = 'menu-div'> 
                <button className = 'menu-button'> Menu </button>
            </div>
            <div className = 'name-div'>
                <h1 className = 'header-name'> Gimme </h1>
            </div>
            <div className = 'name-div'>
                <button className = 'sign-in-button'> Sign In </button>
            </div>
        </div>
    )
}

export default Header; 