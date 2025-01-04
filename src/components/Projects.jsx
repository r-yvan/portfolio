import React from "react";
import temp from "../assets/temp.jpg";
import upt from "../assets/upt.png";

const Projects = () => {
  const projects = [
    {
      title: "React To Do App",
      description: "Simple Project to exercise react js development..",
      img: {},
    },
    {
      title: "Youtube Clone",
      description:
        "Simply a Youtube Clone with functionalities like those of Youtube..",
      img: {},
    },
    {
      title: "Novium Tech Informer",
      description:
        "Website that provide real time information about the outside tech gadgets..",
      img: {},
    },
    {
      title: "React Image Gallery App",
      description: "Simple Image Gallery I did for Codealpha Internship..",
      img: {},
    },
    {
      title: "Next JS E-Commerce",
      description:
        "Simply a Youtube Clone with functionalities like those of Youtube..",
      img: {},
    },
    {
      title: "Very High UI React E-Commerce..",
      description:
        "Website that provide real time information about the outside tech gadgets..",
      img: {},
    },
  ];

  return (
    <div className="pb-10 overflow-hidden relative pt-10 bg-[#0a0a0a] text-white z-30">
      <div className="flex spotlight-2 justify-center z-20">
        <h2 className="text-6xl font-bold mb-20 z-20">
          My <span className="text-green-400">Projects</span>
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center for-scrollbar gap-5 px-20 z-20">
        {projects.map((project, index) => (
          <div
            className="flex flex-col overflow-y-auto w-card flex-shrink-0 for-scrollbar bg-white bg-opacity-10 backdrop-blur-3xl border border-white border-opacity-10 duration-200 ease-out hover:scale-95 hover:shadow-custom hover:border-green-400 hover:border-opacity-100 rounded-xl pb-2 z-20"
            key={index}
          >
            <div className="w-full rounded-t-xl overflow-hidden mb-3">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col h-28 pr-2 pl-2 before:contents-[''] before:absolute before:w-1 before:h-28 before:bg-green-400 before:rounded-full">
              <h3 className="pl-3 text-xl font-semibold mb-4">{project.title}</h3>
              <p className="pl-3 text-gray-400">{project.description}</p>
            </div>
            <div className="absolute right-1 bottom-2 h-28 w-28">
              <img src={upt} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
