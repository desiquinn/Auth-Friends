import React from 'react';

//{
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const Friend = () => {

    return (
        <div>
            <h3>Your Friend's Name{/*props.friend.name*/}</h3>
            <p>age: his/her age{/*props.friend.age*/}</p>
            <p>email: his/her email{/*props.friend.email*/}</p>  
        </div>
    );
};

export default Friend;