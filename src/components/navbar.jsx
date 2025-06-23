import React, { useState } from 'react';
import { HiUser, HiShoppingCart, HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { IoIosHelpCircle } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-[100px] h-[100px]">
        {/* Logo */}
        <div className="flex-1">
          <div className="text-[#2B2D2C] text-[22px] sm:text-[26px] lg:text-[30px] font-semibold">
            MyOnlineShop
          </div>
        </div>

       

        {/* Hamburger Button */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="h-8 w-8 text-[#2B2D2C]" /> : <HiMenu className="h-8 w-8 text-[#2B2D2C]" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 justify-between">
          {/* Search Bar (desktop only) */}
          <div className="flex items-center border rounded-lg overflow-hidden h-[60px] w-[800px]">
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

          {/* Account */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <HiUser className="h-6 w-6 text-[#2B2D2C]" />
            <span className="text-[20px] text-[#2B2D2C]">Account</span>
            <HiChevronDown className="h-5 w-5 text-[#2B2D2C]" />
          </div>

          {/* Help */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <IoIosHelpCircle className="h-6 w-6 text-[#2B2D2C]" />
            <span className="text-[20px] text-[#2B2D2C]">Help</span>
            <HiChevronDown className="h-5 w-5 text-[#2B2D2C]" />
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <HiShoppingCart className="h-6 w-6 text-[#2B2D2C]" />
            <span className="text-[20px] text-[#2B2D2C]">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 py-4 space-y-4 bg-green-50 border-t">
          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-lg overflow-hidden h-[45px]">
            <input
              type="text"
              placeholder="Search for product, brands and categories"
              className="px-3 py-2 w-full focus:outline-none text-sm"
            />
            <button className="bg-green-400 w-[50px] h-full flex items-center justify-center">
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

          {/* Account */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <HiUser className="h-5 w-5 text-[#2B2D2C]" />
            <span className="text-base text-[#2B2D2C]">Account</span>
            <HiChevronDown className="h-4 w-4 text-[#2B2D2C]" />
          </div>

          {/* Help */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <IoIosHelpCircle className="h-5 w-5 text-[#2B2D2C]" />
            <span className="text-base text-[#2B2D2C]">Help</span>
            <HiChevronDown className="h-4 w-4 text-[#2B2D2C]" />
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <HiShoppingCart className="h-5 w-5 text-[#2B2D2C]" />
            <span className="text-base text-[#2B2D2C]">Cart</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
