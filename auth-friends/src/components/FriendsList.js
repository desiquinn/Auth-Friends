import React from 'react';

import Friend from "./Friend.js";

//{
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const FriendsList = () => {

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
                <Friend friend={friend}/>
            </section>
        </div>
    );
};

export default FriendsList;