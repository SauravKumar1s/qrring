import React from "react";
import Right from "../icons/Right";
import { LoginButton } from "../Button/MyButton";
import { HeaderText } from "../head/HeaderText";

const SuccessPopup = ({ onClose }) => {
  return (
    // <!-- component -->
    <div className=" flex flex-col  justify-center h-screen">
      <div className="bg-white p-6">
        <Right />
        <div className="text-center">
          <HeaderText color="green"  text="successfully created"/>
          <p className="text-gray-600 my-9">
            Thank you for lorem5 lorem5 lorem5 lorem5

          </p>
          <LoginButton bg="#FF4444" text="hello" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
