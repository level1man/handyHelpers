import React, { useState, useEffect } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Request from './Request';
import Login from './Login';


const App = () => {

    return (
      <div className="main">
        <div className="topbar">
          <h1>handyHelpers</h1>
        </div>
        <Login />
      </div>


    )

};

export default App;