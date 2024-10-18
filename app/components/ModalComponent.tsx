"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./ui/animated-modal"; // Assuming this is your custom modal UI

type ModalExampleProps = {
  title: string;
  content: string;
  isModalmOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  onClose: () => void;
};

export default function ModalExample({
  title,
  content,
  onClose,
  isModalmOpen,
  setModalOpen,
}: ModalExampleProps) {
  return (
    <>
      {/* Display modal content only when isModalmOpen is true */}
      {isModalmOpen && (
        <Modal>
          <div className="p-10">
            <ModalBody className="p-6">
              <ModalContent>
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-md mb-4">{content}</p>
              </ModalContent>

              <ModalFooter>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setModalOpen(false);
                    onClose();
                  }}
                >
                  Close
                </button>
              </ModalFooter>
            </ModalBody>
          </div>
        </Modal>
      )}
    </>
  );
}
