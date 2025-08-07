import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CustomDatePicker() {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log('Selected Drop Off Date:', date);
    // For more detailed logging:
    console.log('Formatted Date:', date?.toLocaleDateString());
    console.log('ISO String:', date?.toISOString());
  };

  return (
    <div className="w-full lg:w-auto">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}  // Updated to use our custom handler
        customInput={
          <div className="border border-[#E6A033] flex items-center justify-between rounded-[12px] px-4 py-4 w-full lg:w-[140px] cursor-pointer">
            <span className="text-[14px] font-medium font-inter text-[#E6A033] ml-2">
              {startDate ? startDate.toLocaleDateString() : "Drop Off"}
            </span>
            <img
              src="/images/img_calendar_fill.svg"
              alt="calendar"
              className="w-[15px] h-[15px]"
            />
          </div>
        }
        showMonthYearDropdown
      />
    </div>
  );
}

export default CustomDatePicker;