import React, { useState } from 'react';

export const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-6">
      <label htmlFor="category-filter" className="block text-gray-700 font-medium mb-2">
        Category
      </label>
      <select
        id="category-filter"
        className="w-full bg-white border border-gray-300 py-2 px-4 rounded text-gray-700 focus:outline-none focus:border-black"
        value={selectedCategory}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
