import React, { createContext, useEffect, useState } from "react";

import { sanity } from "../lib/sanityClient";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]`;
      const result = await sanity.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
