import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    setSubmitted(true); // show thank you message
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        Let's Connect
      </h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Name</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300'
                type='text'
                name='name'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Phone Number</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300'
                type='text'
                name='phone'
              />
            </div>
          </div>

          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='email'
              name='email'
              required
            />
          </div>

          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea
              className='border-2 rounded-lg p-3 border-gray-300'
              rows='10'
              name='message'
              required
            ></textarea>
          </div>

          <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center text-2xl font-semibold text-[#001b5e] py-16">
          ✅ Thank you for your message! I’ll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Contact;
