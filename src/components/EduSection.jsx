import React, { useRef } from "react";
import { useInView } from "framer-motion";

export const EduSection = () => {
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
      <section
        id="education"
        ref={ref}
        className="section h-[50rem] pl-20 items-left justify-center"
      >
        <h1 className="font-header text-6xl text-header_text pb-[5rem]">
          EDUCATION
        </h1>
        <div className="flex flex-col">
          <p className="pb-10 text-accent font-header text-8xl relative">
            <span className="absolute top-0 left-0 translate-x-2 text-secondary">
              2024
            </span>
            <span className="relative text-accent">2024</span>
          </p>
          <p className="block relative text-4xl pb-2 font-header text-header_text">
            LIGHTHOUSE LABS -{" "}
          </p>
          <p className="block relative text-4xl pb-5 font-header text-header_text">
            WEB DEVELOPMENT PROGRAM
          </p>
          <p className="text-text font-body text-lg mr-60">
            Education info here
          </p>
        </div>
      </section>
    </div>
  );
};

export default EduSection;
