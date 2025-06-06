import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div
      id='main'
       className="w-full min-h-screen bg-gradient-to-r from-pink-300 to-indigo-900">
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center px-4'>

          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
            Bridget Sibanda Here
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            An aspiring&nbsp;
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Programmer',       2000,
                'Tech Enthusiast',  2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;