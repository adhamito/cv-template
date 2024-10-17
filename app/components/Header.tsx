import { FC } from "react";
import { PersonalInfoModel } from "../models";

type HeaderProps = {
  info: PersonalInfoModel;
}

export const Header: FC<HeaderProps> = ({ info }) => {
  return (
    <header className="text-center my-6 py-4 text-black">
      <h1 className="text-4xl font-bold">{info.name}</h1>
      <p className="text-lg font-medium">{info.title}</p>
    </header>
  );
}

export default Header;
