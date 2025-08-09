import React from 'react';
import PropTypes from 'prop-types';

const SeekBar = ({ 
  value = 0, 
  min = 0, 
  max = 100, 
  step = 1,
  onChange,
  disabled = false,
  className = '',
  showValue = false,
  ...props 
}) => {
  const handleChange = (e) => {
    const newValue = parseFloat(e?.target?.value);
    onChange && onChange(newValue);
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`
            w-full h-[10px] rounded-[1px] appearance-none cursor-pointer
            bg-seekbar-1
            focus:outline-none focus:ring-2 focus:ring-global-5 focus:ring-opacity-50
            disabled:opacity-50 disabled:cursor-not-allowed
            slider-thumb:appearance-none slider-thumb:w-4 slider-thumb:h-4 
            slider-thumb:rounded-full slider-thumb:bg-global-5 
            slider-thumb:cursor-pointer slider-thumb:border-0
            slider-thumb:shadow-md slider-thumb:transition-all
            slider-thumb:hover:scale-110
          `}
          style={{
            background: `linear-gradient(to right, #e6a033 0%, #e6a033 ${((value - min) / (max - min)) * 100}%, #d9d9d9 ${((value - min) / (max - min)) * 100}%, #d9d9d9 100%)`
          }}
        />
        
        {showValue && (
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{min}</span>
            <span className="font-medium text-global-5">{value}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    </div>
  );
};

SeekBar.propTypes = {
  value: PropTypes?.number,
  min: PropTypes?.number,
  max: PropTypes?.number,
  step: PropTypes?.number,
  onChange: PropTypes?.func,
  disabled: PropTypes?.bool,
  className: PropTypes?.string,
  showValue: PropTypes?.bool,
};

export default SeekBar;