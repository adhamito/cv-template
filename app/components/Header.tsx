"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PersonalInfoModel } from "../models";
import { SocialMedia } from "./atoms/SocialMedia";

type HeaderProps = {
  info: PersonalInfoModel;
};

export const Header: FC<HeaderProps> = ({ info }) => {
  const titleKeys = Object.values(info.title) as string[]; // Get title parts dynamically with type assertion
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const typeTitle = () => {
      const currentTitle = titleKeys[currentTitleIndex] as string;

      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === currentTitle.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleKeys.length);
      }

      typingTimeout = setTimeout(typeTitle, isDeleting ? 100 : 150);
    };

    typingTimeout = setTimeout(typeTitle, 150);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, titleKeys, currentTitleIndex]);

  return (
    <header className="text-center xl:my-4 xl:py-4 text-white  ">
      <div className="md:h-16 h-16 mb-2" key={info.name}>
        <h1 className="md:text-4xl text-2xl xl:mb-2  font-bold">{info.name}</h1>

        <motion.div
          className="md:text-2xl text-xl font-light xl:mb-4 text-[#E6AD00]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
        </motion.div>
      </div>

      <SocialMedia />
    </header>
  );
};

export default Header;
