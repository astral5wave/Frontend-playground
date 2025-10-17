import React from "react";
import data from "./data.js";

const Accordian = () => {
  const [openId, setOpenId] = React.useState(-1);
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {data.map((item, i) => (
        <AtomicData key={i} item={item} openId={openId} setOpenId={setOpenId} />
      ))}
    </div>
  );
};

const AtomicData = ({ item, openId, setOpenId }) => {
  const isOpen = openId === item.id - 1;
  return (
    <div className="w-full max-w-md flex flex-col rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="py-4 px-5 font-semibold flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white cursor-pointer select-none">
        <p className="text-lg">{item.first}</p>
        <button
          type="button"
          className="bg-white/20 hover:bg-white/30 p-2 rounded-md transition"
          onClick={() => {
            if (isOpen) setOpenId(-1);
            else setOpenId(item.id - 1);
          }}
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      <div
        className={`bg-gray-50 px-5 py-3 text-gray-700 text-sm transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {item.second}
      </div>
    </div>
  );
};

export default Accordian;
