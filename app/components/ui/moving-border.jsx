"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Moving = ({ children }) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);
  const duration = 14000;

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className="relative w-[210mm] h-[297mm] mb-4 mt-4 bg-white overflow-hidden bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx="10%"
          ry="10%"
          ref={pathRef}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          border: "4px solid hsl(210, 100%, 50%)",
          borderRadius: "10%",
          background: "transparent",
        }}
      />

      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Moving;
