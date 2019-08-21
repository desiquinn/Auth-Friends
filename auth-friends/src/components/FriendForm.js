import React from 'react';

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }

const FriendForm = () => {
    
    return(
        <form>
            <h1>Add A Friend!</h1>
            <p>Fill out the form below to add a friend to your friends list.</p>
            <input 
                type='text'
                name='name'
                placeholder='Name'


            />
            <input 
                type='number'
                name='age'
                placeholder='Age'

                
            />
            <input 
                type='email'
                name='email'
                placeholder='Email'
  
                  
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default FriendForm;