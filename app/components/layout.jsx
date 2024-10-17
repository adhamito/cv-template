"use client";

import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [borderColor, setBorderColor] = useState({
    top: "border-white",
    right: "border-white",
    bottom: "border-white",
    left: "border-white",
  });

  useEffect(() => {
    const colors = [
      "border-t-blue-500",
      "border-l-black",
      "border-b-purple-500",
      "border-r-blue-500",
    ];
    const sides = ["top", "left", "bottom", "right"];
    let index = 0;

    const changeBorderColor = () => {
      setBorderColor({
        top: "border-white",
        right: "border-white",
        bottom: "border-white",
        left: "border-white",
      });

      setBorderColor((prev) => ({
        ...prev,
        [sides[index]]: colors[index % colors.length],
      }));

      index = (index + 1) % sides.length;

      setTimeout(changeBorderColor, 5000);
    };

    changeBorderColor();

    return () => clearTimeout(changeBorderColor);
  }, []);

  return (
    <div
      className={`relative w-[210mm] h-[297mm] mb-4 mt-4 bg-white border-t-1
         ${borderColor.top} border-r-1 ${borderColor.right} border-b-1 ${borderColor.bottom} 
         border-l-1 ${borderColor.left} overflow-hidden`}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Layout;
