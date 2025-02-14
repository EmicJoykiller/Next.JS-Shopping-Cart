import React from 'react';
import { Button } from './Button';

const DessertCard = ({ product, addToCart }) => {
  return (
    <div className="dessert-card">
      <h2>{product.name}</h2>
      <p className="dessert-price">${product.price}</p>
      <p className="product-category">Category: {product.category}</p>
      <Button onClick={() => addToCart(product)} text="Add to Cart" />
    </div>
  );
};

export default DessertCard;
