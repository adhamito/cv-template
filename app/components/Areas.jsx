import React from "react";
import { FaPen, FaEnvelope, FaPlus } from "react-icons/fa";

const Areas = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-2  ">
      <button className="flex items-center bg-gray-300 hover:bg-blue-400 text-gray-700 font-bold  px-4 transition-all duration-200 rounded-3xl">
        <FaPen className="mr-2" />
        Notes de Réunion
      </button>
      <button className="flex items-center bg-gray-300 hover:bg-green-400 text-gray-700 font-bold  px-4  transition-all duration-200 rounded-3xl">
        <FaEnvelope className="mr-2" />
        Brouillon de Mail
      </button>
      <button className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-4  transition-all duration-200 rounded-3xl">
        <FaPlus className="mr-2" />
        Plus
      </button>
    </div>
  );
};

export default Areas;
