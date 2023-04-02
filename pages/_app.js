import "@/styles/globals.css";

import { CartProvider } from "../context/CartContext";
import { ProductsProvider } from "../context/ProductsContext";
import { UserProvider } from "../context/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}
