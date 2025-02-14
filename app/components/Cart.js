import React from 'react';

const Cart = ({ cartItems, clearCart, isOpen }) => {
  return (
    <div className={`fixed top-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      <button onClick={clearCart} className="mt-4 w-full py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
