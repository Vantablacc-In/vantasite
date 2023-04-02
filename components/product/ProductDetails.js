import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

const ProductDetails = ({ product, onAddToCart }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleVariantChange = (variantId) => {
    const variant = product.variants.find((v) => v._id === variantId);
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant });
    onAddToCart && onAddToCart();
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md p-6 rounded-lg">
      <div className="w-full md:w-1/2">
        <img
          src={product.mainImage.asset.url}
          alt={product.name}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between mt-4 md:mt-0 md:ml-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-gray-600">{product.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <div>
            <label htmlFor="variant-selector" className="block text-gray-700 font-medium mb-2">
              Variant
            </label>
            <select
              id="variant-selector"
              className="w-full bg-white border border-gray-300 py-2 px-4 rounded text-gray-700 focus:outline-none focus:border-black mb-4"
              value={selectedVariant._id}
              onChange={(e) => handleVariantChange(e.target.value)}
            >
              {product.variants.map((variant) => (
                <option key={variant._id} value={variant._id}>
                  {variant.name} - ${variant.price.toFixed(2)}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 mt-4 md:mt-0"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
