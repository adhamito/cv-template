import React from "react";
import data from "./data.json";

const Skills = () => {
  return (
    <section className="rounded-lg mb-2  text-white ">
      <h2 className="md:text-2xl text-base font-bold border-b-1 border-gray-300">
        Skills
      </h2>
      <ul className=" text-start ">
        {data.skills.map((skill) => (
          <li key={skill}>
            <span className="text-xs md:text-xl">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
