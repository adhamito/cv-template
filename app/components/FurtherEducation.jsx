import React from "react";
import data from "./data.json";

export default function FurtherEducation() {
  return (
    <section className=" rounded-lg mb-4 text-white ">
      <h2 className="md:text-2xl text-lg font-bold mb-2 ">Further Education</h2>

      {data.furtherEducation.courses.map((course, index) => (
        <p key={index} className="md:text-lg text-sm">
          {course} - <span className="font-semibold">Udemy</span>
        </p>
      ))}

      <h3 className="md:text-lg text-sm font-bold mt-2 mb-2">
        Currently Learning
      </h3>
      <ul className="list-disc list-inside">
        {data.furtherEducation.currentlyLearning.map((topic, index) => (
          <li key={index} className="md:text-lg text-sm">
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
