import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from './Listing';

const Request = ({currentUser}) => {

  const [newJob, setNewJob] = useState({});
  const [jobListing, setJobListing] = useState([]);
  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    getList();
  },[newJob]);

  const getList = () => {
    axios.get(`/jobs`)
    .then((data)=>setJobListing(data.data))
    .catch((err) => console.log(err));
  }



  const handleChange = (event) => {
    setNewJob({
      ...newJob,
      posterid: currentUser.id,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewJob({
      ...newJob,
      posterid: currentUser.id,
    });
    axios.post('/jobs', newJob);
    event.target.reset();
    //this.props.addAttendee(this.state);
  }

  return (
    <div className="profile">
      <div className="userinfo">
        <img src={currentUser.photo} id="profile-pic" width="200px" height="200px" />
        <div>
          <h3>{currentUser.userName}</h3>
          <p>100 Job Ruquests</p>
          <p>75 Job Completed</p>
          <p>269 people follow</p>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14833.426846187203!2d-158.07157747047043!3d21.64997692064109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c005993278aa08f%3A0x7af5606caf43ba2a!2zU2hhcmvigJlzIENvdmU!5e0!3m2!1sen!2sus!4v1617298139487!5m2!1sen!2sus" width="780" height="450" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <Listing id="listing" currentUser={currentUser} jobListing={jobListing} setCurrentJob={setCurrentJob} currentJob={currentJob} getList={getList}/>
    </div>
  )
};

export default Request;