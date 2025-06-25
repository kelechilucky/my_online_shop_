import React from 'react';
import { FaUsers, FaWifi, FaCreditCard, FaStore, FaPercent } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaPercent className="text-3xl text-[#50C878]" />,
      title: "Low Commission Fees",
    },
    {
      icon: <MdSupportAgent className="text-3xl text-[#50C878]" />,
      title: "Dedicated Seller Support",
    },
    {
      icon: <FaWifi className="text-3xl text-[#50C878]" />,
      title: "Connect with other seller",
    },
    {
      icon: <FaCreditCard className="text-3xl text-[#50C878]" />,
      title: "Fast Payment",
    },
    {
      icon: <FaStore className="text-3xl text-[#50C878]" />,
      title: "Easy Store Setup in minute",
    },
    {
      icon: <BsChatDots className="text-3xl text-[#50C878]" />,
      title: "Easy Store Setup in minute",
    },
  ];

  return (
    <section className="w-full bg-[#DFF9E6] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#2B2D2C] mb-12 sm:mb-16 lg:mb-20 opacity-85">
          Benefict of selling on MyOnlineShop
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                {benefit.icon}
              </div>
              
              {/* Text */}
              <div className="flex-1 flex items-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#2B2D2C] opacity-80">
                  {benefit.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;