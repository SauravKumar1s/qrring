import React, { useRef, useState, useEffect } from "react";

import GoogleIcon from "../icons/GoogleIcon";

export const MyButton = ({ onClick, text, src, alt }) => {
  return (
    <div >
      
      <button
        className="flex flex-row items-center text-xl bg-[#FF4444] justify-center text-center w-full border rounded-xl outline-none py-5 border-none text-white shadow-sm gap-2"
        onClick={onClick}
      >
      <img src={src} alt={alt} />    {text}
      </button>
    
    </div>
  );
};

export const LoginButton = ({ onClick, text, src, alt, bg , onclose }) => {
  return (
    <button
      className="flex flex-row items-center text-xl justify-center text-center w-full border rounded-xl outline-none py-5 border-none text-white shadow-sm gap-2"
      style={{ backgroundColor: bg, borderRadius: "44px" }}
      onClick={onClick}
      onClose={onclose}
    >
      {text} <img src={src} alt={alt} />
    </button>
  );
};


export const GoogleButton = ({ onClick, text }) => {
  return (
    <div className="flex items-center justify-center  w-full">
      <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <GoogleIcon />
        <span className="text-center">Continue with Google</span>
      </button>
    </div>
  );
};

export const GradientButtton = ({ text , onClick }) => {
  return (
    <div>
      <button className=" bg-gradient-to-r from-purple-700 via-purple-500 to-red-500 bg-opacity-55 hover:bg-opacity-75 text-white font-bold py-4 px-24 rounded-full" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export const GradientButttonSlideLeft = ({ text }) => {
  return (
    <div>
      <button className="flex justify-center items-center bg-gradient-to-r from-purple-700 via-purple-500 to-red-500 bg-opacity-55 hover:bg-opacity-75 text-white font-bold w-80 h-16 rounded-full">
        {text}
      </button>
    </div>
  );
};

export const GradientButtonSlideLeft = ({ text, onFailure }) => {
  const slider = useRef(null);
  const container = useRef(null);
  const isTouchDevice = "ontouchstart" in document.documentElement;
  const [unlocked, setUnlocked] = useState(false);
  let sliderLeft = 0;
  let containerWidth = 0;
  let isDragging = false;
  let startX = 0;

  useEffect(() => {
    if (isTouchDevice) {
      document.addEventListener("touchmove", onDrag);
      document.addEventListener("touchend", stopDrag);
    } else {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
    }
    containerWidth = container.current.clientWidth - 50;
    return () => {
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", stopDrag);
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  const onDrag = (e) => {
    if (unlocked) return;
    if (isDragging) {
      if (isTouchDevice) {
        sliderLeft = Math.min(
          Math.max(0, e.touches[0].clientX - startX),
          containerWidth
        );
      } else {
        sliderLeft = Math.min(Math.max(0, e.clientX - startX), containerWidth);
      }
      updateSliderStyle();
    }
  };

  const updateSliderStyle = () => {
    if (unlocked) return;
    slider.current.style.left = `${sliderLeft + 50}px`;
  };

  const stopDrag = () => {
    if (unlocked) return;
    if (isDragging) {
      isDragging = false;
      if (sliderLeft > containerWidth * 0.9) {
        sliderLeft = containerWidth;
        if (onSuccess) {
          onSuccess();
        }
      } else {
        sliderLeft = 0;
        if (onFailure) {
          onFailure();
        }
      }
      updateSliderStyle();
    }
  };

  const startDrag = (e) => {
    if (unlocked) return;
    isDragging = true;
    if (isTouchDevice) {
      startX = e.touches[0].clientX;
    } else {
      startX = e.clientX;
    }
  };

  const onSuccess = () => {
    container.current.style.width = `${container.current.clientWidth}px`;
    setUnlocked(true);
  
    window.location.href = "/your-route-path";
  };

  const getText = () => {
    return unlocked ? "UNLOCKED" : text || "SLIDE";
  };

  const reset = () => {
    setUnlocked(false);
    sliderLeft = 0;
    updateSliderStyle();
  };

  return (
    <div className="ReactSwipeButton">
      <div
        className={`rsbContainer ${unlocked ? "rsbContainerUnlocked" : ""}`}
        ref={container}
      >
        <div
          className="rsbcSlider"
          ref={slider}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <span className="rsbcSliderText">{getText()}</span>
          <span className="rsbcSliderArrow"></span>
          <span className="rsbcSliderCircle"></span>
        </div>
        <div className="rsbcText">{getText()}</div>
      </div>
    </div>
  );
};
