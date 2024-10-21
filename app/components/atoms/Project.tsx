import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import TechnologyIcon from "./TechnologyIcon";
import { ProjectModel } from "../../models";

type ProjectProps = {
  project: ProjectModel;
  visible: boolean;
  index: number;
};

export const Project: FC<ProjectProps> = ({ project, visible, index }) => {
  return (
    <motion.div
      key={index}
      className="project-card rounded-lg p-6  transform transition-transform"
      initial={{ opacity: 0, translateY: 50 }}
      animate={visible ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-index={index}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-gray-300 drop-shadow-xl font-bold text-2xl mb-2">
          {project.name}
        </h3>
        <Link href={project.path + "?project=" + project.name}>
          <FaGithub size={25} className="text-blue-500" />
        </Link>
      </div>
      <p className="text-sm mb-4">{project.description}</p>
      <ul className="flex flex-wrap items-center space-x-4 text-sm text-gold-500">
        {project.technologies.map((tech, index) => {
          return (
            <li key={index} className="flex items-center space-x-2">
              <TechnologyIcon technology={tech} />
              <span className="font-semibold">{tech}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Project;
