import React from 'react';
import JobDetail from './JobDetail';


const Modal = ({ handleClose, show, children, currentJob, currentUser, setCurrentJob }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <JobDetail currentJob={currentJob} handleClose={handleClose} currentUser={currentUser} setCurrentJob={setCurrentJob}/>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;