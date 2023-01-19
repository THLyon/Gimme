import React from 'react'; 
import '../styling/Footer.styles.css'

const Footer = () => {
    return (
        <div className = 'footer-div'>
            <div className='footer-spread'>
                <div className='left-div'>
                    <ul id='home'> Home </ul>
                </div>
                <div className='center-div'>
                <ul> Created by Tanner Lyon </ul>
                </div>
                <div className='right-div'>
                    <ul id='about'> About  </ul>
                    <ul id='API'> API </ul>
                    <ul id='chrome-extension'> Chrome Extension </ul>
                </div>
            </div>
        </div>
    )
}; 

export default Footer; 