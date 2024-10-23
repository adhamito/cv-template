import Link from "next/link";
import { FC } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

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
    name: "twitter",
    url: "https://twitter.com/AdhamAlmechkor",
    icon: <FaTwitter size={30} className="text-[#1DA1F2]" />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/adham.almechkor",
    icon: <FaFacebook size={30} className="text-[#1877F2]" />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/rebel-adham/",
    icon: <FaInstagram size={30} className="text-[#F395EB]" />,
  },
];

export const SocialMedia: FC = () => {
  return (
    <div className="flex justify-center gap-4 py-4">
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
