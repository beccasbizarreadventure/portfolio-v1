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
        className="section h-[50rem] pl-20 items-left justify-center"
      >
        <h1 className="font-header text-6xl text-header_text pb-[5rem]">
          EDUCATION
        </h1>
        {education.map((edu, index) => (
        <div className="flex flex-col" key={index}>
          <p className="pb-10 text-accent font-header text-8xl relative">
            <span className="absolute top-0 left-0 translate-x-2 text-secondary">
              {edu.year}
            </span>
            <span className="relative text-accent">{edu.year}</span>
          </p>
          <p className="block relative text-4xl pb-2 font-header text-header_text">
            {edu.school}
          </p>
          <p className="block relative text-4xl pb-5 font-header text-header_text">
            {edu.program}
          </p>
          <p className="text-text font-body text-lg pb-2 mr-80">
            {edu.overview}
          </p>
          <p className="text-text font-body font-bold text-lg">
            Key Skills:
          </p>
          <ul className="text-text font-body text-lg mr-80">
            {Object.keys(edu.key_skills).map((key, index) => (
              <li key={index}>
                <span>{key} - </span>
                {edu.key_skills[key]}
              </li>
            ))}
          </ul>
          <p className="text-text font-body font-bold text-lg pt-2">
            Soft Skills:
            </p>
            <p className="text-text font-body text-lg mr-80">{edu.soft_skills}</p>
        </div>
        ))}
      </section>
    </div>
  );
};

export default EduSection;
