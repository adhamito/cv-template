"use client";
import { FC } from "react";
import { EducationModel } from "../models";
import { useFadeIn } from "../hook";
import Education from "./atoms/Education";

type EducationsProps = {
  educations: EducationModel[];
};

const Educations: FC<EducationsProps> = ({ educations }) => {
  const visibleElements = useFadeIn({
    selector: ".education-item",
    threshold: 0.1,
  });

  return (
    <section className="p-2 text-black">
      <h2 className="text-2xl font-bold mb-1">Education</h2>
      <ul className="space-y-4">
        {educations.map((education, index) => (
          <Education
            key={education.institution}
            education={education}
            index={index}
            visible={visibleElements.includes(index.toString())}
          />
        ))}
      </ul>
    </section>
  );
};

export default Educations;
