import React from "react";
import data from "./data.json"; // Adjust the path as necessary

export default function Skills() {
  return (
    <section className=" rounded-lg mb-4">
      <h1 className="text-2xl font-bold mb-4">Github Stats</h1>

      <div className="mb-4 p-3 ">
        {data.githubStats.skills.map((skill, index) => (
          <span
            key={index}
            className={`text-white px-3 py-1 rounded-full ${getSkillColor(
              skill
            )}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 gap-3 text-start font-bold text-black">
        {data.skills.map((skill, index) => (
          <li key={index}>
            <span className="px-3 py-1 rounded-lg ">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Function to assign colors to the skill badges
const getSkillColor = (skill) => {
  switch (skill) {
    case "HTML":
      return "bg-pink-500";
    case "CSS":
      return "bg-blue-600";
    case "JavaScript":
      return "bg-yellow-500";
    case "React":
      return "bg-blue-400";
    case "Node.js":
      return "bg-green-500";
    case "Python":
      return "bg-yellow-300";
    case "Laravel":
      return "bg-red-600";
    default:
      return "bg-gray-500";
  }
};
