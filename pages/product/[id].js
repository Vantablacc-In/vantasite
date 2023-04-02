import React, { useEffect, useState } from "react";

import { Layout } from "../../components/common/Layout";
import { ProductDetails } from "../../components/product/ProductDetails";
import { sanity } from "../../lib/sanityClient";
import { useRouter } from "next/router";

export const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await sanity.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id }
        );
        setProduct(data);
      } catch (err) {
        setError("Error fetching product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>{error}</Layout>;
  if (!product) return <Layout>Product not found</Layout>;

  return (
    <Layout>
      <ProductDetails product={product} />
    </Layout>
  );
};

export default ProductPage;
