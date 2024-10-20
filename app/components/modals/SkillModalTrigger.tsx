import { Dispatch, FC, SetStateAction } from "react";
import { ModalTrigger, useModal } from "../ui/animated-modal";
import { TechnologyIcon } from "../atoms";
import { SkillModel } from "../../models";
type SkillModalTriggerProps = {
  skill: SkillModel;
  setSelectSkill: Dispatch<SetStateAction<SkillModel>>;
};

export const SkillModalTrigger: FC<SkillModalTriggerProps> = ({
  skill,
  setSelectSkill,
}) => {
  const { setOpen } = useModal();
  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer"
      key={skill.name}
      onClick={() => {
        setOpen(true);
        setSelectSkill(skill);
      }}
    >
      <TechnologyIcon size={25} className="text-lg" technology={skill.name} />
      <span>
        <strong className="text-black">{skill.name}</strong>
      </span>
    </div>
  );
};
