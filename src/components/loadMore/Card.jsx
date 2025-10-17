import React from 'react';

const Card = ({ product }) => {
  const { id, title, price, thumbnail } = product;

  return (
    <div className="border rounded-2xl shadow-md p-4 w-64 bg-white flex flex-col items-center hover:shadow-lg transition-shadow">
      <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded-md overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mt-4 w-full text-center">
        <h2 className="text-base font-semibold text-gray-800 truncate" title={title}>
          {title}
        </h2>
        <p className="text-blue-600 font-bold text-lg mt-2">${price}</p>
      </div>
    </div>
  );
};

export default Card;
