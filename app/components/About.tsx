import { FC } from "react";
import { SectionTitle } from "./atoms/SectionTitle";

type AboutProps = {
  about: string;
};
const About: FC<AboutProps> = ({ about }) => {
  return (
    <section className="mx-auto p-2 text-center">
      <SectionTitle title="About" />
      <p className="prose leading-relaxed font-mono">{about}</p>
    </section>
  );
};

export default About;
