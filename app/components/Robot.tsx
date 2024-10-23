"use client";
import { FC } from "react";
import { Modal } from "./ui/animated-modal";
import { RobotModalTrigger } from "./modals/RobotModalTrigger";
import { RobotModal } from "./modals/RobotModal";

export const Robot: FC = () => {
  return (
    <div className="group  gap-2 relative ">
      <Modal>
        <RobotModalTrigger />
        <RobotModal />
      </Modal>
    </div>
  );
};
