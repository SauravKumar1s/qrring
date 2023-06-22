import React, { useState } from "react";

import { LoginButton } from "../components/atoms/Button/MyButton";
import {
  HeaderText,
  HeaderTextCreateCardAndTapTree,
} from "../components/atoms/head/HeaderText";
import camera from "../assets/icon/camera.png";
import BorderOr from "../components/atoms/lines/BorderOr";
import correct from "../assets/icon/correct.svg";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/icon/arrow.svg";
import insta from "../assets/icon/insta.svg";
import facebook from "../assets/icon/facebook.svg";
import twitter from "../assets/icon/twitter.svg";
import pin from "../assets/icon/pinterest.svg";
import portfolio from "../assets/icon/portfolio.png";
import snap from "../assets/icon/snapchat.svg";
import name from "../assets/icon/name.png";
import right from "../assets/icon/right.svg";
import { Input } from "../components/atoms/Input/Input";

const CreateTapTree = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [inputValues, setInputValues] = useState({
    insta: "",
    facebook: "",
    snap: "",
    twitter: "",
    pin: "",
    portfolio: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsFormValid(value !== "");
  };

  const handleCorrectChange = (e, inputName) => {
    const value = e.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  const handleFinishClick = () => {
    if (isFormValid) {
      if (location.search) {
        navigate("/success?true");
      } else {
        navigate("/success-taptree?true");
      }
    }
  };
  return (
    <div className=" bg-[#181818]  ">
      <div className="bg-[#181818]   text-end leading-8 py-16 pt-4 pr-3">
        <HeaderTextCreateCardAndTapTree text="Create TapTree" />
      </div>
      <div className="relative z-50 bottom-14 flex justify-start px-10  items-center">
        <div className=" relative bottom-6 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
          <img
            src={camera}
            alt="Avatar Image"
            className="w-8 h-8 object-cover "
          />
        </div>
      </div>

      <div className=" bg-gradient-to-r from-primary to-secondary relative  bottom-32 rounded-t-[40px] p-6 h-screen flex flex-col ">
        <div className="flex justify-between flex-col gap-4 mt-10">
          <Input
            placeholder="Enter The Name"
            padding="4"
            onChange={handleChange}
            src={name}
          />
          <BorderOr text="Choose only 4 option" textColor="white" />

          {/* insta */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={insta}
                onChange={(e) => handleCorrectChange(e, "insta")}
              />
            </div>
            <div>
              {inputValues.insta ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>
          {/* facebook */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={facebook}
                onChange={(e) => handleCorrectChange(e, "facebook")}
              />
            </div>
            <div>
              {inputValues.facebook ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>

          {/* snap */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={snap}
                onChange={(e) => handleCorrectChange(e, "snap")}
              />
            </div>
            <div>
              {inputValues.snap ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>

          {/* twitter */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={twitter}
                onChange={(e) => handleCorrectChange(e, "twitter")}
              />
            </div>
            <div>
              {inputValues.twitter ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>

          {/* pins */}

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={pin}
                onChange={(e) => handleCorrectChange(e, "pin")}
              />
            </div>
            <div>
              {inputValues.pin ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>
          {/* portfolio */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input
                placeholder="Enter the link"
                padding="2"
                src={portfolio}
                onChange={(e) => handleCorrectChange(e, "portfolio")}
              />
            </div>
            <div>
              {inputValues.portfolio ? (
                <img
                  src={right}
                  className="w-6 bg-green-500 rounded-full"
                  alt="right"
                />
              ) : (
                <img src={correct} alt="right" />
              )}
            </div>
          </div>

          <LoginButton
            text="Finish"
            bg={isFormValid ? "#FF4444" : "gray"}
            src={arrow}
            disabled={!isFormValid}
            onClick={handleFinishClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTapTree;
