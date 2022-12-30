import React, { Component} from 'react'; 
import  '../styling/header.styles.css';

const Header = () => {

    return(
        <div className = 'header-div'>
            <h1 className = 'header-name'> Gimme </h1>
            <button className = 'sign-in-button'> Sign In </button>
        </div>
    )
}

export default Header; 