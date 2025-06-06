import React from 'react';

const ProjectItem = ({ img, title, demoLink, codeLink }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
        <h3 className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white'></p>
        <div className='flex justify-center gap-4'>
          <a href={demoLink} target='_blank' rel='noopener noreferrer'>
            <p className='px-4 py-2 bg-white text-gray-700 font-bold rounded-lg text-sm cursor-pointer'>
              Demo
            </p>
          </a>
          <a href={codeLink} target='_blank' rel='noopener noreferrer'>
            <p className='px-4 py-2 bg-white text-gray-700 font-bold rounded-lg text-sm cursor-pointer'>
              GitHub
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;


