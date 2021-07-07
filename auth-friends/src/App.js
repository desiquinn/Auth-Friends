import React from 'react';
import {Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';
import FriendForm from './components/FriendForm.js';


import './App.css';

function App() {
  return (
    <div className="App">


      {/* {Links} */}
    
          <Link to='/login/'>Login</Link><br/>
        
          <Link to='/friendslist/'>Friends List</Link><br/>
        
          <Link to='/addfriend/'>Add A Friend</Link><br/>
       

      {/* {Routes} */}

      <Route path='/login/' component={Login} />

      <PrivateRoute exact path='/friendslist/' component={FriendsList} />

      <PrivateRoute path='/addfriend/' component={FriendForm} />
    </div>
  );
}

export default App;
