import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const motionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <div
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      <section
        ref={ref}
        id="intro"
        className="section h-auto sm:pl-10 md:pl-20 lg:pl-20 items-left justify-center"
      >
        <h2>
          <p className="block relative md:pb-2 lg:pb-2">REBECCA SMITH - </p>
          <p className="block relative sm:text-base md:text-2xl lg:text-4xl pb-10">
            JUNIOR FULL STACK DEVELOPER
          </p>
        </h2>
        <div className="flex sm:flex-col md:flex-col lg:flex-row">
          <Tooltip
            placement="bottom"
            motionProps={motionProps}
            offset={25}
            content={
              <motion.span
                className="bg-header_text bg-opacity-40 text-buttons px-3 py-2 rounded-xl font-body"
                initial={motionProps.initial}
                animate={motionProps.animate}
                exit={motionProps.exit}
                transition={motionProps.transition}
              >
                Levi is a great helper!!
              </motion.span>
            }
          >
            <div className="sm:h-[15rem] sm:w-[15rem] md:h-[25rem] md:w-[20rem] lg:h-[40rem] lg:w-[30rem] flex flex-grow-0 flex-shrink-0 justify-center items-center before:flex-grow-0 before:flex-shrink-0 bg-accent rounded-2xl relative before:absolute sm:before:h-[15rem] sm:before:w-[15rem] md:before:h-[25rem] md:before:w-[20rem] lg:before:h-[40rem] lg:before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:left-3 before:-z-10">
              <img
                src="/TempPic.jpg"
                alt="My Son"
                className="sm:h-[12rem] sm:w-[12rem] md:h-[20rem] md:w-[15rem] lg:h-[35rem] lg:w-[25rem] rounded-2xl border-5 border-buttons"
              />
            </div>
          </Tooltip>
          <ul className="lg:pl-[5rem] pt-[2rem] text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-40 lg:mr-60">
            <li className="pb-2 sm:pt-5 md:pt-5">
              Hi, I'm Rebecca! I recently discovered a passion for coding
              through Lighthouse Labs and have been dedicated to web development
              ever since. 
            </li>
              <li className="pb-2">
              My experience so far has been focused on building apps
              with JavaScript and React, using relational SQL databases with
              Express.js as the backend, and styling with CSS/Tailwind CSS.
            </li>
            <li className="pb-2">
              I would love to expand my knowledge further, particularly in
              exploring more React-based front-end frameworks, learning about
              different types of relational and non-relational databases, and
              getting a handle on TypeScript.
            </li>
            <li>
              Beyond coding, I have a love for tattoos, video games, baking, 
              creating digital art and my own embroidery designs. I also own two
              adorable bunnies, Levi and Laurel.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
