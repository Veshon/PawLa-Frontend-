import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = false,
  rightImage = null,
  leftImage = null,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'border border-[#e6a033] rounded-[12px] text-[#e6a033] text-sm font-medium font-inter focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:border-transparent transition-colors duration-200';
  
  const containerClasses = `
    relative flex items-center
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');

  const inputClasses = `
    ${baseClasses}
    ${leftImage ? 'pl-12' : 'pl-3'}
    ${rightImage ? 'pr-12' : 'pr-3'}
    py-[18px]
    w-full
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
  `?.trim()?.replace(/\s+/g, ' ');

  return (
    <div className={containerClasses}>
      {leftImage && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={leftImage?.src} 
            alt="Left icon" 
            className={`w-[${leftImage?.width}px] h-[${leftImage?.height}px]`}
          />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {rightImage && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
          <img 
            src={rightImage?.src} 
            alt="Right icon" 
            className={`w-[${rightImage?.width}px] h-[${rightImage?.height}px]`}
          />
        </div>
      )}
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes?.string,
  value: PropTypes?.string,
  onChange: PropTypes?.func,
  type: PropTypes?.string,
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

export default EditText;