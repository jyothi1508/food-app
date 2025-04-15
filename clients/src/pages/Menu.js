import React, { useState } from "react";
import "./Menu.css";


const foodItems = [
  { id: 1, name: "Burger", price: 150, image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg" },
  { id: 2, name: "Pizza", price: 300, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Pasta", price: 250, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "Noodles", price: 150, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, name: "Salads", price: 300, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D" },
  { id: 6, name: "Soups", price: 250, image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291cHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, name: "Desserts", price: 150, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 8, name: "Rolls", price: 300, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D" },
  { id: 9, name: "Cake", price: 250, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D" }
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="app-container">
      <div className="menu-container">
        <div className="header">
          <h2>Our Menu </h2>
          <button 
            className="cart-toggle" 
            onClick={() => setShowCart(!showCart)}
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
        
        <div className="menu-grid">
          {foodItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="food-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
                  }}
                />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCart && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>Your Cart 🛒</h3>
            <button onClick={() => setShowCart(false)}>×</button>
          </div>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-info">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;