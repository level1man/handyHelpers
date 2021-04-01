import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Request from './Request';


const Pending = ({currentJob, handleClose, currentUser, setCurrentJob}) => {


    return (
      <div id="job-detail">
          <h2>{currentJob.jobdescription}</h2>
          <p>accepted BY</p>
          <h3>{currentJob.username}</h3>
          <img src="./images/couch.jpeg"width="200px" height="200px" />
      </div>
    )

};

export default Pending;