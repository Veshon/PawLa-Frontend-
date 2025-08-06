import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  placeholder = 'Select option', 
  options = [],
  value = '', 
  onChange, 
  disabled = false,
  fullWidth = false,
  rightImage = null,
  leftImage = null,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    setSelectedValue(option?.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const baseClasses = 'border border-[#e6a033] rounded-[12px] text-[#e6a033] text-sm font-medium font-inter focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:border-transparent transition-colors duration-200 cursor-pointer';
  
  const containerClasses = `
    relative
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');

  const dropdownClasses = `
    ${baseClasses}
    ${leftImage ? 'pl-12' : 'pl-3'}
    ${rightImage ? 'pr-12' : 'pr-3'}
    py-[18px]
    w-full
    flex items-center justify-between
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}
  `?.trim()?.replace(/\s+/g, ' ');

  const selectedOption = options?.find(option => option?.value === selectedValue);
  const displayText = selectedOption ? selectedOption?.label : placeholder;

  return (
    <div className={containerClasses}>
      {leftImage && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20">
          <img 
            src={leftImage?.src} 
            alt="Left icon" 
            className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
          />
        </div>
      )}
      <div
        className={dropdownClasses}
        onClick={handleToggle}
        {...props}
      >
        <span className={selectedValue ? 'text-[#e6a033]' : 'text-gray-400'}>
          {displayText}
        </span>
        
        <div className="flex items-center">
          {rightImage && (
            <img 
              src={rightImage?.src} 
              alt="Dropdown icon" 
              className={`w-[${rightImage?.width}px] h-[${rightImage?.height}px] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </div>
      </div>
      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e6a033] rounded-[12px] shadow-lg z-30 max-h-60 overflow-y-auto">
          {options?.length > 0 ? (
            options?.map((option, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer text-[#e6a033] text-sm font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => handleSelect(option)}
              >
                {option?.label}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-400 text-sm">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes?.string,
  options: PropTypes?.arrayOf(
    PropTypes?.shape({
      label: PropTypes?.string?.isRequired,
      value: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number])?.isRequired,
    })
  ),
  value: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number]),
  onChange: PropTypes?.func,
  disabled: PropTypes?.bool,
  fullWidth: PropTypes?.bool,
  rightImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number?.isRequired,
    height: PropTypes?.number?.isRequired,
  }),
  leftImage: PropTypes?.shape({
    src: PropTypes?.string?.isRequired,
    width: PropTypes?.number?.isRequired,
    height: PropTypes?.number?.isRequired,
  }),
  className: PropTypes?.string,
};

export default Dropdown;