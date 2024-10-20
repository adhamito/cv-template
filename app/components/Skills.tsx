"use client";
import { FC, useMemo, useState } from "react";
import { TechnologyIcon } from "./atoms";
import {
  ModalTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectModel, SkillModel } from "../models";
import { SkillModalTrigger } from "./modals/SkillModalTrigger";
import { SkillModal } from "./modals/SkillModal";

type SkillsProps = {
  skills: SkillModel[];
  projects: ProjectModel[];
};

export const Skills: FC<SkillsProps> = ({ skills, projects }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillModel | null>(null);

  const selectedProjects = useMemo(() => {
    return projects.filter((project) => {
      if (!selectedSkill) return [];
      return project.technologies.includes(selectedSkill.name);
    });
  }, [projects, selectedSkill]);

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold mb-2 text-black text-center">SKILLS</h2>

      <Modal>
        <div className=" grid grid-cols-3  gap-4 ">
          {skills.map((skill) => (
            <SkillModalTrigger
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
