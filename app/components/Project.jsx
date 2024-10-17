"use client";
import React, { useRef, useState, useEffect } from "react";
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
import { motion } from "framer-motion";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prevVisible) => [
              ...prevVisible,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      projectElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="p-1">
      <h2
        className="md:text-2xl text-lg font-bold md:mb-4 mb-1 text-left text-white border-b-1
       border-gray-400 pb-2"
      >
        Projects
      </h2>
      <div className="flex flex-col md:space-y-8 space-y-1">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card rounded-lg md:p-6 p-1  transform transition-transform"
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              visibleProjects.includes(index.toString())
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            data-index={index}
          >
            <div className="flex flex-row justify-between items-center text-white">
              <h3 className="font-bold md:text-2xl text-lg md:mb-2  ">
                {project.name}
              </h3>
              <Link href={project.path + "?project=" + project.name}>
                <FaGithub size={25} className="text-blue-800" />
              </Link>
            </div>
            <p className="md:text-sm text-xs text-gray-300 md:mb-4 ">
              {project.description}
            </p>
            <ul
              className="flex flex-wrap items-center md:space-x-4 space-x-1  md:text-sm text-xs
             text-gray-300"
            >
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
                  <li
                    key={index}
                    className="flex items-center md:space-x-4 space-x-1"
                  >
                    {icon}
                    <span className="font-semibold">{tech}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
