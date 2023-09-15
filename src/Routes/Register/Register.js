import '../SignIn/SignIn.css'

const Register = ({setIsLoggedIn}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        console.log("hiiii")    
    }

    const handleChange = (event) => {
        // setIsLoggedIn(true)
        console.log("hiiii")    
        event.prevent.default()
    }

    return(
        <>
            <h2>Register</h2>
            <form className="Register signIn" onSubmit={handleSubmit}>
                <label htmlFor="Name"/>
                <input type="text" id="Name" name="name" placeholder="Name" value="" onChange={handleChange}/>
                <label htmlFor="email"/>
                <input type="text" id="email" name="email" placeholder="email" value="" onChange={handleChange}/>
                <label htmlFor="RegisterButton"/>
                <input type="submit" id="RegisterButton" name="registerButton"/>
            </form>
        </>
    )
}

export default Register;