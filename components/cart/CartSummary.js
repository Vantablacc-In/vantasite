import Link from "next/link";
import React from "react";
import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between items-center mb-2">
        <span>Subtotal:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span>Shipping:</span>
        <span>Calculated at checkout</span>
      </div>
      <div className="flex justify-between items-center font-semibold mb-6">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <Link href="/checkout">
        <a className="bg-black text-white text-center w-full py-2 rounded-md">
          Proceed to Checkout
        </a>
      </Link>
    </div>
  );
};

export default CartSummary;
