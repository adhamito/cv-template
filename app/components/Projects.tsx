"use client";
import { FC } from "react";
import Project from "./atoms/Project";
import { useFadeIn } from "../hook";
import { ProjectModel } from "../models";
import { SectionTitle } from "./atoms/SectionTitle";

type ProjectsProps = {
  projects: ProjectModel[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const visibleElements = useFadeIn({
    selector: ".project-card",
    threshold: 0.1,
  });

  return (
    <section className="p-6">
      <SectionTitle title="Projects" />
      <div className="flex flex-col space-y-8">
        {projects.map((project, index) => (
          <Project
            key={project.name}
            project={project}
            index={index}
            visible={visibleElements.includes(index.toString())}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
