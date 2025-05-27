import React from 'react';

const Tip = ({ children }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
      <div className="flex items-center">
        <svg
          className="h-6 w-6 text-blue-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-blue-700">{children}</div>
      </div>
    </div>
  );
};

export default Tip;
