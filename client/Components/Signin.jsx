import {useEffect, react} from 'react'; 
import '../styles/Signin.styles.css'

const Signin = () => {
    return(
        <div className = 'signin-div'>
            <input className = 'username-div'/>
            <input className = 'password-div'/>
            <button className = 'signin-button'> Sign In </button>
        </div>
    );
}

export default Signin;