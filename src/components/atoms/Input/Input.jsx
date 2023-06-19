import React from "react";

const Input = ({ placeholder, padding, value, onChange, error }) => {
  const inputStyles = `p-${padding} border bg-[#E6E6E6] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark`;

  return (
    <div>
      <input
        type="email"
        id="email"
        className={inputStyles}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

