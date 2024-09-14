import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const links = [
    {
      link: "https://github.com/beccasbizarreadventure",
      icon: "fa-brands fa-github",
    },
    {
      link: "https://www.linkedin.com/in/rebecca-s-48bb01323/",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://flowcv.com/resume/ng1t19mdl5",
      icon: "fa-solid fa-circle-user",
    }
  ];

  return (
    <div
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      <section
        id="contact"
        className="section flex flex-col h-auto items-center justify-center"
        ref={ref}
      >
        <h2 className="sm:pb-7 md:pb-10 lg:pb-10">
          STAY IN TOUCH
        </h2>
        <div className="flex sm:space-x-7 md:space-x-10 lg:space-x-10 pb-10">
          {links.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
              key={index}
            >
              <a href={link.link}>
                <button className="sm:h-[2.2rem] sm:w-[2.2rem] sm:text-lg sm:before:h-[2.2rem] sm:before:w-[2.2rem] sm:before:left-1 md:h-[3.5rem] md:w-[3.5rem] md:text-2xl md:before:h-[3.5rem] md:before:w-[3.5rem] md:before:left-2 lg:h-[4rem] lg:w-[4rem] lg:text-2xl lg:before:h-[4rem] lg:before:w-[4rem] lg:before:left-2 rounded-full text-buttons bg-contrast relative before:absolute before:rounded-full before:bg-secondary before:top-0 before:-z-10">
                  <i className={link.icon} />
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
