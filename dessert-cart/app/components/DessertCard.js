import React from 'react';

const DessertCard = ({ dessert, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 text-center transform transition hover:scale-105 duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{dessert.name}</h2>
      <p className="text-gray-600 mb-4">${dessert.price.toFixed(2)}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        onClick={() => addToCart(dessert)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DessertCard;
