import React from "react";
import chakra from "../assets/chakra.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import tailwindcss from "../assets/tailwindcss.png";
import bulma from "../assets/bulma.png";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import illustrator from "../assets/illustrator.png";
import laravel from "../assets/laravel.png";
import django from "../assets/django.png";
import vue from "../assets/vue.png";
import photoshop from "../assets/photoshop.png";
import canva from "../assets/canva.png";
import react from "../assets/achievement.png";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      list: [
        { language: "React JS", img: react },
        { language: "Vue JS", img: vue },
        { language: "Angular JS", img: angular },
        { language: "Tailwindcss", img: tailwindcss },
        { language: "Bootstrap", img: bootstrap },
        { language: "Bulma", img: bulma },
        { language: "Chakra UI", img: chakra },
      ],
    },
    {
      category: "Backend",
      list: [
        { language: "Node JS", img: node },
        { language: "Django", img: django },
        { language: "Laravel", img: laravel },
      ],
    },
    {
      category: "Others",
      list: [
        { language: "Figma", img: figma },
        { language: "Photoshop", img: photoshop },
        { language: "Illustrator", img: illustrator },
        { language: "Canva", img: canva },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center backdrop-blur-3xl bg-[#0a0a0a] py-10 text-white z-20">
      <div className="flex justify-center mb-10 z-10">
        <h2 className="text-5xl font-bold text-green-400">Skills</h2>
      </div>
      <div className="flex flex-row justify-center gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col w-card h-96 overflow-y-auto for-scrollbar bg-white bg-opacity-10 backdrop-blur-2xl p-2  rounded-xl"
          >
            <div className="flex justify-center font-bold text-3xl mt-2 mb-5">
              <h1 className="before:contents-[''] before:absolute before:w-20 before:h-1 before:bg-green-400 before:top-12 before:rounded-full">{skill.category}</h1>
            </div>
            <div className="flex flex-col">
              {skill.list.map((listSkill, listIndex) => (
                <div
                  key={listIndex}
                  className="py-3 px-2 rounded-xl hover:backdrop-blur-3xl duration-200 easeout hover:bg-white hover:bg-opacity-10 border border-opacity-0 hover:border-opacity-100 border-green-400 m-1"
                >
                  <div className="flex flex-row pl-1 items-center">
                    <div className="flex flex-row items-center">
                      {listSkill.img ? (
                        <img
                          src={listSkill.img}
                          alt={listSkill.language}
                          className="w-8"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600">No Image</span>
                        </div>
                      )}
                      <div className="pl-3">{listSkill.language}</div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
