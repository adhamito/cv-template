import { Dispatch, FC, SetStateAction } from "react";
import { useModal } from "../ui/animated-modal";

type CommentModalTriggerProps = {
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
};

export const CommentModalTrigger: FC<CommentModalTriggerProps> = ({
  setName,
  setEmail,
  setMessage,
}) => {
  const { setOpen } = useModal();

  const handleOpenModal = () => {
    setName("");
    setEmail("");
    setMessage("");
    setOpen(true);
  };

  return (
    <div className=" text-start" onClick={handleOpenModal}>
      <button className=" px-3 py-1 border-2 border-[#E6AD00] bg-transparent text-[#E6AD00] uppercase text-lg transition duration-300 focus:outline-none">
        add comment
        <span
          className="absolute inset-0 transform rotate-45 bg-[#17C3B2] transition-all duration-500 ease-in-out"
          style={{
            width: "0",
            height: "100%",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </button>
    </div>
  );
};
