import React from 'react';

//{
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


const Friend = (props) => {

    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>age:{props.friend.age}</p>
            <p>email:{props.friend.email}</p>  
        </div>
    );
};

export default Friend;