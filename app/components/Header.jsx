import React from "react";
import data from "./data.json";

export default function Header() {
  return (
    <header className="text-center my-2 py-4 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        {data.personalInfo.name}
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium">
        {data.personalInfo.title}
      </p>
    </header>
  );
}
