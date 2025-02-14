"use client"
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DessertCard from './components/DessertCard';
import Cart from './components/Cart';

const DESSERTS = [
  { name: 'Chocolate Cake', price: 5.99 },
  { name: 'Cheesecake', price: 6.49 },
  { name: 'Macarons', price: 3.99 },
  { name: 'Tiramisu', price: 7.99 },
];

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (dessert) => {
    setCartItems([...cartItems, dessert]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <Navbar toggleCart={toggleCart} cartItems={cartItems} />
      <main className="mt-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Delicious Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESSERTS.map((dessert, index) => (
            <DessertCard key={index} dessert={dessert} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <Cart cartItems={cartItems} clearCart={clearCart} isOpen={cartOpen} />
    </div>
  );
}
