import React from "react";
import { FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiLaravel,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import data from "./data.json";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-left text-gray-800 border-b-2 border-gray-300 pb-2">
        Projects
      </h2>
      <div className="flex flex-col space-y-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 bg-white transition-transform transform hover:scale-105"
          >
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-bold text-2xl mb-2 text-gray-900">
                {project.name}
              </h3>
              <Link href={project.path + "?project=" + project.name}>
                <FaGithub size={25} className="text-blue-800" />
              </Link>
            </div>
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            <ul className="flex flex-wrap items-center space-x-4 text-sm text-gray-800">
              {project.technologies.map((tech, index) => {
                let icon;

                switch (tech) {
                  case "CSS":
                    icon = <FaCss3Alt className="text-blue-500" />;
                    break;
                  case "Laravel":
                    icon = <SiLaravel className="text-red-500" />;
                    break;
                  case "Tailwind":
                    icon = <SiTailwindcss className="text-teal-500" />;
                    break;
                  case "React":
                    icon = <SiReact className="text-blue-400" />;
                    break;
                  case "Redux":
                    icon = <SiRedux className="text-purple-600" />;
                    break;
                  case "Next.js":
                    icon = <RiNextjsFill className="text-black" />;
                    break;
                  case "ShadcnUI":
                    icon = <SiShadcnui className="text-blue-500" />;
                    break;
                  case "Typescript":
                    icon = <SiTypescript className="text-blue-500" />;
                    break;
                  case "JavaScript":
                    icon = <IoLogoJavascript className="text-yellow-500" />;
                    break;
                  default:
                    return null;
                }

                return (
                  <li key={index} className="flex items-center space-x-2">
                    {icon}
                    <span className="font-semibold">{tech}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
