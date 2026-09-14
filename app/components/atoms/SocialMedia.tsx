import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const SocialMediaIcons = [
  {
    name: "github",
    url: "https://github.com/adhamito",
    icon: <FaGithub size={30} className="text-gray-200" />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/adham-almechkor-ab238b1b7/",
    icon: <FaLinkedin size={30} className="text-[#0077B5]" />,
  },
  {
    name: "email",
    url: "mailto:aalmechkor2@gmail.com",
    icon: <CgMail size={30} className="text-[#E6AD00]" />,
  },
];

export const SocialMedia: FC = () => {
  return (
    <div className="flex justify-center gap-4 py-4 cursor-pointer">
      {SocialMediaIcons.map((icon) => (
        <Link href={icon.url} key={icon.name} target="_blank" rel="noreferrer">
          <div className="group relative flex flex-col items-center">
            <div
              className=" bg-transparent rounded-full flex items-center justify-center 
            shadow-lg hover:bg-transparent hover:scale-150 transition-colors  duration-300"
            >
              {icon.icon}
            </div>
            <span
              className="absolute -bottom-10 px-3 py-1 bg-transparent text-[#E6AD00] 
            text-sm font-semibold rounded opacity-0 group-hover:opacity-100
             group-hover:translate-y-[-10px] transition-easeOut duration-300"
            >
              {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
