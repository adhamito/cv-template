import { FC } from "react";

type SectionTitleProps = {
  title: string;
};
export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-300 uppercase border-b-2 border-gold-500 mb-3">
      {title}
    </h2>
  );
};
