import React, { useState, useEffect } from 'react';

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-[1630px] py-4 sm:py-6 md:py-8 lg:py-9 bg-[#50c878d0] mx-auto px-4 sm:px-6 lg:px-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-[100px] py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 text-center lg:text-left">
          
          {/* Main Heading with slide-in from left */}
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-tight lg:leading-normal font-bold text-[#2B2D2C] opacity-75 transform transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'translate-x-0 opacity-75' 
              : '-translate-x-16 opacity-0'
          }`}>
            Grow Your Business.<br />Sell With Us
          </h1>
          
          {/* Subtitle with slide-in from left (delayed) */}
          <p className={`text-[#2B2D2C] text-base sm:text-lg md:text-xl lg:text-[27px] opacity-75 transform transition-all duration-1000 ease-out delay-300 ${
            isLoaded 
              ? 'translate-x-0 opacity-75' 
              : '-translate-x-12 opacity-0'
          }`}>
            Join thousands of sellers reaching millions of customers daily
          </p>
          
          {/* Button with slide-in from bottom */}
          <button className={`bg-[#374646] bg-opacity-90 text-[#50C878] px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl text-sm sm:text-base transform transition-all duration-800 ease-out delay-600 hover:scale-105 hover:shadow-lg ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            Register Now
          </button>
        </div>

        {/* Right Hero Image */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          
          {/* Image with slide-in from right and subtle scale */}
          <img
            src="/hero-img.png"
            alt="Smiling Seller"
            className={`w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover opacity-70 rounded-lg lg:rounded-none transform transition-all duration-1200 ease-out delay-200 hover:opacity-80 ${
              isLoaded 
                ? 'translate-x-0 opacity-70 scale-100' 
                : 'translate-x-12 opacity-0 scale-95'
            }`}
          />
          
          {/* Decorative floating element */}
          <div className={`absolute -top-2 -right-2 w-6 h-6 bg-[#50C878] rounded-full transform transition-all duration-1000 ease-out delay-1000 ${
            isLoaded 
              ? 'translate-y-0 opacity-60 scale-100' 
              : '-translate-y-4 opacity-0 scale-0'
          }`}></div>
          
          {/* Another decorative element */}
          <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-[#374646] rounded-full transform transition-all duration-1000 ease-out delay-1200 ${
            isLoaded 
              ? 'translate-y-0 opacity-40 scale-100' 
              : 'translate-y-4 opacity-0 scale-0'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;