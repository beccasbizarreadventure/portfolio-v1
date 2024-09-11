import React, { useRef } from "react";
import { useInView } from "framer-motion";

const HeaderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      <section id="home" className="section" ref={ref}>
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
      </section>
    </div>
  );
};

export default HeaderSection;
