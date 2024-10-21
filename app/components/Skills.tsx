"use client";
import { FC, useMemo, useState } from "react";
import { Modal } from "./ui/animated-modal";
import { ProjectModel, SkillModel } from "../models";
import { SkillModalTrigger } from "./modals/SkillModalTrigger";
import { SkillModal } from "./modals/SkillModal";
import { cn } from "../lib/utils";
import { SectionTitle } from "./atoms/SectionTitle";

type SkillsProps = {
  skills: SkillModel[];
  projects: ProjectModel[];
  className?: string;
};

export const Skills: FC<SkillsProps> = ({ skills, projects, className }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillModel | null>(null);

  const selectedProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!selectedSkill) return [];
      return project.technologies.includes(selectedSkill.name);
    });
  }, [projects, selectedSkill]);

  return (
    <section className={cn("", className)}>
      <SectionTitle title="Skills" />

      <Modal>
        <div className="m-4 grid grid-cols-3  gap-4 ">
          {skills.map((skill) => (
            <SkillModalTrigger
              key={skill.name}
              skill={skill}
              setSelectSkill={setSelectedSkill}
            />
          ))}
        </div>

        <SkillModal skill={selectedSkill} projects={selectedProjects} />
      </Modal>
    </section>
  );
};

export default Skills;
