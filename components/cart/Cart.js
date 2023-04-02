import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Your cart is empty.</h2>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Continue shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">Your Cart</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-3/4 space-y-8">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Clear Cart
          </button>
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
