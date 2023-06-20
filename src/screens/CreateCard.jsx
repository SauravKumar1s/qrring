import React, { useState } from "react";
import camera from "../assets/icon/camera.png";
import men from "../assets/img/men.png";
import { LoginButton } from "../components/atoms/Button/MyButton";
import { HeaderText } from "../components/atoms/head/HeaderText";
import Input from "../components/atoms/Input/Input";
import BorderOr from "../components/atoms/lines/BorderOr";
import right from "../assets/icon/right.svg";
import arrow from "../assets/icon/arrow.svg";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../components/atoms/popup/SuccessPopup";

const CreateCard = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsFormValid(value !== "");
  };
  // const handleFinishClick = () => {
  //   if (isFormValid) {
  //     if (location.search) {
  //       navigate("/create-taptree");
  //     } else {
  //       navigate("/profile");
  //     }
  //     setShowPopup(true); // Show the popup
  //   }
  // };
  

  const handleFinishClick = () => {
    if (isFormValid) {
      if (location.search) {
        navigate("/create-taptree");
      } else {
        navigate("/success-safty");
      }
      setShowPopup(true); // Show the popup
    }
  };
  
  

  return (
    <>
      <div className="">
        <div className="bg-black p-6 leading-8 py-20 pt-10">
          <HeaderText text="Create Card" />
          <p className="text-white text-sm">Personalize Your Perfect Card</p>
        </div>
        <div className="relative z-50 bottom-24 flex justify-around items-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
            <img
              src={camera}
              alt="Avatar Image"
              className="w-8 h-8 object-cover"
            />
          </div>

          <div className="flex items-center mb-8">
            <img
              src={men}
              alt="Avatar Image"
              className="w-28 h-full object-cover "
            />
          </div>
        </div>

        <div className="bg-white relative bottom-32 min-h-screen p-6 h-screen flex  flex-col gap-8">
          {/* male female option  */}

          <div className="flex justify-end space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedOption === "option1"}
                onChange={() => handleOptionSelect("option1")}
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer ${
                  selectedOption === "option1" ? "bg-green-500" : ""
                }`}
              >
                {selectedOption === "option1" && <img src={right} alt="" />}
              </div>
              <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedOption === "option2"}
                onChange={() => handleOptionSelect("option2")}
              />
              <div
                className={`w-6 h-6 rounded-full border-2 text-sm border-gray-400 flex items-center justify-center cursor-pointer ${
                  selectedOption === "option2" ? "bg-green-500" : ""
                }`}
              >
                {selectedOption === "option2" && <img src={right} alt="" />}
              </div>
              <span>Female</span>
            </label>
          </div>

          <Input
            placeholder="Name"
            padding="4"
            value={email}
            onChange={handleEmailChange}
          />

          <BorderOr text="Optional" textColor="#757575" />
          <Input placeholder="Blood group" padding="4" />
          <Input placeholder="Any medical conditions" padding="4" />
          <Input placeholder="Home address" padding="4" />
          <Input placeholder="emergency mobile no" padding="4" />
          <Input placeholder="web link" padding="4" />
          <LoginButton
            text="Finish"
            bg={isFormValid ? "#FF4444" : "gray"}
            src={arrow}
            disabled={!isFormValid}
            onClick={handleFinishClick}
          />
        </div>
        {showPopup && <SuccessPopup onClose={() => setShowPopup(false)}/>}
      </div>
    </>
  );
};

export default CreateCard;
