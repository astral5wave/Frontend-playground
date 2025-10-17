import React from "react";
import { NavLink } from "react-router-dom";
import pathList from "./pathList.js";

const Index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="w-full max-w-2xl h-[85vh] bg-white rounded-3xl shadow-2xl border border-purple-200 flex flex-col">
        <h1 className="text-3xl font-extrabold text-center mt-6 mb-4 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
          Mini Projects
        </h1>

        <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
          {pathList.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block w-full px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
