import React from "react";

function Modal({ message, onClose, onConfirm, buttonText }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-400 rounded text-white hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
