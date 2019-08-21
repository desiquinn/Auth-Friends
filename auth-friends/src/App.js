import React from 'react';
import {Route, Link} from 'react-router-dom';

import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';

import './App.css';

function App() {
  return (
    <div className="App">


      {/* {Links} */}
      <ul>
        <li>
          <Link to='/login/'>Login</Link>
        </li>
        <li>
          <Link to='/protected/'>Friends List</Link>
        </li>
      </ul>

      {/* {Routes} */}
      <Route path='/login/' component={Login} />
      <Route exact path='/protected/' component={FriendsList} />
    </div>
  );
}

export default App;
