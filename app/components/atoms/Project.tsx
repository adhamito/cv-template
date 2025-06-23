import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import TechnologyIcon from "./TechnologyIcon";
import { ProjectModel } from "../../models";
import { LinkPreview } from "../ui/link-preview";

type ProjectProps = {
  project: ProjectModel;
  visible: boolean;
  index: number;
};

export const Project: FC<ProjectProps> = ({ project, visible, index }) => {
  const handleProjectClick = () => {
    if (project.url) {
      window.open(project.url + "?project=" + project.name, "_blank");
    }
  };

  return (
    <motion.div
      key={index}
      className={`project-card rounded-lg p-4 transform transition-transform group ${project.url ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, translateY: 50 }}
      animate={visible ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      data-index={index}
      onClick={project.url ? handleProjectClick : undefined}
    >
      <div className="flex flex-row justify-between items-center group">
        <LinkPreview url={project.url ? project.url + "?project=" + project.name : 'https://example.com'}>
          <h3 className="text-gray-300 drop-shadow-xl font-bold text-2xl mb-2 group-hover:text-[#E6AD00]">
            {project.name}
          </h3>
        </LinkPreview>
        <Link href={project.path + "?project=" + project.name} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaGithub size={25} className="text-blue-800" />
          </a>
        </Link>
      </div>

      <p className="text-gray-200 mb-3 group">{project.description}</p>

      <ul className="flex flex-wrap items-center space-x-4 text-sm text-gray-200 group">
        {project.technologies.map((tech, index) => (
          <li key={index} className="flex items-center space-x-2">
            <TechnologyIcon technology={tech} />
            <span className="font-semibold">{tech}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Project;
