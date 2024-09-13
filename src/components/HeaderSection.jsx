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
        <div className="flex flex-col justify-center h-auto sm:pl-10 md:pl-20 lg:pl-20 pt-40 gap-40">
          <div className="relative">
            <h1 className="relative">
              <span className="block relative">
                <span className="absolute top-0 left-0 text-secondary sm:translate-x-1 md:translate-x-2 lg:translate-x-2">
                  WELCOME
                </span>
                <span className="relative text-accent">WELCOME</span>
              </span>
              <span className="block relative">
                <span className="absolute top-0 left-0 text-secondary sm:translate-x-1 md:translate-x-2 lg:translate-x-2">
                  TO MY
                </span>
                <span className="relative text-accent">TO MY</span>
              </span>
              <span className="block relative">
                <span className="absolute top-0 left-0 text-secondary sm:translate-x-1 md:translate-x-2 lg:translate-x-2">
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
