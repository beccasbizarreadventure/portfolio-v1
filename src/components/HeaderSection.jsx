import React from 'react'

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-left h-screen">
      <div className="relative">
        <h1 className="text-8xl font-header text-secondary absolute top-0 left-0 transform translate-x-1 translate-y-1">
          Welcome
          to my 
          Portfolio
        </h1>
        <h1 className="text-8xl font-header text-accent absolute top-0 left-0 ">
          Welcome 
          to my 
          Portfolio
        </h1>
      </div>
    </div>
  )
};

export default HeaderSection;