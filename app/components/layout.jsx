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
      className={`relative md:w-[210mm] md:h-[297mm] mb-2 mt-2 bg-white border-t-2
      ${borderColor.top} border-r-2 ${borderColor.right} border-b-2 ${borderColor.bottom} 
      border-l-2 ${borderColor.left} overflow-hidden 
      md:w-[160mm] md:h-[230mm] sm:w-[120mm] sm:h-[160mm]`}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Layout;
