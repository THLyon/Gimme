import {useEffect, react} from 'react'; 
import Header from './Header';
import Footer from './Footer';
import '../Styling/Signup.styles.css';

const Signup = () => {
    const [firstName, firstNameOnChange] = useInput('');
    const [lastName, lastNameOnChange] = useInput('');
    const [email, emailOnChange] = useInput('');
    const [inputPassword, passwordOnChange] = useInput('');

    const createUser = () => {
        const body = {
          firstName,
          lastName,
          email,
          username,
          password
        }
    
        fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
          })
          .then((data) => {
            console.log(data);
            if(data) navigateToProfile();
            else alert('Wrong Email or Password');
          })
          .catch((error) => console.log(error))
      }

    return(
        <div className='signin-page'>
            <Header/>
            <div className='signup-div'>
                <input className = 'firstName-div' />
                <input className = 'lastName-div'/>
                <input className = 'email-div'/>
                <input className = 'username-div'/>
                <input className = 'password-div'/>
                <button className = 'sign-up-button'> Sign Up</button>
                <a className='signin-alt' > Already have an Account?</a>
            </div>
            <Footer/>
        </div>
    )
}

export default Signup;