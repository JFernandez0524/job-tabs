import React from 'react';

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <aside className='btn-container'>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={currentItem === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </aside>
  );
};

export default BtnContainer;
