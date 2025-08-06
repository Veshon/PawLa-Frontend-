import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Footer from '@/components/common/Footer.jsx';

function CustomDatePicker() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="w-full lg:w-auto">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={
          <div className="border border-[#E6A033] flex items-center justify-between rounded-[12px] px-4 py-4 w-full lg:w-[140px] cursor-pointer">
            <span className="text-[14px] font-medium font-inter text-[#E6A033] ml-2">
                {startDate ? startDate.toLocaleDateString() : "Pick Up"}
            </span>
            <img
              src="/images/img_calendar_fill.svg"
              alt="calendar"
              className="w-[15px] h-[15px]"
            />
          </div>
        }
       showMonthYearDropdown/>
    </div>
  );
}

export default CustomDatePicker;