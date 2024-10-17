import React from "react";
import data from "./data.json";

const About = () => {
  return (
    <section className="mx-auto p-2 text-black">
      <h2 className="text-2xl font-bold mb-4 text-left border-b-2 border-b-gray-400">
        About
      </h2>
      <p className="text-gray-700 leading-relaxed">{data.personalInfo.about}</p>
    </section>
  );
};

export default About;
