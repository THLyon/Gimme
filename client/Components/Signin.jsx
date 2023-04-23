import {useEffect, react} from 'react'; 
import Header from './Header';
import Footer from './Footer';
import '../Styling/Signin.styles.css'

const Signin = () => {
   
    return(
        <div className='signup-page'>
            <Header/>
            <div className = 'signin-div'>
                <input className = 'username-div'/>
                <input className = 'password-div'/>
                <button className = 'signin-button'> Sign In </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Signin;