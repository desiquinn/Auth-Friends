import React, {useState} from 'react';
import axios from 'axios';


//username, password, submit button

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const handleChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setCredentials({
                ...credentials,
                [event.target.name]: event.target.value
            }
        );
        // console.log(credentials);
    };

    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log('response:', res);
            console.log('token:', res.data.payload);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/FriendsList');
        })
        .catch(err => {
            console.log('error:', err.response);
            console.log('error description:', err.response.data.error);
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