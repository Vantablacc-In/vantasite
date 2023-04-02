import { supabase } from "./supabaseClient";

export const getCart = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("order_items")
      .select(`*, products (*)`)
      .eq("user_id", userId);

    if (error) throw error;

    return data.map(({ product, quantity }) => ({
      ...product,
      quantity,
    }));
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

export const addToCart = async (userId, product, quantity = 1) => {
  try {
    const { data, error } = await supabase.from("order_items").insert([
      {
        user_id: userId,
        product_id: product.id,
        quantity,
      },
    ]);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return null;
  }
};

export const updateCartItemQuantity = async (userId, productId, quantity) => {
  try {
    const { data, error } = await supabase
      .from("order_items")
      .update({ quantity })
      .eq("user_id", userId)
      .eq("product_id", productId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return null;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    const { data, error } = await supabase
      .from("order_items")
      .delete()
      .eq("user_id", userId)
      .eq("product_id", productId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return null;
  }
};
