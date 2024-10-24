"use client";
import { FC } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { HobbiesModel } from "../models/index";
import { HobbiesIcon } from "./atoms/HobbiesIcon";
import { SectionTitle } from "./atoms/SectionTitle";

type HobbiesProps = {
  hobbies: HobbiesModel[];
  className?: string;
};

export const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="text-white">
      <SectionTitle title="Hobbies" />

      <div className="grid grid-cols-3 justify-center items-center gap-2 xl:space-y-6  ">
        {hobbies.map((hobbie) => (
          <motion.div
            key={hobbie.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <HobbiesIcon hobbie={hobbie.name} size={40} />
            <span className="uppercase font-light text-[#E6AD00]">
              {hobbie.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
