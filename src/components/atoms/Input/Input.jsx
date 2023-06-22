import React from "react";

export const Input = ({ placeholder, padding, value, onChange, error, src, alt }) => {
  const inputStyles = `p-${padding} border bg-[#E6E6E6] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full text-center`;

  return (
    <div>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-6 h-6 absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-200 p-[2px] rounded-lg"
        />
        <input
          type="email"
          id="email"
          className={inputStyles}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};




export const Input2 = ({ placeholder, padding, value, onChange,  }) => {
  const inputStyles = `p-[10px] border bg-[#E6E6E6] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 w-full`;

  return (
    <input
          type="email"
          id="email"
          className={inputStyles}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
  )
}

