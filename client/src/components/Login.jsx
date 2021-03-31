import React, { useState, useEffect } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Topbar from './Topbar';
import Request from './Request';


const users = [
  {
    userName: 'babyshark',
    passWord: 'babyshark',
    id: 1,
  },
  {
    userName: 'daddyshark',
    passWord: 'daddyshark',
    id: 2,
  }
]

const Login = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const handleChange = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    for(let i = 0; i < users.length; i++) {
      if(currentUser.userName === users[i].userName && currentUser.passWord === users[i].passWord) {
        console.log('here');
        setCurrentUser({
          ...currentUser,
          id: users[i].id
        });
        setLoginStatus(true);
      }
    }
  }

  if(loginStatus === true){
    return (
      <div>
        <Topbar />
        <Request currentId = {currentUser.id}/>
     </div>
    )
  } else {
    return (
      <div>
        <Topbar />
        <form className="attendee-form" onSubmit={handleSubmit}>
          <h2>Please Login</h2>
          <label>Username:
            <input type="text" name="userName" onChange={handleChange}/>
          </label>
          <label>Password:
            <input type="text" name="passWord" onChange={handleChange}/>
          </label>
          <button>Login</button>
        </form>
      </div>
    )
  }

};

export default Login;