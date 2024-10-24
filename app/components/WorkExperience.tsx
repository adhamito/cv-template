import { FC } from "react";
import { WorkExperienceModel } from "../models/work-experience.model";
import { SectionTitle } from "./atoms/SectionTitle";
import { ListExp } from "./atoms/ListExp";

type WorkExperienceProps = {
  experiences: WorkExperienceModel[];
};

export const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="-lg m-1 text-left  xl:p-6">
      <SectionTitle title="Work Experience" />
      <div className="m-2">
        {experiences.map((item) => (
          <div key={item.durationStart} className="">
            <h2 className="text-lg font-bold">
              {item.title}--{item.company}
            </h2>
            <p className="">{item.location}</p>
            <p className="text-xl mb-1">
              {item.durationStart} - {item.durationEnd}
            </p>
          </div>
        ))}
        <ListExp />
      </div>
    </section>
  );
};

export default WorkExperience;
