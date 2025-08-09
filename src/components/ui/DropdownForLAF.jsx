import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select option',
  disabled = false,
  className = '',
  rightIcon = null,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange && onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative w-full ${className}`} {...props}>
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          w-full flex justify-between items-center gap-[16px]
          px-3 py-2 sm:px-4 sm:py-3
          text-sm sm:text-base font-medium
          border border-global-5 rounded-[12px]
          bg-global-6 text-global-6
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-global-5
          transition-colors duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span className="text-left truncate">
          {value || placeholder}
        </span>
        {rightIcon ? (
          <img 
            src={rightIcon?.src} 
            className={`w-[${rightIcon?.width}px] h-[${rightIcon?.height}px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            alt="dropdown arrow" 
          />
        ) : (
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-global-6 border border-gray-200 rounded-[12px] shadow-lg z-50 max-h-60 overflow-auto">
          {options?.length > 0 ? (
            options?.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-left text-sm sm:text-base hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-200"
              >
                {option}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 sm:px-4 sm:py-3 text-sm text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes?.array,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  placeholder: PropTypes?.string,
  disabled: PropTypes?.bool,
  className: PropTypes?.string,
  rightIcon: PropTypes?.shape({
    src: PropTypes?.string,
    width: PropTypes?.number,
    height: PropTypes?.number,
  }),
};

export default Dropdown;