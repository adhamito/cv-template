import React from "react";
import data from "./data.json";

export default function Skills() {
  return (
    <section className=" rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <ul className="grid grid-cols-1 text-start  text-black">
        {data.skills.map((skill) => (
          <li key={skill}>
            <span className="px-3">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
