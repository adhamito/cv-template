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
      className="flex flex-col justify-center items-center cursor-pointer group"
      key={skill.name}
      onClick={() => {
        setOpen(true);
        setSelectSkill(skill);
      }}
    >
      <TechnologyIcon
        size={25}
        className="text-lg group "
        technology={skill.name}
      />
      <span>
        <strong className="group-hover:text-[#E6AD00] md:text-lg text-sm cursor-pointer ">
          {skill.name}
        </strong>
      </span>
    </div>
  );
};
