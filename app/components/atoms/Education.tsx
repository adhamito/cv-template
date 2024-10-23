import { FC } from "react";
import { motion } from "framer-motion";
import { EducationModel } from "../../models";

type EducationProps = {
  education: EducationModel;
  index: number;
  visible: boolean;
};

export const Education: FC<EducationProps> = ({
  education,
  index,
  visible,
}) => {
  return (
    <motion.li
      key={index}
      className="education-item"
      initial={{ opacity: 0, translateY: 50 }}
      animate={visible ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-index={index}
    >
      <div className="group">
        <p className="font-semibold group-hover:text-[#E6AD00]">
          {education.degree}
        </p>
        <p className="group">
          {education.major ? `in ${education.major}` : ""}
        </p>
        <p className="group">
          {education.institution}, {education.duration}
        </p>
      </div>
    </motion.li>
  );
};

export default Education;
