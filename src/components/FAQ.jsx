import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const faqData = [
    {
      question: "What do I need to create a shop?",
      answer: "To create a shop on MyOnlineShop, you need a valid email address, business information, and identification documents. The process is simple and takes just a few minutes to complete your registration."
    },
    {
      question: "Do I need a debit or credit card to create a shop?",
      answer: "No, you don't need a debit or credit card to create your shop. Registration is completely free. You'll only need payment information when you're ready to start selling and processing customer payments."
    },
    {
      question: "What are the documents needed to create an account on MyOnlineShop?",
      answer: "You'll need a government-issued ID (driver's license, passport, or national ID), business registration documents (if applicable), and bank account information for payment processing. All documents should be clear and up-to-date."
    },
    {
      question: "How does it work on MyOnlineShop?",
      answer: "Discover trend-forward pieces, timeless staples, and effortless styles all in one place. Whether you're elevating your everyday wardrobe or shopping for something special, we've got looks you'll love."
    },
    {
      question: "What brand is MyOnlineShop Partner with?",
      answer: "MyOnlineShop partners with thousands of trusted brands across various categories including fashion, electronics, home goods, and more. We work with both established international brands and emerging local businesses to offer diverse products."
    }
  ];

  return (
    <section className="w-full bg-[#E8F5E8] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2D2C] mb-4">
            Frequently Asked<br />Question
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#2B2D2C] opacity-75">
            Here are some frequently asked question about selling on MyOnlineshop
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Questions Section */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2B2D2C] mb-6">
              Frequently Asked questions
            </h3>
            <div className="bg-white rounded-lg border-2 border-gray-400 overflow-hidden h-[500px] flex flex-col">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b-2 border-gray-400 last:border-b-0 transition-all duration-300 ease-in-out flex-1 ${
                    selectedQuestion === index 
                      ? 'bg-gray-50 shadow-inner transform scale-[1.02]' 
                      : 'bg-white hover:bg-gray-25'
                  }`}
                >
                  <button
                    onClick={() => setSelectedQuestion(index)}
                    className="w-full h-full text-left p-4 sm:p-6 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:bg-gray-50 group flex items-center"
                  >
                    <div className="flex items-center justify-between w-full">
                      <p className={`text-lg sm:text-xl lg:text-2xl font-medium transition-all duration-200 ${
                        selectedQuestion === index 
                          ? 'text-[#2B2D2C] transform translate-x-2' 
                          : 'text-[#2B2D2C] group-hover:translate-x-1'
                      }`}>
                        {faq.question}
                      </p>
                      <div className={`ml-4 transition-transform duration-300 ${
                        selectedQuestion === index ? 'rotate-90' : 'rotate-0'
                      }`}>
                        <svg 
                          className="w-5 h-5 text-[#2B2D2C]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2B2D2C] mb-6 text-center">
              Answers
            </h3>
            <div className="bg-[#A8E6A8] rounded-lg p-6 sm:p-8 flex items-start relative overflow-hidden h-[500px]">
              <div 
                key={selectedQuestion}
                className="text-xl sm:text-2xl lg:text-2xl text-[#2B2D2C] leading-loose w-full"
                style={{
                  animation: 'fadeInUp 0.5s ease-out forwards'
                }}
              >
                {faqData[selectedQuestion].answer}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;