import React from 'react';

const HomeHero = () => {
  return (
    <section className="w-full max-w-[1630px] py-4 sm:py-6 md:py-8 lg:py-9 bg-[#50c878d0] mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-[100px] py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-tight lg:leading-normal font-bold text-[#2B2D2C] opacity-75">
            Grow Your Business.<br />Sell With Us
          </h1>
          <p className="text-[#2B2D2C] text-base sm:text-lg md:text-xl lg:text-[27px] opacity-75">
            Join thousands of sellers reaching millions of customers daily
          </p>
          <button className="bg-[#374646] bg-opacity-90 text-[#50C878] px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl text-sm sm:text-base">
            Register Now
          </button>
        </div>

        {/* Right Hero Image */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <img
            src="/hero-img.png"
            alt="Smiling Seller"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover opacity-70 rounded-lg lg:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;