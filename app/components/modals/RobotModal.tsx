import { FC, useState } from "react";
import { ModalBody, ModalContent, useModal } from "../ui/animated-modal";
import { motion } from "framer-motion";

interface Message {
  text: string;
  sender: "robot" | "user";
}

export const RobotModal: FC = () => {
  const { setOpen } = useModal();
  const [messages, setMessages] = useState<Message[]>([]);

  const initialMessage: Message = {
    text: "Hello, I am Robo! How can I assist you today?",
    sender: "robot",
  };

  const handleSendMessage = (userInput: string) => {
    const userMessage: Message = { text: userInput, sender: "user" };
    const robotMessage: Message = {
      text: "Thanks for your input!",
      sender: "robot",
    }; // Robot response
    setMessages((prev) => [...prev, userMessage, robotMessage]);
  };

  return (
    <ModalBody className="bg-gray-900">
      <ModalContent className="w-full items-center text-center py-6">
        <div className="w-full max-h-96 overflow-y-auto p-4 flex flex-col space-y-2">
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 text-white p-3 rounded-lg self-start"
            >
              {initialMessage.text}
            </motion.div>
          )}
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "robot"
                  ? "bg-gray-700 text-white self-start"
                  : "bg-blue-500 text-white self-end"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Type your message..."
          className="mt-4 p-2 w-full rounded bg-gray-800 text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
        <button
          onClick={() => setOpen(false)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </ModalContent>
    </ModalBody>
  );
};
