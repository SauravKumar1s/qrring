import React from "react";

export const HeaderText = ({ text , color}) => {
  return (
    <div className="font-semibold text-3xl">
      <p style={{color:color}} className="text-white ">{text}</p>
    </div>
  );
};

export const HeaderTextOption = () => {
  return (
    <div className="font-semibold text-3xl text-center ">
      <p className="text-white leading-10 ">
        Choose your <br /> preferred <br /> option
      </p>
    </div>
  );
};

export const HeaderTextCreateCardAndTapTree = ({ text , color}) => {
  return (
    <div className="font-semibold text-2xl">
      <p style={{color:color}} className="text-white ">{text}</p>
    </div>
  );
};