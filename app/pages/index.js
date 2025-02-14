import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Vanilla Cupcakes (6 Pack)', price: 12.99, category: 'Cupcake' },
  { id: 2, name: 'French Macaron', price: 3.99, category: 'Macaron' },
  { id: 3, name: 'Pumpkin Cupcake', price: 3.99, category: 'Cupcake' },
  { id: 4, name: 'Chocolate Cupcake', price: 5.99, category: 'Cupcake' },
  { id: 5, name: 'Chocolate Pretzels (4 Pack)', price: 10.99, category: 'Pretzel' },
  { id: 6, name: 'Strawberry Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 7, name: 'Chocolate Macarons (4 Pack)', price: 9.99, category: 'Macaron' },
  { id: 8, name: 'Strawberry Pretzel', price: 4.99, category: 'Pretzel' },
  { id: 9, name: 'Butter Pecan Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 10, name: 'Rocky Road Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 11, name: 'Vanilla Macarons (5 Pack)', price: 11.99, category: 'Macaron' },
  { id: 12, name: 'Lemon Cupcakes (4 Pack)', price: 12.99, category: 'Cupcake' },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  const taxRate = 8.25;

  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      updateCartSummary(updatedItems);
      return updatedItems;
    });
  };

  const updateCartSummary = (items) => {
    const itemCount = items.length;
    const subTotalValue = items.reduce((total, item) => total + item.price, 0);
    const taxValue = calculateTaxes(subTotalValue);
    const totalValue = subTotalValue + taxValue;

    setTotalCount(itemCount);
    setSubTotal(subTotalValue);
    setTaxes(taxValue);
    setTotal(totalValue);
  };

  const calculateTaxes = (amount) => {
    return parseFloat(((taxRate / 100) * amount).toFixed(2));
  };

  const clearCart = () => {
    if (cartItems.length === 0) {
      alert('Your shopping cart is already empty');
      return;
    }
    const confirmClear = window.confirm('Are you sure you want to clear all items from your shopping cart?');
    if (confirmClear) {
      setCartItems([]);
      setTotalCount(0);
      setSubTotal(0);
      setTaxes(0);
      setTotal(0);
    }
  };

  return (
    <div>
      <div id="dessert-card-container">
        {products.map(({ name, id, price, category }) => (
          <div key={id} className="dessert-card">
            <h2>{name}</h2>
            <p className="dessert-price">${price}</p>
            <p className="product-category">Category: {category}</p>
            <button
              onClick={() => addToCart(id)}
              className="btn add-to-cart-btn"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <button
        id="cart-btn"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        {isCartVisible ? 'Hide' : 'Show'} Cart
      </button>

      {isCartVisible && (
        <div id="cart-container">
          <div>
            <h3>Your Cart</h3>
            <p>Total Items: {totalCount}</p>
            <p>Subtotal: ${subTotal.toFixed(2)}</p>
            <p>Taxes: ${taxes.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button id="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          <div id="products-container">
            {cartItems.map((item, index) => (
              <div key={index} className="product">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
