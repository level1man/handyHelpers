import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Topbar = () => {

  return (
    <div>
      <h1>handyHelpers</h1>
      <input name="search" placeholder="Search"/>
      <button>Search</button>
    </div>
  )
};

export default Topbar;