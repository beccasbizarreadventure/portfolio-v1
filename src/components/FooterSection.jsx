import React from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <section
      id="contact"
      className="section flex flex-col items-center justify-center"
    >
      <h1 className="text-6xl font-header text-header_text pb-[5rem]">
        STAY IN TOUCH
      </h1>
      <div className="flex space-x-10 pb-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <a href="https://github.com/beccasbizarreadventure">
            <button className="h-[4rem] w-[4rem] rounded-full text-2xl text-buttons bg-contrast relative before:absolute before:h-[4rem] before:w-[4rem] before:rounded-full before:bg-secondary before:top-0 before:left-2 before:-z-10">
              <i className="fa-brands fa-github" />
            </button>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <a href="https://www.linkedin.com/in/rebecca-s-48bb01323/">
            <button className="h-[4rem] w-[4rem] rounded-full text-2xl text-buttons bg-contrast relative before:absolute before:h-[4rem] before:w-[4rem] before:rounded-full before:bg-secondary before:top-0 before:left-2 before:-z-10">
              <i className="fa-brands fa-linkedin" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterSection;
