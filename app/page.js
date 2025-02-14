// app/page.js
"use client";
import React, { useState } from "react";

const desserts = [
  { id: 1, name: "Chocolate Cake", price: 5.99 },
  { id: 2, name: "Vanilla Ice Cream", price: 3.49 },
  { id: 3, name: "Strawberry Shortcake", price: 4.99 },
  { id: 4, name: "Apple Pie", price: 4.49 },
  { id: 5, name: "Cheesecake", price: 6.99 },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dessert.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dessert.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...dessert, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Dessert Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {desserts.map((dessert) => (
          <div
            key={dessert.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700">
              {dessert.name}
            </h2>
            <p className="text-lg text-gray-600">${dessert.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(dessert)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg p-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400 transition duration-300"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-400 transition duration-300"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-2xl font-bold text-gray-800 mt-4">
          Total: ${totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
