import React, { createContext, useContext, useEffect, useState } from "react";
import {
  removeFromCart as deleteFromCart,
  getCart,
  addToCart as saveToCart,
  updateCartItemQuantity,
} from "../lib/cart";

import { useUser } from "./UserContext";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const { user } = useUser();
  const [cart, setCart] = useState([]);
  const [showMiniCart, setShowMiniCart] = useState(false);

  useEffect(() => {
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const fetchCartItems = async () => {
    try {
      const items = await getCart(user.id);
      setCart(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const updatedCart = await saveToCart(user.id, product);
      setCart(updatedCart);
      setShowMiniCart(true);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = await deleteFromCart(user.id, productId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const updatedCart = await updateCartItemQuantity(
        user.id,
        productId,
        quantity
      );
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
