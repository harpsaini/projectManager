
import './SignIn.css';


const SignIn = ({setIsLoggedIn}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        console.log("hiiii")    
    }

    const handleChange = () => {
        console.log("hiiii")
    }
    
    return(
        <div>
            <form className="signIn" onSubmit={handleSubmit}>
                <label htmlFor="name"/>
                <input type="text" id="name" placeholder="Full name" value="" onChange={handleChange}/>
                <label htmlFor="email"/>
                <input type="text" id="email" placeholder="Email Address" value="" onChange={handleChange}/>
                <label htmlFor="signinButton"/>
                <input type="submit" id="signinButton" name="signinButton"/>
            </form>
            <div>
                <a href='./Register'>Register</a>
            </div>
        </div>
    )
}

export default SignIn;