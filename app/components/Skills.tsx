import { FC } from "react";
import { TechnologyIcon } from "./atoms";

type SkillsProps = {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section className=" rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2 text-black text-center">SKILLS</h2>
      <ul className="grid grid-cols-1 text-start  text-black">
        {skills.map((skill) => (
          <li key={skill}>
            <span className="flex flex-row justify-between">{skill}<TechnologyIcon size={24} className="text-lg" technology={skill} /></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
