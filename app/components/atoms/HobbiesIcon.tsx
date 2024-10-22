import { FC } from "react";
import {
  IoBook,
  IoCamera,
  IoFootball,
  IoGameController,
} from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { SiCodingninjas } from "react-icons/si";
import { cn } from "../../lib/utils";
type HobbiesIconProps = {
  hobbie: string;
  classname?: string;
  size?: number;
};
export const HobbiesIcon: FC<HobbiesIconProps> = ({
  hobbie,
  classname,
  size,
}) => {
  switch (hobbie) {
    case "football":
      return (
        <IoFootball size={size} className={cn("text-gray-300 ", classname)} />
      );
    case "videogames":
      return (
        <IoGameController
          size={size}
          className={cn("text-red-300 ", classname)}
        />
      );
    case "photography":
      return (
        <IoCamera size={size} className={cn("text-blue-300 ", classname)} />
      );
    case "reading":
      return (
        <IoBook size={size} className={cn("text-yellow-100 ", classname)} />
      );
    case "hiking":
      return (
        <GiHiking size={size} className={cn("text-green-100 ", classname)} />
      );
    case "coding":
      return (
        <SiCodingninjas
          size={size}
          className={cn("text-blue-100 ", classname)}
        />
      );
    default:
  }
};
