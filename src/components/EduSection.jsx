import React from 'react';

export const EduSection = () => {
  return (
    <section id="education" className="section h-[50rem] pl-20 items-left justify-center">
      <h1 className='font-header text-6xl text-header_text pb-[5rem]'>EDUCATION</h1>
      <div className="flex flex-col">
      <p className='pb-10 text-accent font-header text-8xl relative'>
        <span className="absolute top-0 left-0 translate-x-2 text-secondary">
          2024
        </span>
        <span className="relative text-accent">
          2024
        </span>
      </p>
        <p className="block relative text-4xl pb-2 font-header text-header_text">LIGHTHOUSE LABS - </p>
        <p className="block relative text-4xl pb-5 font-header text-header_text">WEB DEVELOPMENT PROGRAM</p>
        <p className='text-text font-body text-lg mr-60'>Education info here</p>
      </div>
    </section>
  );
};

export default EduSection;