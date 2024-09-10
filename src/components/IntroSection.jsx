import React from 'react';

const IntroSection = () => {
  return (
    <section id="intro" className="section h-[70rem] pl-20 items-left justify-center">
      <h1 className='font-header text-header_text'>
        <p className="block relative text-6xl pb-2">REBECCA SMITH - </p>
        <p className="block relative text-4xl pb-[5rem]">JUNIOR FULL STACK DEVELOPER</p>
      </h1>
      <div className="flex flex-row">
        <div className="flex-grow-0 flex-shrink-0 before:flex-grow-0 before:flex-shrink-0 bg-accent h-[40rem] w-[30rem] rounded-2xl relative before:absolute before:h-[40rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10">
        </div>
        <p className='pl-[10rem] pt-[2rem] text-text font-body text-lg mr-60'>Information about me goes here</p>
      </div>
    </section>
  );
};

export default IntroSection;