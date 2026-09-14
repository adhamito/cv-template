import { FC } from "react";
import { FaCss3Alt, FaWordpress } from "react-icons/fa";
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
  SiVite,
  SiRadixui,
  SiPhp,
  SiElementor,
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
        <RiNextjsFill size={size} className={cn("text-white", className)} />
      );
    case "shadcnui":
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
    case "nest.js":
      return <SiNestjs size={size} className={cn("text-red-600", className)} />;
    case "vite":
      return <SiVite size={size} className={cn("text-purple-500", className)} />;
    case "radixui":
      return (
        <SiRadixui size={size} className={cn("text-gray-200", className)} />
      );
    case "wordpress":
      return (
        <FaWordpress size={size} className={cn("text-blue-500", className)} />
      );
    case "php":
      return <SiPhp size={size} className={cn("text-indigo-400", className)} />;
    case "elementor":
      return (
        <SiElementor size={size} className={cn("text-pink-500", className)} />
      );
    default:
      return null;
  }
};

export default TechnologyIcon;
