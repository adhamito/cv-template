import React from "react";
import data from "./data.json";

export default function Header() {
  return (
    <header className="text-center my-6 py-4 text-black">
      <h1 className="text-4xl font-bold">{data.personalInfo.name}</h1>
      <p className="text-lg font-medium">{data.personalInfo.title}</p>
    </header>
  );
}
