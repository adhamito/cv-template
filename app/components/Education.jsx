"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "./data.json";

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisible) => [
              ...prevVisible,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const educationElements = document.querySelectorAll(".education-item");
    educationElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      educationElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="p-2 text-white">
      <h2 className="md:text-2xl text-lg font-bold mb-1">Education</h2>
      <ul className="md:space-y-4 space-y-1 ">
        {data.education.map((edu, index) => (
          <motion.li
            key={index}
            className="education-item text-sm md:text-lg  "
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              visibleItems.includes(index.toString())
                ? { opacity: 1, translateY: 0 }
                : {}
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-index={index}
          >
            <p className="font-semibold">
              {edu.degree} in {edu.major ? edu.major : edu.degree}
            </p>
            <p>
              {edu.institution}, {edu.duration}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
