import { FC } from "react";
import { WorkExperienceModel } from "../models/work-experience.model";
import { SectionTitle } from "./atoms/SectionTitle";

type WorkExperienceProps = {
  experiences: WorkExperienceModel[];
};

export const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="-lg m-1 text-left  ">
      <SectionTitle title="Work Experience" />
      <div className="m-2 space-y-4">
        {experiences.map((item) => (
          <div key={item.company + item.durationStart}>
            <h2 className="text-lg font-bold">
              {item.title} — {item.company}
            </h2>
            <p className="">{item.location}</p>
            <p className="text-sm mb-2 text-[#E6AD00]">
              {item.durationStart} - {item.durationEnd}
            </p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              {item.description.map((bullet, idx) => (
                <li key={idx} className="text-white">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
