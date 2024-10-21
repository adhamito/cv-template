import { FC } from "react";
import { WorkExperienceModel } from "../models/work-experience.model";
import { SectionTitle } from "./atoms/SectionTitle";

type WorkExperienceProps = {
  experiences: WorkExperienceModel[];
};

export const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="rounded-lg m-1 text-left">
      <SectionTitle title="Work Experience" />
      <div className="m-2">
        {experiences.map((item) => (
          <div key={item.durationStart} className="mb-1">
            <h2 className="text-lg font-bold">
              {item.title}--{item.company}
            </h2>
            <p className="">{item.location}</p>
            <p className="text-sm mb-1">
              {item.durationStart} - {item.durationEnd}
            </p>
            <ul className="m-4 list-disc list-inside space-y-1 prose">
              <li>
                Collaborated with a development team to enhance ERP modules,
                focusing on inventory management.
              </li>
              <li>
                Contributed to building backend services using Node.js, creating
                scalable and efficient APIs for integration with third-party
                platforms.
              </li>
              <li>
                Assisted in debugging and optimizing ERP features, improving
                system performance and security by applying industry best
                practices.
              </li>
              <li>
                Participated in daily stand-ups and sprint planning meetings,
                gaining experience with Agile methodologies in a fast-paced
                development environment.
              </li>
              <li>
                Acquired hands-on experience in testing, deployment, and
                documentation processes, supporting the delivery of high-quality
                solutions.
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
