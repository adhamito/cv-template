import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import DownloadPDFButton from "../atoms/DownloadPDFButton";

export const NavBar = () => {
  return (
    <div className="bg-black text-white w-full py-3 px-4 fixed top-0 z-50">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <div></div>
        <div></div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/adhamito/cv-template" target="_blank">
            <div className={"p-2 rounded-full"}>
              <FaGithub size={25} className="text-white" />
            </div>
          </Link>

          <Link href="mailto:aalmechkor2@gmail.com" target="_blank">
            <div className={"p-2 rounded-full"}>
              <CgMail size={25} className="text-white" />
            </div>
          </Link>

          <div className={"p-2 rounded-full"}>
            <DownloadPDFButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
