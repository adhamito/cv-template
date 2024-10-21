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
      <p className="font-semibold">
        {education.degree} in{" "}
        {education.major ? education.major : education.degree}
      </p>
      <p>
        {education.institution}, {education.duration}
      </p>
    </motion.li>
  );
};

export default Education;
