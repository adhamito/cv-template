import React from "react";
import data from "./data.json";

export default function FurtherEducation() {
  return (
    <section className=" rounded-lg mb-4 text-black ">
      <h2 className="text-2xl font-bold mb-4 ">Further Education</h2>

      {data.furtherEducation.courses.map((course, index) => (
        <p key={index} className="text-lg">
          {course} - <span className="font-semibold">Udemy</span>
        </p>
      ))}

      <h3 className="text-lg font-bold mt-4">Currently Learning</h3>
      <ul className="list-disc list-inside">
        {data.furtherEducation.currentlyLearning.map((topic, index) => (
          <li key={index} className="text-lg">
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
