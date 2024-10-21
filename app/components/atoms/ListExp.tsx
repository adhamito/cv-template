"use client";
import { FC } from "react";
import { motion } from "framer-motion";

export const ListExp: FC = () => {
  return (
    <ul className="m-4 space-y-1 ">
      {/* List Item 1 */}
      <li className="flex items-center space-x-4 group hover:text-green-500">
        <motion.svg
          className="w-4 h-4 text-gray-100 group-hover:text-green-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
          />
          <animate
            attributeName="cx"
            begin="0s"
            dur="8s"
            from="50"
            to="90%"
            fill="freeze"
          />
        </motion.svg>
        <span className="text-white group-hover:text-white">
          Collaborated with a development team to enhance ERP modules, focusing
          on inventory management.
        </span>
      </li>

      <li className="flex items-center space-x-4 group hover:text-green-500">
        <motion.svg
          className="w-4 h-4 text-gray-100 group-hover:text-green-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ x: 10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
        <span className="text-white group-hover:text-white">
          Contributed to building backend services using Node.js, creating
          scalable and efficient APIs for integration with third-party
          platforms.
        </span>
      </li>

      <li className="flex items-center space-x-4 group hover:text-green-500">
        <motion.svg
          className="w-4 h-4 text-gray-100 group-hover:text-green-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
        <span className="text-white group-hover:text-white">
          Assisted in debugging and optimizing ERP features, improving system
          performance and security by applying industry best practices.
        </span>
      </li>

      {/* List Item 4 */}
      <li className="flex items-center space-x-4 group hover:text-green-500">
        {/* Animated SVG with hover movement */}
        <motion.svg
          className="w-4 h-4 text-gray-100 group-hover:text-green-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ x: -10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
        <span className="text-white group-hover:text-white">
          Participated in daily stand-ups and sprint planning meetings, gaining
          experience with Agile methodologies in a fast-paced development
          environment.
        </span>
      </li>

      <li className="flex items-center space-x-4 group hover:text-green-500">
        <motion.svg
          className="w-4 h-4 text-gray-100 group-hover:text-green-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ y: 10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
        <span className="text-white group-hover:text-white">
          Acquired hands-on experience in testing, deployment, and documentation
          processes, supporting the delivery of high-quality solutions.
        </span>
      </li>
    </ul>
  );
};
