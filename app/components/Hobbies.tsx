"use client";
import { FC } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { HobbiesModel } from "../models/index";
import { HobbiesIcon } from "./atoms/HobbiesIcon";

type HobbiesProps = {
  hobbies: HobbiesModel[];
  className?: string;
};

export const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="text-white">
      <h1 className="text-2xl m-2 border-b-2 border-[#E6AD00] ">Hobbies</h1>
      <div className="grid grid-cols-3 justify-center items-center gap-2 ">
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
            <HobbiesIcon hobbie={hobbie.name} size={35} />
            <span className="uppercase font-light text-[#E6AD00]">
              {hobbie.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
