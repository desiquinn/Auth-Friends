import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState({ name: '', age: '', email: ''})

    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setNewFriend({
                ...newFriend,
                [event.target.name]: event.target.value
            }
        );
        console.log('newFriend:', newFriend);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log('Post Request Friends:', res.data)
            })
            .catch(err => {
                console.log('Post Request Error:', err.response)
            });
        setNewFriend({ name: '', age: '', email: ''})
    };

    return(
        <form onSubmit={handleSubmit}>
            <h1>Add A Friend!</h1>
            <p>Fill out the form below to add a friend to your friends list.</p>
            <input 
                type='text'
                name='name'
                placeholder='Name'
                value={newFriend.name}
                onChange={handleChange}
            />
            <input 
                type='number'
                name='age'
                placeholder='Age'
                value={newFriend.age}
                onChange={handleChange}
            />
            <input 
                type='email'
                name='email'
                placeholder='Email'
                value={newFriend.email}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default FriendForm;