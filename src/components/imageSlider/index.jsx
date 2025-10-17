import React, { useEffect } from "react";
import arr from "./images/arr.js";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCircle,
} from "react-icons/fa";
const circle = [
  <FaCircle />,
  <FaCircle />,
  <FaCircle />,
  <FaCircle />,
  <FaCircle />,
  <FaCircle />,
  <FaCircle />,
];
const ImageSlider = () => {
  const imgArr = arr;
  const [imagePointer, setImagePointer] = React.useState(0);
  React.useEffect(() => {
    imgArr.map((i) => {
      let img = new Image();
      img.src = i;
    });
  }, []);
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-[500px] w-[700px] relative overflow-hidden">
        <img
          src={imgArr[imagePointer]}
          className="object-cover h-full w-full"
        />
        <button
          className="px-4 py-2 absolute top-[45%] left-0 text-gray-100"
          onClick={() =>
            setImagePointer((imagePointer) => (imagePointer - 1 + 7) % 7)
          }
        >
          <FaArrowAltCircleLeft size={40} />
        </button>
        <button
          className="px-4 py-2 absolute top-[45%] right-0 text-gray-100"
          onClick={() =>
            setImagePointer((imagePointer) => (imagePointer + 1 + 7) % 7)
          }
        >
          <FaArrowAltCircleRight size={40} />
        </button>
        <div className="flex items-center gap-4 absolute bottom-4 left-[250px]">
          {circle.map((item, i) => {
            return (
              <span
                key={i}
                className={`${
                  i == imagePointer ? "text-gray-100" : "text-gray-400"
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
