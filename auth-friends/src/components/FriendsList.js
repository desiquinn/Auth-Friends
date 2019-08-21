import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

import Friend from "./Friend.js";

//{
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect( () => {

        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('Get Request Response:', res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('Get Request Error:', err.response)
            })

    },[])
    

    return(
        <div>
            <section>
                <h1>Your Friends List</h1>
                <p>
                    Scroll through your friends list to find information on all your friends.
                    Click on "Add A Friend" to grow your friend's list.
                </p>
            </section>

            <section>
                {friends.map(friend => {
                    return <Friend key={friend.id} friend={friend}/>
                })}
            </section>
        </div>
    );
};

export default FriendsList;