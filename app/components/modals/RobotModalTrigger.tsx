import { useModal } from "../ui/animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../../public/assets/robot.png";
import { FC } from "react";

export const RobotModalTrigger: FC = () => {
  const { setOpen } = useModal();

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div className="cursor-pointer">
      <motion.div
        animate={{ x: [-200, -200, -200, -200], y: [0, 60, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        className="group"
      >
        <Image
          src={image}
          alt="robot"
          width={80}
          height={50}
          className="cursor-pointer"
          onClick={handleOpenModal}
        />
      </motion.div>
    </div>
  );
};
