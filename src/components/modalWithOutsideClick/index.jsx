import React from "react";
import Modal from "./Modal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-150"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Modal handleClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-800">Select an Option</h2>
            <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-72 pr-1">
              {Array.from({ length: 18 }).map((_, i) => (
                <button
                  key={i}
                  className="bg-green-100 hover:bg-green-200 active:bg-green-300 text-gray-700 font-medium rounded-lg px-4 py-2 shadow-sm transition-all duration-150"
                >
                  Button {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Index;
