import React from "react";
import "./Cart.css";

const Cart = ({ cart, showCart, setShowCart, removeFromCart, calculateTotal }) => {
  return (
    <div className={`cart-sidebar ${showCart ? "show" : ""}`}>
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
  );
};

export default Cart;