import React, { useRef } from "react";
import { useInView } from "framer-motion";

export const EduSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const education = [
    {
      year: "2024",
      school: "LIGHTHOUSE LABS - ",
      program: "WEB DEVELOPMENT PROGRAM",
      overview:
        "A 30-week intensive bootcamp focused on full stack web development. The curriculum focused on three main areas: Application Development, Computer Science, and Software Engineering, providing hands-on experience through projects and collaboration",
      key_skills: {
        "Application Development":
          "Clean code, UX/UI, JavaScript, Node.js, React, Ruby on Rails, PostgreSQL, collaboration through pair programming",
        "Computer Science":
          "Algorithm design, data structures, recursion, object-oriented programming",
        "Software Engineering":
          "Test-driven development, software evaluation, source control, modularity, testability",
        "Tech Stack Mastery":
          "JavaScript, Node.js, Ruby on Rails, React, HTML5, CSS3, SCSS, automated testing, relational database management",
      },
      soft_skills:
        "Collaboration, communication, problem-solving, adaptability, research, reflection, and presentation skills through team projects, coding challenges, and mock technical interviews",
    },
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
        id="education"
        ref={ref}
        className="section h-auto sm:pl-10 md:pl-20 lg:pl-20 items-left justify-center"
      >
        <h2 className="pb-10">
          EDUCATION
        </h2>
        {education.map((edu, index) => (
        <div className="flex flex-col" key={index}>
          <h1 className="pb-10 text-accent relative">
            <span className="absolute top-0 left-0 text-secondary sm:translate-x-1 md:translate-x-2 lg:translate-x-2">
              {edu.year}
            </span>
            <span className="relative text-accent">{edu.year}</span>
          </h1>
          <p className="block relative sm:text-base md:text-2xl lg:text-4xl md:pb-2 lg:pb-2 font-header text-header_text">
            {edu.school}
          </p>
          <p className="block relative sm:text-base md:text-2xl lg:text-4xl pb-5 font-header text-header_text">
            {edu.program}
          </p>
          <p className="text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-60 lg:mr-80">
            {edu.overview}
          </p>
          <p className="font-bold pt-2 text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-60 lg:mr-80">
            Key Skills:
          </p>
          <ul className="text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-60 lg:mr-80">
            {Object.keys(edu.key_skills).map((key, index) => (
              <li key={index}>
                <span>{key} - </span>
                {edu.key_skills[key]}
              </li>
            ))}
          </ul>
          <p className="font-bold pt-2 text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-60 lg:mr-80">
            Soft Skills:
            </p>
            <p className="text-text font-body sm:text-sm md:text-base lg:text-lg sm:mr-20 md:mr-60 lg:mr-80">{edu.soft_skills}</p>
        </div>
        ))}
      </section>
    </div>
  );
};

export default EduSection;
