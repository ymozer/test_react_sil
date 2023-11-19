import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    alert(`You selected ${date}`);
  };

  return (
    <div className="bg-gray-500 p-6">
      <DatePicker
        className="w-full min-w-full h-12 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-base font-medium text-black hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        timeFormat="HH:mm"
        dateFormat="d MMMM yyyy h:mm"
      />
      <br />
      <div>
        <p className="flex items-center justify-center text-center text-white">
          Selected date: {selectedDate.toString()}
        </p>
      </div>
    </div>
  );
}
export default DateTimePicker;
