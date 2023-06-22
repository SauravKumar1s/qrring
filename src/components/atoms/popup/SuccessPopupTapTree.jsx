import React, { useState } from "react";
import Right from "../icons/Right";
import { LoginButton } from "../Button/MyButton";
import { HeaderText } from "../head/HeaderText";
import { useNavigate } from "react-router-dom";

const SuccessPopupTapTree = ({ onClose }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className=" flex flex-col  justify-center h-screen">
      <div className="bg-white p-6">
        <div className="text-center">
          <HeaderText color="green" text="successfully created" />
          <Right />
          <p className="text-gray-600 my-9 text-xl">Do you Create Safety Assistance ?</p>
          <div className="flex justify-center items-center ">
            <div className="flex gap-4">
              <button
                className=" bg-[#FF4444] text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/create-card")}
              >
                Yes
              </button>
              <button
                className=" bg-[#FF4444] text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/scan-ring")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessPopupTapTree;
