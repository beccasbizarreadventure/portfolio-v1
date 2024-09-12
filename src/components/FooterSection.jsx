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
        <h2 className="text-6xl font-header text-header_text pb-[5rem]">
          STAY IN TOUCH
        </h2>
        <div className="flex space-x-10 pb-10">
          {links.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
              key={index}
            >
              <a href={link.link}>
                <button className="h-[4rem] w-[4rem] rounded-full text-2xl text-buttons bg-contrast relative before:absolute before:h-[4rem] before:w-[4rem] before:rounded-full before:bg-secondary before:top-0 before:left-2 before:-z-10">
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
