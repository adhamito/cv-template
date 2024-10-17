import React from "react";
import data from "./data.json";

const About = () => {
  return (
    <section className="mx-auto p-2 text-white">
      <h2 className="md:text-2xl text-xl font-bold text-left border-b-2 border-b-gray-300">
        About
      </h2>
      <p className="text-gray-400 leading-relaxed text-xs md:text-lg">
        {data.personalInfo.about}
      </p>
    </section>
  );
};

export default About;
