import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="section h-screen ml-10 items-left justify-center">
      <h1 className='font-header text-header_text mb-10'>
        <span className="block relative text-6xl">REBECCA SMITH - </span>
        <span className="block relative text-4xl ">JUNIOR FULL STACK DEVELOPER</span>
      </h1>
      <div className="flex flex-row">
        <div className="bg-accent h-[40rem] w-[30rem] rounded-2xl relative before:absolute before:h-[40rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10" />
        <p className='ml-[10rem] mt-[2rem] text-text font-body text-lg'>Information about me goes here</p>
      </div>
    </section>
  );
};

export default IntroSection;