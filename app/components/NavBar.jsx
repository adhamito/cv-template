import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import DownloadPDFButton from "../hook/DownloadPDFButton";
import { CgMail } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="bg-black text-white w-full py-3 px-4 fixed top-0 z-50">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <div></div>

        <div></div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/adhamito/cv-template" target="_blank">
            <FaGithub
              size={25}
              className="hover:text-gray-400 transition-colors"
            />
          </Link>
          <Link href="mailto:aalmechkor2@gmail.com" target="_blank">
            <CgMail
              size={25}
              className="hover:text-red-100 transition-colors"
            />
          </Link>
          <DownloadPDFButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
