import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from './Listing';

const Request = ({ currentId }) => {

  const [currentJob, setCurrentJob] = useState({});

  const handleChange = (event) => {
    setCurrentJob({
      ...currentJob,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //this.props.addAttendee(this.state);

    console.log(currentJob);
  }

  return (
    <div>
      <h2>Request</h2>
      <form className="attendee-form" onSubmit={handleSubmit}>
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
          <textarea type="text" name="description" onChange={handleChange}/>
        </label>
        <button>POST RQUEST</button>
      </form>
      <Listing currentId={currentId}/>
    </div>
  )
};

export default Request;