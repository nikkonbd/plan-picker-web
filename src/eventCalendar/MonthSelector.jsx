import React from 'react';

const MonthSelector = ({ selectedMonth, onSelect }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="absolute top-0 left-0 p-4 bg-white border border-gray-300 month-selector">
      <div className="mb-2 text-lg font-semibold">Select a Month</div>
      <ul>
        {months.map((month, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              index === selectedMonth ? 'font-bold' : ''
            }`}
            onClick={() => onSelect(index)}
          >
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthSelector;