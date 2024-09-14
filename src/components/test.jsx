<div key={index} className="flex flex-col justify-between pb-20">
<h2 className="text-header_text font-header text-4xl pb-2 pl-60">
    {project.title}
  </h2>
<div className="flex-grow-0 flex-shrink-0 before:flex-grow-0 before:flex-shrink-0 bg-accent h-[25rem] w-[30rem] rounded-2xl relative before:absolute before:h-[25rem] before:w-[30rem] before:rounded-2xl before:bg-secondary before:top-2 before:right-3 before:-z-10 flex justify-center items-center">
  <img
    src={project.image}
    alt={project.title}
    className="h-[20rem] w-[25rem] rounded-2xl border-5 border-buttons"
  />
</div>
<div className="flex flex-col mr-60">
  <p className="text-text font-body text-lg pb-2 pl-60">
    {project.description}
  </p>
  <p className="text-text font-body text-lg pb-2 pl-60">
    <span className="font-bold">Tech Stack - </span>
    {project.techStack}
  </p>
  <a href={project.link}>
    <motion.div
      className="relative flex items-center justify-center h-[2.5rem] w-[6.5rem] bg-contrast rounded-full overflow-hidden text-lg font-body z-1 ml-60"
      whileTap={{ scale: 0.9 }}
    >
      <span
        className="absolute bg-contrast px-4 text-buttons z-1"
      >
        View
      </span>
      <i
        className="fa-solid fa-circle-chevron-right absolute right-4 text-buttons z-0"
      />
    </motion.div>
  </a>
</div>
</div>