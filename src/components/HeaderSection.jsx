import React from 'react'

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-left justify-center h-[70rem] pl-20">
      <div className="relative">
        <h1 className="text-8xl font-header relative">
          <span className="block relative">
            <span className="absolute top-0 left-0 translate-x-2 text-secondary">
              WELCOME
            </span>
            <span className="relative text-accent">WELCOME</span>
          </span>
          <span className="block relative">
            <span className="absolute top-0 left-0 translate-x-2 text-secondary">
              TO MY
            </span>
            <span className="relative text-accent">TO MY</span>
          </span>
          <span className="block relative">
            <span className="absolute top-0 left-0 translate-x-2 text-secondary">
              PORTFOLIO
            </span>
            <span className="relative text-accent">PORTFOLIO</span>
          </span>
        </h1>
      </div>
    </div>
  )
};

export default HeaderSection;