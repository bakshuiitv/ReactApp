
import React, { useState } from 'react';
import PageLoader from './CustomLoader';

const products = [
    { id: 1, name: 'Mechanical Engineering Book', price: 50 },
    { id: 2, name: 'Physics for Engineers', price: 40 },
    { id: 3, name: 'Thermodynamics Guide', price: 60 },
    { id: 4, name: 'Thermodynamics Guide-1', price: 70 },
    { id: 5, name: 'Thermodynamics Guide-2', price: 80 },
    { id: 6, name: 'Thermodynamics Guide-3', price: 90 },
    { id: 7, name: 'Thermodynamics Guide-4', price: 100 },
  ];

const Contact = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
  
    const addToCart = (product) => {
        setCart((prevCart) => {
          // Check if the product already exists in the cart
          const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      
          if (existingProductIndex !== -1) {
            // Product exists in the cart, update its quantity or other properties
            const updatedCart = [...prevCart];
            updatedCart[existingProductIndex] = {
              ...updatedCart[existingProductIndex],
              quantity: updatedCart[existingProductIndex].quantity + 1 // Increment the quantity
            };
            return updatedCart;
          } else {
            // Product doesn't exist, add it with quantity 1
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      
      
  
    const toggleCart = () => {
      setShowCart(!showCart);
    };
  
    const getTotal = () => {
      return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    return(


<div className="container">
<PageLoader />
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card p-3">
              <h5>{product.name}</h5>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={toggleCart} className="btn btn-secondary mt-4">
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>

      {showCart && (
        <div className="mt-4">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          )}
          <h4>Total: ${getTotal()}</h4>
        </div>
      )}
    </div>
  );
};

export default Contact;
