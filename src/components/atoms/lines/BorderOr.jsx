import React from "react";

const BorderOr = ({ text, textColor }) => {
  return (
    <div className="flex items-center justify-center text-center space-x-1">
      <div className="flex-grow border-b border-gray-300"></div>
      <p className="text-sm font-medium" style={{ color: textColor }}>
        {text}
      </p>
      <div className="flex-grow border-b border-gray-300"></div>
    </div>
  );
};

export default BorderOr;
