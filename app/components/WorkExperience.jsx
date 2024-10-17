import React from "react";
import data from "./data.json";

export default function WorkExperience() {
  return (
    <section className="rounded-lg m-1 text-left text-black">
      <h2 className="text-xl font-bold  border-b-2 border-gray-400 mb-1 py-1">
        Work Experience
      </h2>
      {data.workExperience.map((item, index) => (
        <div key={index} className="mb-1">
          <h2 className="text-lg font-bold">
            {item.title}--{item.company}
          </h2>
          <p className="text-gray-800">{item.location}</p>
          <p className="text-gray-800 text-sm mb-1">
            {item.durationStart} - {item.durationEnd}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Collaborated with a development team to enhance ERP modules,
              focusing on inventory management.
            </li>
            <li>
              Contributed to building backend services using Node.js, creating
              scalable and efficient APIs for integration with third-party
              platforms.
            </li>
            <li>
              Assisted in debugging and optimizing ERP features, improving
              system performance and security by applying industry best
              practices.
            </li>
            <li>
              Participated in daily stand-ups and sprint planning meetings,
              gaining experience with Agile methodologies in a fast-paced
              development environment.
            </li>
            <li>
              Acquired hands-on experience in testing, deployment, and
              documentation processes, supporting the delivery of high-quality
              solutions.
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}