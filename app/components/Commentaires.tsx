"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CommentModal } from "./modals/CommentModal";
import { CommentModalTrigger } from "./modals/CommentModalTrigger";
import { Modal } from "./ui/animated-modal";
import Image from "next/image";

const Commentaires = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments");
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
      } else {
        const error = await response.json();
        setErrorMessage(error.error || "Failed to fetch comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      setErrorMessage("Something went wrong while fetching comments.");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          description: message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Comment added:", result);
        setSuccessMessage("Comment created successfully!");
        setErrorMessage("");
        fetchComments();
      } else {
        const error = await response.json();
        setErrorMessage(error.error || "Failed to create comment");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [comments.length]);

  return (
    <div className="w-full p-8 bg-[#111827]">
      <div className="mt-8">
        <div className="relative w-full flex flex-col items-center mt-8">
          <h2 className="text-white font-semibold text-2xl mb-2">Comments</h2>
          <div className="relative w-full md:h-28 h-28 overflow-hidden rounded-lg ">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <motion.div
                  key={comment.$id}
                  className={`absolute w-full transition-transform duration-700 ease-in-out transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li className="md:py-3 md:px-4 sm:py-4 mb-4 shadow-xl px-1 ">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="rounded-full"
                          src="https://i.pinimg.com/originals/a0/e5/c5/a0e5c5602434853db7d94889eb65a106.gif"
                          alt={`${comment.name} image`}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4 px-4">
                        <p className="md:text-sm text-xs  font-medium text-gray-900 truncate dark:text-white">
                          {comment.name}
                        </p>
                        <p className="md:text-sm text-xs text-gray-500 truncate dark:text-gray-400">
                          {comment.email}
                        </p>
                      </div>
                      <div className="inline-flex items-center md:text-base text-xs font-semibold text-gray-400">
                        {comment.description}
                      </div>
                    </div>
                  </li>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400">No comments yet.</p>
            )}
          </div>
        </div>
      </div>

      <Modal>
        <CommentModalTrigger
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
        />
        <CommentModal
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          successMessage={successMessage}
          errorMessage={errorMessage}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
};

export default Commentaires;
