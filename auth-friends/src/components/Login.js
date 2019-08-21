import React from 'react';


//username, password, submit button

const Login = () => {

    return(
        <form>
            <h1>Login Here!</h1>
            <p> Enter your username and password to gain access to your friends list</p>
            <input 
                type='text'
                name='username'
                placeholder='Username'


            />
            <input 
                type='password'
                name='password'
                placeholder='Password'

                
            />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;