import React from 'react';
import { HiUser, HiShoppingCart, HiChevronDown } from 'react-icons/hi';
import { IoIosHelpCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[100px] px-[100px] bg-green-100">
      {/* Logo */}
      <div className="text-[#2B2D2C] w-[230px] h-[44px] text-[30px] font-semibold mr-2">
        MyOnlineShop
      </div>

      {/* Search Bar */}
      <div className="flex items-center border rounded-lg overflow-hidden h-[60px] w-[60%] mr-[70px]">
        <input
          type="text"
          placeholder="Search for product, brands and categories"
          className="px-4 py-4 w-full focus:outline-none"
        />
        <button className="bg-green-400 w-[80px] p-2 h-[60px] flex items-center justify-center">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </button>
      </div>

      {/* Account / Help / Cart */}
      <div className="flex items-center space-x-6">
        {/* Account */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <HiUser className="h-6 w-6 text-[#2B2D2C]" />
          <span className="text-[20px] text-[#2B2D2C]">Account</span>
          <HiChevronDown className="h-5 w-5 text-[#2B2D2C] font-bold" />
        </div>

        {/* Help */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <IoIosHelpCircle className="h-6 w-6 text-[#2B2D2C]" />
          <span className="text-[20px] text-[#2B2D2C]">Help</span>
          <HiChevronDown className="h-5 w-5 text-[#2B2D2C] font-bold" />
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <HiShoppingCart className="h-6 w-6 text-[#2B2D2C]" />
          <span className="text-[20px] text-[#2B2D2C]">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
