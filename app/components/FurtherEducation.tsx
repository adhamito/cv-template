import { FC } from "react";
import { FurtherEducationModel } from "../models";

type FurtherEducationProps = {
  furtherEducation: FurtherEducationModel;
}

export const FurtherEducation: FC<FurtherEducationProps> = ({ furtherEducation }) => {
  return (
    <section className=" rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-4 ">Further Education</h2>

      {furtherEducation.courses.map((course) => (
        <p key={course} className="text-lg">
          {course} - <span className="font-semibold">Udemy</span>
        </p>
      ))}

      <h3 className="text-lg font-bold mt-4">Currently Learning</h3>
      <ul className="list-disc list-inside">
        {furtherEducation.currentlyLearning.map((topic, index) => (
          <li key={index} className="text-lg">
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FurtherEducation;
