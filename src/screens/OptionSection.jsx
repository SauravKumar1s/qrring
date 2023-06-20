import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import saftyImage from "../assets/img/safty.png";
import toptreeImage from "../assets/img/toptree.png";
import { HeaderTextOption } from "../components/atoms/head/HeaderText";
import { LoginButton } from "../components/atoms/Button/MyButton";
import arrow from "../assets/icon/arrow.svg";

const OptionSection = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const isContinueButtonDisabled = selectedImages.length === 0;
  const buttonBackgroundColor = selectedImages.length > 0 ? "#FF4444" : "gray";

  const handleContinueClick = () => {
    if (selectedImages.length === 2) {
      navigate("/create-card?true");
    } else {
      if (selectedImages.includes("safty")) {
        navigate("/create-card");
      } else if (selectedImages.includes("toptree")) {
        navigate("/create-taptree");
      }
    }
  };
  
  return (
    <div className="bg-black min-h-screen p-6 flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        <HeaderTextOption />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`cursor-pointer mt-8 mb-4 ${
              selectedImages.includes("safty") ? "glow-on-hover" : ""
            }`}
          >
            <img
              src={saftyImage}
              alt="safty"
              onClick={() => handleImageClick("safty")}
            />
          </div>
          <div
            className={`cursor-pointer ${
              selectedImages.includes("toptree") ? "glow-on-hover2" : ""
            }`}
          >
            <img
              src={toptreeImage}
              alt="toptree"
              onClick={() => handleImageClick("toptree")}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <LoginButton
          text="Continue"
          disabled={isContinueButtonDisabled}
          bg={buttonBackgroundColor}
          onClick={handleContinueClick}
          src={arrow}
        />
      </div>
    </div>
  );
};

export default OptionSection;
