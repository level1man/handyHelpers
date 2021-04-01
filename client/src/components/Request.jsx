import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from './Listing';

const Request = ({currentUser}) => {

  const [currentJob, setCurrentJob] = useState({});

  const handleChange = (event) => {
    setCurrentJob({
      ...currentJob,
      posterid: currentUser.id,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentJob({
      ...currentJob,
      posterid: currentUser.id,
    });
    axios.post('/jobs', currentJob);
    event.target.reset();
    //this.props.addAttendee(this.state);
  }

  return (
    <div className="profile">
      <div className="userinfo">
        <img src={currentUser.photo} id="profile-pic" width="200px" height="200px" />
        <div>
          <h3>{currentUser.userName}</h3>
          <p>Job Ruquests: 100</p>
          <p>Job Completed: 75</p>
          <img src="./images/star1.png"  id="star-pic" width="200px" />
        </div>
      </div>
      <div className='p-body'>
        <form className="job-form" id="request-form" onSubmit={handleSubmit}>
          <h2>Make a REQUEST</h2>
          <label>First Name:
            <input type="text" name="firstName" onChange={handleChange}/>
          </label>
          <label>Last Name:
            <input type="text" name="lastName" onChange={handleChange}/>
          </label>
          <label>Phone:
            <input type="text" name="phone" onChange={handleChange}/>
          </label>
          <label>Job Description:
            <input type="text" name="jobdescription" onChange={handleChange}/>
          </label>
          <button>POST RQUEST</button>
        </form>
        <img src="./images/map.jpeg" id="map" width="750px" />
      </div>

      <Listing id="listing" currentUser={currentUser}/>
    </div>
  )
};

export default Request;