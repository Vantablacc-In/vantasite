import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    updateQuantity(item.id, quantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex border-b border-gray-200 py-4">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-1/4 h-auto object-cover"
      />
      <div className="flex flex-col justify-between pl-4 w-full">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-gray-500">{item.description}</p>
        <div className="flex items-center mt-4">
          <label htmlFor={`quantity-${item.id}`} className="mr-2">
            Quantity:
          </label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            min="1"
            className="border border-gray-300 rounded w-20 mr-4 text-center"
            onChange={handleQuantityChange}
          />
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
