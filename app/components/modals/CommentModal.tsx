import { FC } from "react";
import { ModalBody, ModalContent, useModal } from "../ui/animated-modal";

type CommentModalProps = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  message: string;
  setMessage: (message: string) => void;
  successMessage: string;
  errorMessage: string;
  setSuccessMessage: (msg: string) => void;
  setErrorMessage: (msg: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};

export const CommentModal: FC<CommentModalProps> = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  successMessage,
  errorMessage,
  handleSubmit,
}) => {
  const { setOpen } = useModal();

  return (
    <ModalBody className="bg-gray-900">
      <ModalContent className="w-full items-center text-center py-6">
        <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-400"
            >
              Name
            </label>
            <input
              required
              name="name"
              id="name"
              type="text"
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none
               focus:border-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-400"
            >
              Email
            </label>
            <input
              required
              name="email"
              id="email"
              type="email"
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="textarea"
              className="text-sm font-semibold text-gray-400"
            >
              How Can We Help You?
            </label>
            <textarea
              required
              name="textarea"
              id="textarea"
              cols={50}
              rows={10}
              className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue"
            />
          </div>

          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex flex-row justify-end items-center gap-4 m-2 ">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Submit
            </button>
            <button
              className="bg-white text-black py-2 hover:bg-red-500 px-4 rounded-lg "
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </form>
      </ModalContent>
    </ModalBody>
  );
};
