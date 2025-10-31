import React from "react";
import { useOutsideClick } from "./useOutsideClick";

const Modal = ({ handleClose, children }) => {
  const ref = React.useRef(null);
  useOutsideClick(ref, handleClose);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={ref}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 ease-out transform scale-100"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
