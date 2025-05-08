import React from 'react';

const CategoryMenu = () => {
  const categories = ['All', 'Fashion', 'Electronics', 'Food'];

  return (
    <div className="flex space-x-6 px-6 py-2 bg-green-200 text-sm">
      {categories.map((category, index) => (
        <span key={index} className="cursor-pointer hover:underline">
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryMenu;
