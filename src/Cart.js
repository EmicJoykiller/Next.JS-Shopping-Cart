import React from 'react';
import { Button } from './Button';

const Cart = ({ cartItems, clearCart, total }) => {
  return (
    <div className="cart-container">
      <Button onClick={clearCart} text="Clear Cart" />
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total items: {cartItems.length}</p>
        <p>Subtotal: ${total.subtotal.toFixed(2)}</p>
        <p>Taxes: ${total.tax.toFixed(2)}</p>
        <p>Total: ${total.total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
