import React from 'react';
import {Route, Link} from 'react-router-dom';

import Login from './components/Login.js';

import './App.css';

function App() {
  return (
    <div className="App">


      {/* {Links} */}
      <Link to='/login/'>Login</Link>


      {/* {Routes} */}
      <Route path='/login/' component={Login} />
    </div>
  );
}

export default App;
