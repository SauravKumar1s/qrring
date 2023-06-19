import React, { useRef } from 'react';

const OtpInput = ({ value, onChange, autoFocus, index, focusNext }) => {
  const inputRef = useRef(null);

  const handleInput = (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue.length === 1 && focusNext) {
      onChange(inputValue);
      focusNext(index);
    } else if (inputValue.length === 0 && focusNext) {
      onChange(inputValue);
      focusNext(index - 1);
    }
  };

  return (
    <div className="w-16 h-16">
      <input
        ref={inputRef}
        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
        type="text"
        value={value}
        onChange={handleInput}
        maxLength={1}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default OtpInput;
