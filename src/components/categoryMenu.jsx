import React from 'react';
import { FaTh } from 'react-icons/fa'; // grid icon
import { FiChevronDown } from 'react-icons/fi'; // dropdown icon

const CategoryMenu = () => {
  const categories = ['Fashion', 'Electronics', 'Food'];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-sm border-t border-green-100 gap-2 sm:gap-0">
      {/* All Categories Button */}
      <div className="flex items-center space-x-2 bg-[#42C87A] text-white px-4 py-2 sm:px-[80px] sm:py-[40px] rounded cursor-pointer">
        <FaTh className="text-white text-sm" />
        <span className="font-medium whitespace-nowrap">All Categories</span>
        <FiChevronDown className="text-white text-xs" />
      </div>

      {/* Other Categories */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center space-x-1 text-gray-800 font-medium cursor-pointer hover:underline"
          >
            <span>{category}</span>
            <FiChevronDown className="text-gray-800 text-xs" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
