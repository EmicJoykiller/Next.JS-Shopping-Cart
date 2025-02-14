import React from 'react';

const Navbar = ({ toggleCart, cartItems }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center text-2xl font-semibold text-gray-800">
            Dessert Shop
          </div>
          <button onClick={toggleCart} className="relative">
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
