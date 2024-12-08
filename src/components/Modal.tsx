import React from "react";

type ModalProps = {
    onClose: () => void;
    children: React.ReactNode;
};
const Modal = ({ onClose, children }: ModalProps) => {
    return (
        <div
            onClick={onClose}
            className="w-full h-screen bg-white/20 backdrop-blur-md fixed top-0 left-0"
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="absolute top-[50%] left-[50%] translate-x-[-50%] md:translate-x-[-30%] translate-y-[-50%] w-[90%] h-[30rem] md:w-[30rem] md:h-[30rem] bg-white shadow-lg rounded-md"
            >
                {/* Change this to icon  */}
                <span className="absolute top-0 right-0 my-2 mx-5">X</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
