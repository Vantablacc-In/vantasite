import React from "react";
import { useRouter } from 'next/router';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/product/${product.slug.current}`);
  };

  return (
    <a href={`/product/${product.slug.current}`} onClick={handleClick} className="group">
      <div className="relative pb-3/4">
        <img
          src={product.mainImage.asset.url}
          alt={product.name}
          className="absolute h-full w-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-black">{product.name}</h3>
        <p className="text-gray-500">
          ${product.price ? product.price.toFixed(2) : "N/A"}
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
