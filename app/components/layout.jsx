"use client";

import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollisionDemo";

const Layout = ({ children }) => {
  const [borderColor, setBorderColor] = useState({
    bottom: "border-transparent",
  });

  useEffect(() => {
    const colors = ["border-b-purple-500"];
    const sides = ["top", "left", "bottom", "right"];
    let index = 0;

    const changeBorderColor = () => {
      setBorderColor({
        bottom: "border-transparent",
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
      className={`relative md:w-[210mm] md:h-[297mm] mb-2 mt-2  border-b-2 ${borderColor.bottom} 
       overflow-hidden 
      md:w-[160mm] md:h-[230mm] sm:w-[120mm] sm:h-[160mm] w-[100mm] h-[230mm]`}
    >
      <BackgroundBeamsWithCollisionDemo>
        <div className="absolute inset-0">{children}</div>
      </BackgroundBeamsWithCollisionDemo>
    </div>
  );
};

export default Layout;
