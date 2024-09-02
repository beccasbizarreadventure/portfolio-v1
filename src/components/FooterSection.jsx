import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {

  const links = [
    {
      link: "https://github.com/beccasbizarreadventure",
      icon: "fa-brands fa-github",
    },
    {
      link: "https://www.linkedin.com/in/rebecca-s-48bb01323/",
      icon: "fa-brands fa-linkedin",
    },
  ];

  return (
    <section
      id="contact"
      className="section flex flex-col items-center justify-center"
    >
      <h1 className="text-6xl font-header text-header_text pb-[5rem]">
        STAY IN TOUCH
      </h1>
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
  );
};

export default FooterSection;
