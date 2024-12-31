import React, { useState } from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, () => null);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full p-4 bg-white shadow-md rounded-lg">
        {/* Header with Month and Year */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            &#8249; {/* Left Arrow */}
          </button>
          <h2 className="text-lg font-bold">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            &#8250; {/* Right Arrow */}
          </button>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700">
          {daysOfWeek.map((day) => (
            <div key={day} className="uppercase text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 mt-2">
          {emptyDays.map((_, index) => (
            <div key={index}></div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className="flex justify-center items-center p-4 bg-gray-100 rounded hover:bg-blue-300 cursor-pointer text-sm font-medium"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
