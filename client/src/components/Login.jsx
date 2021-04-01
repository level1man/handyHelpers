import React, { useState, useEffect } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Request from './Request';


const users = [
  {
    userName: 'babyshark',
    passWord: 'babyshark',
    id: 1,
    photo: 'https://i.pinimg.com/originals/25/b6/1f/25b61fa1dfeff4cf7c1691614ed9b38e.jpg'
  },
  {
    userName: 'daddyshark',
    passWord: 'daddyshark',
    id: 2,
    photo: 'https://clipart.world/wp-content/uploads/2020/08/daddy-shark.jpg'
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
          id: users[i].id,
          photo: users[i].photo
        });
        setLoginStatus(true);
      }
    }
  }

  if(loginStatus === true){
    return (
      <div>
        <Request currentUser = {currentUser}/>
      </div>


    )
  } else {
    return (
      <div className="bg-img">
        <form className="job-form" id="login" onSubmit={handleSubmit}>
          <h1>Get a hand from your neighbors</h1>
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