import { FC } from "react";

type AboutProps = {
  about: string;
};
const About: FC<AboutProps> = ({ about }) => {
  return (
    <section className="mx-auto p-2 text-black">
      <h2 className="text-2xl font-mono mb-4 text-left border-b-2 border-b-gray-400 ">
        About
      </h2>
      <p className="text-gray-700 leading-relaxed font-mono">{about}</p>
    </section>
  );
};

export default About;
