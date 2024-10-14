import React from 'react';
import data from './data.json'; 

const Education = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="space-y-2">
        {data.education.map((edu, index) => (
          <li key={index} className=" p-4 rounded-lg ">
            <p className="font-semibold">{edu.degree} in {edu.major ? edu.major : edu.degree}</p>
            <p>{edu.institution}, {edu.duration}</p>
            <p className="text-sm text-gray-600">{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
