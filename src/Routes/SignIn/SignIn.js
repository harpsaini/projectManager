
import { Link } from 'react-router-dom';
import './SignIn.css';


const SignIn = ({setIsLoggedIn}) => {
    console.log(setIsLoggedIn)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        console.log("wowww")    
    }

    const handleChange = () => {
        console.log("hiiii")
    }
    
    return(
        <div className='SignInPage'>
            <form className="signInForm" name="signInForm" onSubmit={handleSubmit}>
                <label htmlFor="name"/>
                <input type="text" id="name" placeholder="FullName"  onChange={handleChange}/>
                <label htmlFor="email"/>
                <input type="text" id="email" placeholder="EmailAddress"  onChange={handleChange}/>
                <button type="submit">Sign in!</button>
            </form>
            <div>
                <Link to='./Register'>Register</Link>
            </div>
        </div>
    )
}

export default SignIn;