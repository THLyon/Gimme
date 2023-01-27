import {useEffect, react} from 'react'; 
import '../styles/Signup.styles.css';

const Signup = () => {
    return(
        <div className='signup-div'>
            <input className = 'firstName-div'/>
            <input className = 'lastName-div'/>
            <input className = 'email-div'/>
            <input className = 'username-div'/>
            <input className = 'password-div'/>
            <button className = 'sign-up-button'> Sign Up</button>
            <a className='signin-alt'> Already have an Account?</a>
        </div>
    )
}

export default Signup;