"use client";

import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import DownloadPDFButton from "../hook/DownloadPDFButton";

const NavBar = () => {
  const [githubBorderColor, setGithubBorderColor] = useState("transparent");
  const [emailBorderColor, setEmailBorderColor] = useState("transparent");
  const [downloadBorderColor, setDownloadBorderColor] = useState("transparent");

  const changeBorderColor = (setColor, highlightColor) => {
    setColor((prev) =>
      prev === "transparent" ? highlightColor : "transparent"
    );
  };

  useEffect(() => {
    const githubInterval = setInterval(() => {
      changeBorderColor(setGithubBorderColor, "blue");
    }, 3000);

    const emailInterval = setInterval(() => {
      changeBorderColor(setEmailBorderColor, "purple");
    }, 3000);

    const downloadInterval = setInterval(() => {
      changeBorderColor(setDownloadBorderColor, "green");
    }, 3000);

    return () => {
      clearInterval(githubInterval);
      clearInterval(emailInterval);
      clearInterval(downloadInterval);
    };
  }, []);

  return (
    <div className="bg-black text-white w-full py-3 px-4 fixed top-0 z-50">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <div></div>
        <div></div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/adhamito/cv-template" target="_blank">
            <div
              className={`p-2 rounded-full border-dashed border-2 ${githubBorderColor}`}
              style={{ borderColor: githubBorderColor }}
              onMouseEnter={() => setGithubBorderColor("rgba(70, 130, 180, 1)")}
              onMouseLeave={() => setGithubBorderColor("transparent")}
            >
              <FaGithub size={25} className="text-white" />
            </div>
          </Link>

          <Link href="mailto:aalmechkor2@gmail.com" target="_blank">
            <div
              className={`p-2 rounded-full border-dashed border-2 ${emailBorderColor}`}
              style={{ borderColor: emailBorderColor }}
              onMouseEnter={() => setEmailBorderColor("rgba(128, 0, 128, 1)")}
              onMouseLeave={() => setEmailBorderColor("transparent")}
            >
              <CgMail size={25} className="text-white" />
            </div>
          </Link>

          <div
            className={`p-2 rounded-full border-dashed border-2 ${downloadBorderColor}`}
            style={{ borderColor: downloadBorderColor }}
            onMouseEnter={() => setDownloadBorderColor("rgba(34, 139, 34, 1)")}
            onMouseLeave={() => setDownloadBorderColor("transparent")}
          >
            <DownloadPDFButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
