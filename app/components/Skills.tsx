"use client";

import { FC, useState } from "react";
import { TechnologyIcon } from "./atoms";
import {
  ModalTrigger,
  Modal,
  ModalBody,
  ModalContent,
} from "./ui/animated-modal";
import projects from "../data.json";
import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string;
  experience: string;
  description: string;
};

type SkillsProps = {
  skills: Skill[];
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SelectName, setSelectName] = useState("");

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  const FindProject = () => {
    return projects.projects.filter((project) =>
      project.technologies.includes(SelectName)
    );
  };

  return (
    <section className="rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2 text-black text-center">SKILLS</h2>

      <Modal>
        <ModalTrigger className=" dark:text-black text-white  ">
          <div className=" grid grid-cols-3  gap-4 ">
            {skills.map((skill) => (
              <div className="flex flex-col justify-center items-center">
                <button
                  className="text-blue-500"
                  onClick={() => {
                    openModal(skill);
                    setSelectName(skill.name);
                  }}
                  key={skill.name}
                >
                  <TechnologyIcon
                    size={25}
                    className="text-lg"
                    technology={skill.name}
                  />
                </button>
                <span>
                  <strong>{skill.name}</strong>
                </span>
              </div>
            ))}
          </div>
        </ModalTrigger>

        {selectedSkill && (
          <ModalBody>
            <ModalContent className="items-center text-center py-6">
              <div className="flex  justify-center items-center">
                <div className="flex   justify-center items-center">
                  {FindProject().map((project, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={project.img}
                        alt="project images"
                        width={500}
                        height={500}
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2 items-center text-center">
                {selectedSkill.name}
              </h4>
              <p className="items-center text-center m-3">
                <strong>Experience:</strong> {selectedSkill.experience}
              </p>
              <h3 className="items-center text-center m-3 border-2-b border-gray-300">
                <strong>Description</strong>
              </h3>
              <p className="leading-relaxed">{selectedSkill.description}</p>
            </ModalContent>
          </ModalBody>
        )}
      </Modal>
    </section>
  );
};

export default Skills;
