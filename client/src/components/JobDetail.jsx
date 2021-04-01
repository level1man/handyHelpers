import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Request from './Request';


const JobDetail= ({currentJob, handleClose, currentUser, setCurrentJob}) => {

   const markPending = () => {

     axios.put('/jobs', {user:currentUser, job:currentJob})
     .then(setCurrentJob({}));
     handleClose();

   }

    return (
      <div id="job-detail">
          <h2>{currentJob.jobdescription}</h2>
          <p>BY</p>
          <h3>{currentJob.username}</h3>
          <img src="./images/couch.jpeg"width="200px" height="200px" />
          <div>
            <button type="button" id="accept" onClick={markPending}>Accept Job</button>
            <button type="button" id="accept" onClick={() => alert('start chatting')}>Send Messages</button>
          </div>

      </div>
    )

};

export default JobDetail;