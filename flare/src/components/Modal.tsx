import React from "react";
import close from "../assets/icon/close.png";
import question from "../assets/icon/q.png";

// Define the props using an interface
interface ModalProps {
  isOpen: boolean;
  title: string;
  icon: string;
  closeModal: () => void;
  backToFirstModal?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  title,
  icon,
  backToFirstModal,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div
        className="flex flex-col bg-[#1E1E1E] rounded-xl shadow-lg w-[95%] md:w-[550px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-b-gray-500 p-3 py-5">
          <div
            className="w-5 h-5 flex items-center justify-center hover:bg-gray-400 rounded-full cursor-pointer"
            onClick={backToFirstModal ? backToFirstModal : undefined}
          >
            <img
              src={backToFirstModal ? icon : question}
              alt={backToFirstModal ? "back" : "question"}
              className="w-3"
            />
          </div>
          <div className="text-sm text-white">{title}</div>
          <div
            className="w-5 h-5 flex items-center justify-center hover:bg-gray-400 rounded-full cursor-pointer"
            onClick={closeModal}
          >
            <img src={close} alt="close" className="w-2" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
