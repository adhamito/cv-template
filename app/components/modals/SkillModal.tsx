import { FC } from "react";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectModel, SkillModel } from "../../models";
type SkillModalProps = {
  skill: SkillModel;
  projects: ProjectModel[];
};

const LEVEL_WIDTH: Record<string, string> = {
  Beginner: "25%",
  Intermediate: "50%",
  Advanced: "75%",
  Expert: "100%",
};

export const SkillModal: FC<SkillModalProps> = ({ skill, projects }) => {
  const { setOpen } = useModal();
  if (!skill) return <></>;
  return (
    <ModalBody className="bg-gray-900">
      <ModalContent className="items-center text-center py-6">
        <div className="flex  justify-center items-center">
          <div className="flex justify-center items-center mb-2">
            {projects.map((project, idx) => (
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
                className="rounded-xl -mr-4 mt-4 p-1  dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
        <div>
          <h4 className="text-lg font-bold mb-2 items-center text-center">
            {skill.name}
          </h4>
          <div className="items-center text-center m-3">
            <p className="mb-1">
              <strong>Level:</strong> {skill.level}
            </p>
            <div className="w-40 h-2 mx-auto bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E6AD00]"
                style={{ width: LEVEL_WIDTH[skill.level] ?? "50%" }}
              />
            </div>
          </div>
          <h3 className="items-center text-center m-3 border-2-b border-gray-300">
            <strong>Description</strong>
          </h3>
          <p className="leading-relaxed">{skill.description}</p>
        </div>
      </ModalContent>
      <ModalFooter className="bg-gray-900 border-t-gold-500">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </ModalFooter>
    </ModalBody>
  );
};
