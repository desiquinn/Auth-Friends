import React, {useState} from 'react';
import axios from 'axios';


//username, password, submit button

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setCredentials({
                ...credentials,
                [event.target.name]: event.target.value
            }
        );
        console.log(credentials);
    };

    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return(
        <form onSubmit={login}>
            <h1>Login Here!</h1>
            <p> Enter your username and password to gain access to your friends list</p>
            <input 
                type='text'
                name='username'
                placeholder='Username'
                value={credentials.username}
                onChange={handleChange}
            />
            <input 
                type='password'
                name='password'
                placeholder='Password'
                value={credentials.password}
                onChange={handleChange}
            />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;