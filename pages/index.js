import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../context/CartContext";
import { Layout } from "../components/common/Layout";
import { ProductFilter } from "../components/product/ProductFilter";
import { ProductList } from "../components/product/ProductList";
import { sanity } from "../lib/sanityClient";

const HomePage = ({ products, categories, error }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log("Number of products:", products.length);
    console.log("Number of categories:", categories.length);
    if (error) {
      console.log("Error fetching data:", error);
    }
  }, [products, categories, error]);

  const handleFilterChange = (category) => {
    // Filter the products based on the selected category
    const newFilteredProducts = category
      ? products.filter((product) => product.category._id === category)
      : products;
    setFilteredProducts(newFilteredProducts);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <Layout>
      <ProductFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const products = await sanity.fetch(`*[_type == "product"]{
      ...,
      "variants": variants[]->,
      "tags": tags[]->,
      "author": author->
    }`);
    const categories = await sanity.fetch(`*[_type == "category"]`);
    console.log("Number of products:", products.length);
    console.log("Number of categories:", categories.length);
    return {
      props: {
        products,
        categories,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        error: {
          message: "Error fetching data",
        },
      },
    };
  }
}

export default HomePage;
