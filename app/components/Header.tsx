import { FC } from "react";
import { PersonalInfoModel } from "../models";
import { BackgroundLines } from "./ui/background-lines";

type HeaderProps = {
  info: PersonalInfoModel;
}

export const Header: FC<HeaderProps> = ({ info }) => {
  return (
    <header className="text-center my-6 py-4 text-black">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white font-sans relative z-20 tracking-tight">{info.name}</h1>
      <p className="text-lg font-medium">{info.title}</p>
    </header>
  );
}

export default Header;
