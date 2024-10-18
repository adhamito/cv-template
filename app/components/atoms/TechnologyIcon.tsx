import { FC } from "react";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiLaravel,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiGit,
  SiPython,
  SiNestjs,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { cn } from "../../lib/utils";

type TechnologyProps = {
  technology: string;
  className?: string;
  size?: number;
};

export const TechnologyIcon: FC<TechnologyProps> = ({
  technology,
  className,
  size,
}) => {
  switch (technology.split(" ").join("").toLowerCase()) {
    case "css":
      return (
        <FaCss3Alt size={size} className={cn("text-blue-500", className)} />
      );
    case "html":
      return <SiHtml5 size={size} className={cn("text-red-500", className)} />;
    case "git":
      return <SiGit size={size} className={cn("text-red-500", className)} />;
    case "python":
      return (
        <SiPython size={size} className={cn("text-blue-800", className)} />
      );
    case "laravel":
      return (
        <SiLaravel size={size} className={cn("text-red-500", className)} />
      );
    case "tailwind":
      return (
        <SiTailwindcss size={size} className={cn("text-teal-500", className)} />
      );
    case "tailwindcss":
      return (
        <SiTailwindcss size={size} className={cn("text-teal-500", className)} />
      );
    case "react":
      return <SiReact size={size} className={cn("text-blue-400", className)} />;
    case "redux":
      return (
        <SiRedux size={size} className={cn("text-purple-600", className)} />
      );
    case "next.js":
      return (
        <RiNextjsFill size={size} className={cn("text-black", className)} />
      );
    case "shadcnuI":
      return (
        <SiShadcnui size={size} className={cn("text-blue-500", className)} />
      );
    case "typescript":
      return (
        <SiTypescript size={size} className={cn("text-blue-500", className)} />
      );
    case "javascript":
      return (
        <IoLogoJavascript
          size={size}
          className={cn("text-yellow-500", className)}
        />
      );
    case "node.js":
      return (
        <SiNodedotjs size={size} className={cn("text-green-700", className)} />
      );
    case "Nest.js":
      return <SiNestjs size={size} className={cn("text-black", className)} />;
    default:
      return null;
  }
};

export default TechnologyIcon;
