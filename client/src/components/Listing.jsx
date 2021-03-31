import React, { useState, useEffect } from 'react';
import axios from 'axios';

const jobListing = [
  {
    id: 1,
    firstName: 'Baby',
    lastName: 'Shark',
    phone: '206-123-1234',
    description: 'dump a couch1',
    completed: false,
    posterId: 1,
    fullfillerId: 0
  },
  {
    id: 2,
    firstName: 'Baby',
    lastName: 'Shark',
    phone: '206-123-1234',
    description: 'dump a couch2',
    completed: true,
    posterId: 2,
    fullfillerId: 1
  },
  {
    id: 3,
    firstName: 'Baby2',
    lastName: 'Shark2',
    phone: '206-123-1234',
    description: 'dump a couch3',
    completed: false,
    posterId: 1,
    fullfillerId: 0
  },
  {
    id: 4,
    firstName: 'Baby3',
    lastName: 'Shark3',
    phone: '206-123-1234',
    description: 'dump a couch4',
    completed: true,
    posterId: 1,
    fullfillerId: 2
  },
  {
    id: 5,
    firstName: 'Baby4',
    lastName: 'Shark4',
    phone: '206-123-1234',
    description: 'dump a couch5',
    completed: false,
    posterId: 1,
    fullfillerId: 0
  },
]
const Listing = ({currentId}) => {

  return (
    <div>
      <h2>Open Jobs</h2>
      {jobListing.map((job) => {
           if(!job.completed) {
             return <div className="job" key={job.id}>{`${job.description}`}</div>
           }
        })}
      <h2>Completed Jobs</h2>
      {jobListing.map((job) => {
           if(job.fullfillerId === currentId) {
             return <div className="job" key={job.id}>{`${job.description}`}</div>
           }
        })}
      <h2>Requests History</h2>
      {jobListing.map((job) => {
           if(job.posterId === currentId) {
             return <div className="job" key={job.id}>{`${job.description}`}</div>
           }
        })}
    </div>
  )
};

export default Listing;