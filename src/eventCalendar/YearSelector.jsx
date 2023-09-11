import React, { useState } from 'react';

const YearSelector = ({ selectedYear, onSelect }) => {
  const years = [];
  const currentYear = new Date().getFullYear();

  // Generate a list of years from the current year to 10 years in the past
  for (let year = currentYear; year >= currentYear - 10; year--) {
    years.push(year);
  }

  return (
    <div className="absolute top-0 left-0 p-4 bg-white border border-gray-300 year-selector">
      <div className="mb-2 text-lg font-semibold">Select a Year</div>
      <ul>
        {years.map((year) => (
          <li
            key={year}
            className={`cursor-pointer ${
              year === selectedYear ? 'font-bold' : ''
            }`}
            onClick={() => onSelect(year)}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearSelector;