import Duties from './Duties';
import React from 'react';

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, duties, title, id } = jobs[currentItem];

  return (
    <section key={id}>
      <h1>{title} </h1>
      <p className='job-company'>{company}</p>
      <h4 className='job-date'>{dates}</h4>
      <Duties duties={duties} />
    </section>
  );
};

export default JobInfo;
