import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2022,
    title: 'IIE Varsity College',
    duration: '1 year',
    details:
      'Completed a Higher Certificate in Mobile Application and Web Development',
  },
  {
    year: 2023,
    title: 'IIE Varsity College',
    duration: '3 years',
    details:
      'Bachelor of Computer and Information Science in Application Develepment',
  },
  {
    year: 2024,
    title: 'Melsoft Academy',
    duration: '1 years',
    details:
      'Software Development Program',
  },
  {
    year: 2023-2025,
    title: 'Peer-to-Peer Mentor',
    duration: '3 years',
    details:
      'Guiding students like me, based on the course content they need help with',
  },
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Experience</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
