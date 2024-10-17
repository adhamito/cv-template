import { FC } from "react";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiLaravel,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

type TechnologyProps = {
  technology: string;
}

export const TechnologyIcon: FC<TechnologyProps> = ({ technology }) => {
  switch (technology) {
    case "CSS":
      return <FaCss3Alt className="text-blue-500" />;
    case "Laravel":
      return <SiLaravel className="text-red-500" />;
    case "Tailwind":
      return <SiTailwindcss className="text-teal-500" />;
    case "React":
      return <SiReact className="text-blue-400" />;
    case "Redux":
      return <SiRedux className="text-purple-600" />;
    case "Next.js":
      return <RiNextjsFill className="text-black" />;
    case "ShadcnUI":
      return <SiShadcnui className="text-blue-500" />;
    case "Typescript":
      return <SiTypescript className="text-blue-500" />;
    case "JavaScript":
      return <IoLogoJavascript className="text-yellow-500" />;
    default:
      return null;
  }
}

export default TechnologyIcon;
