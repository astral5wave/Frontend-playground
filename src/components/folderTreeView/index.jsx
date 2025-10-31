import React from "react";
import { FaFolderPlus, FaFolderMinus, FaFileAlt } from "react-icons/fa";
import folderTreeData from "./FolderTreeData.js";

const TreeView = () => {
  return (
    <div className="min-h-screen w-1/3 bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col gap-2 p-4">
      {folderTreeData.map((item, i) => (
        <View item={item} key={i} />
      ))}
    </div>
  );
};

const View = ({ item }) => {
  const [isOpen, setIsopen] = React.useState(false);

  return (
    <>
      <div
        className={`px-3 py-2 flex items-center justify-between rounded-lg cursor-pointer transition-all duration-200 
        ${
          item.type === "folder"
            ? "bg-blue-600 hover:bg-blue-500"
            : "bg-blue-700 hover:bg-blue-600"
        } text-white font-medium shadow-sm`}
      >
        <div className="truncate">{item.name}</div>
        <button
          type="button"
          onClick={() => setIsopen(!isOpen)}
          className="ml-2 text-white hover:text-yellow-300 transition-colors"
        >
          {item.type === "folder" ? (
            isOpen ? (
              <FaFolderMinus />
            ) : (
              <FaFolderPlus />
            )
          ) : (
            <FaFileAlt />
          )}
        </button>
      </div>

      {item.hasOwnProperty("children") && isOpen && (
        <div className="flex flex-col gap-2 pl-8 mt-2 border-l-2 border-blue-700 transition-all duration-300 ease-in-out">
          {item.children.map((itemSub, i) => (
            <View item={itemSub} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default TreeView;
