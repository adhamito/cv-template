import { FC } from "react";
import { FurtherEducationModel } from "../models";
import { SectionTitle } from "./atoms/SectionTitle";

type FurtherEducationProps = {
  furtherEducation: FurtherEducationModel;
};

export const FurtherEducation: FC<FurtherEducationProps> = ({
  furtherEducation,
}) => {
  return (
    <section className="p-2 text-white">
      <SectionTitle title="Further Education" />

      {furtherEducation.courses.map((course) => (
        <p key={course} className="mb-2">
          {course}
        </p>
      ))}

      {furtherEducation.currentlyLearning.length > 0 && (
        <>
          <h3 className="font-semibold text-[#E6AD00] mt-2 mb-1">
            Currently Learning
          </h3>
          <ul className="list-disc list-outside ml-5 space-y-1">
            {furtherEducation.currentlyLearning.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default FurtherEducation;
