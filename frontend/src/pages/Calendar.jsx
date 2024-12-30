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
    <div className="flex justify-end">
      <div className="max-w-xs mr-60 p-3 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={handlePrevMonth}
            className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
          </button>
          <h2 className="text-lg font-bold">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center font-medium text-gray-600 text-sm">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mt-1">
          {emptyDays.map((_, index) => (
            <div key={index}></div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className="p-1 text-center bg-gray-100 rounded hover:bg-blue-200 text-sm"
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