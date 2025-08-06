import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Services', href: '/services' },
    { label: 'Adopt & Buy', href: '/adopt-buy' },
    { label: 'Lost & Found', href: '/lost-found' },
    { label: 'Pet Store', href: '/pet-store' },
    { label: 'BLOG', href: '/blog' },
    { label: 'Work As', href: '/work-as' }
  ];

  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_#00000007]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="relative w-[18px] h-[40px]">
              <img 
                src="/images/img_subtract.svg" 
                alt="PawLa Logo" 
                className="w-[18px] h-[40px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] font-dynapuff font-normal leading-[24px] text-black">
                <span className="font-dynapuff">Paw</span>
                <span className="font-dynalight"> | La</span>
              </h1>
              <p className="text-[12px] font-dosis font-normal leading-[16px] text-black">
                The Paw Mate
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-sm font-poppins transition-colors duration-200 hover:text-[#e6a033] ${
                  item?.active 
                    ? 'text-[#e6a033] font-semibold text-[18px] leading-[27px]' 
                    : 'text-black font-normal text-[14px] leading-[21px]'
                }`}
                role="menuitem"
              >
                {item?.label}
              </a>
            ))}
          </nav>

          {/* Sign In Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              className="bg-[#e6a033] text-white text-[14px] font-poppins font-semibold leading-[21px] px-[26px] py-[8px] rounded-[20px] hover:bg-[#d4941f] transition-colors duration-200"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4`}>
          <div className="flex flex-col space-y-3">
            {menuItems?.map((item, index) => (
              <a
                key={index}
                href={item?.href}
                className={`text-sm font-poppins transition-colors duration-200 hover:text-[#e6a033] px-2 py-1 ${
                  item?.active 
                    ? 'text-[#e6a033] font-semibold' 
                    : 'text-black font-normal'
                }`}
                role="menuitem"
              >
                {item?.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                fullWidth
                className="bg-[#e6a033] text-white text-[14px] font-poppins font-semibold px-[26px] py-[8px] rounded-[20px]"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;