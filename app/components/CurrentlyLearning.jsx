import React from 'react';
import data from './data.json'; 

export function CurrentlyLearning() {
  return (
    <section className="p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
      <ul className="list-disc pl-5 space-y-2">
        {data.furtherEducation.currentlyLearning.map((topic, index) => (
          <li key={index}>
            <span className="font-semibold">{topic}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
