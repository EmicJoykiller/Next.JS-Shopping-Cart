import React, { useState } from 'react';
import './App.css';
import DessertCard from './DessertCard';
import Cart from './Cart';
import { Button } from './Button';

const products = [
  { id: 1, name: "Vanilla Cupcakes (6 Pack)", price: 12.99, category: "Cupcake" },
  { id: 2, name: "French Macaron", price: 3.99, category: "Macaron" },
  { id: 3, name: "Pumpkin Cupcake", price: 3.99, category: "Cupcake" },
  { id: 4, name: "Chocolate Cupcake", price: 5.99, category: "Cupcake" },
  { id: 5, name: "Chocolate Pretzels (4 Pack)", price: 10.99, category: "Pretzel" },
  { id: 6, name: "Strawberry Ice Cream", price: 2.99, category: "Ice Cream" },
  { id: 7, name: "Chocolate Macarons (4 Pack)", price: 9.99, category: "Macaron" },
  { id: 8, name: "Strawberry Pretzel", price: 4.99, category: "Pretzel" },
  { id: 9, name: "Butter Pecan Ice Cream", price: 2.99, category: "Ice Cream" },
  { id: 10, name: "Rocky Road Ice Cream", price: 2.99, category: "Ice Cream" },
  { id: 11, name: "Vanilla Macarons (5 Pack)", price: 11.99, category: "Macaron" },
  { id: 12, name: "Lemon Cupcakes (4 Pack)", price: 12.99, category: "Cupcake" }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
    } else {
      alert('Your cart is already empty.');
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.0825; // 8.25% tax
    return { subtotal, tax, total: subtotal + tax };
  };

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Desserts</h1>
        <Button onClick={toggleCart} text={isCartVisible ? "Hide Cart" : "Show Cart"} />
      </header>
      <main>
        <div className="dessert-card-container">
          {products.map(product => (
            <DessertCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </main>
      {isCartVisible && <Cart cartItems={cartItems} clearCart={clearCart} total={calculateTotal()} />}
    </div>
  );
}

export default App;
