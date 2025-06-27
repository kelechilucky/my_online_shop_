import React, { useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-700 px-8 py-12" style={{ color: '#A8E6A8' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* MyOnlineShop Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ letterSpacing: '0.5px' }}>MyOnlineShop</h3>
            <p className="text-base leading-relaxed" style={{ letterSpacing: '0.3px' }}>
              MyOnlineShop is a shopping website where you can shop all your favourite goods at your comfort
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ letterSpacing: '0.5px' }}>About Us</h3>
            <ul className="space-y-2 text-base" style={{ letterSpacing: '0.3px' }}>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  MyOnlineShop Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  Terms & condition
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Method Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ letterSpacing: '0.5px' }}>Payment Method</h3>
            <ul className="space-y-2 text-base" style={{ letterSpacing: '0.3px' }}>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  MyOnlineShop Wallet
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  Coupon
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  Verve Card
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#A8E6A8' }} onMouseEnter={(e) => e.target.style.color = '#90D690'} onMouseLeave={(e) => e.target.style.color = '#A8E6A8'}>
                  MasterCard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ letterSpacing: '0.5px' }}>Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <Phone className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm" style={{ letterSpacing: '0.2px' }}>Call Support</p>
                  <p className="text-base font-medium" style={{ letterSpacing: '0.3px' }}>0807779999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm" style={{ letterSpacing: '0.2px' }}>WhatsApp</p>
                  <p className="text-base font-medium" style={{ letterSpacing: '0.3px' }}>+234900000000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2">
                  <Mail className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-base font-medium" style={{ letterSpacing: '0.3px' }}>MyOnlineShop@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Newsletter and Social Media Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Newsletter Subscription */}
          <div className="flex-1 max-w-md">
            <h3 className="text-2xl font-semibold mb-2" style={{ letterSpacing: '0.5px' }}>Subscribe to Newsletter</h3>
            <p className="text-base mb-4" style={{ letterSpacing: '0.3px' }}>Sign up if you want to get notification</p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none text-base"
                style={{ 
                  letterSpacing: '0.3px',
                  boxShadow: 'inset 0 0 0 2px #A8E6A8'
                }}
                onFocus={(e) => e.target.style.boxShadow = 'inset 0 0 0 2px #90D690'}
                onBlur={(e) => e.target.style.boxShadow = 'inset 0 0 0 2px #A8E6A8'}
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 rounded-r-lg font-medium text-gray-700 transition-colors text-base"
                style={{ 
                  backgroundColor: '#A8E6A8',
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#90D690'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#A8E6A8'}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col items-end space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" 
                 className="rounded-full p-3 transition-colors"
                 style={{ backgroundColor: '#A8E6A8' }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = '#90D690'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = '#A8E6A8'}>
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" 
                 className="rounded-full p-3 transition-colors"
                 style={{ backgroundColor: '#A8E6A8' }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = '#90D690'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = '#A8E6A8'}>
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" 
                 className="rounded-full p-3 transition-colors"
                 style={{ backgroundColor: '#A8E6A8' }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = '#90D690'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = '#A8E6A8'}>
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-base" style={{ letterSpacing: '0.3px' }}>
              Copy © MyOnlineShop All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;