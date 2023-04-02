import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const MiniCart = ({ showMiniCart, setShowMiniCart }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowMiniCart(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowMiniCart(false);
  };

  return (
    <>
      <button onClick={handleToggle} className="text-white focus:outline-none">
        <i className="fas fa-shopping-cart"></i>
        {cart.length > 0 && (
          <span className="ml-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
      {isOpen && showMiniCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div className="bg-white w-full max-w-xl mx-auto rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <button
                onClick={handleClose}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            {cart.length > 0 ? (
              <>
                <div className="overflow-y-auto max-h-96">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <button
                  onClick={() => {
                    clearCart();
                    handleClose();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 w-full"
                >
                  Clear Cart
                </button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MiniCart;
