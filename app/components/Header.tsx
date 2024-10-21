import { FC } from "react";
import { PersonalInfoModel } from "../models";

type HeaderProps = {
  info: PersonalInfoModel;
}

export const Header: FC<HeaderProps> = ({ info }) => {
  return (
    <header className="text-center my-6 py-4">
      <h1 className="text-gray-300 bold text-4xl">{info.name}</h1>
      <p className="text-gold-500 text-lg font-medium">{info.title}</p>
    </header>
  );
}

export default Header;
