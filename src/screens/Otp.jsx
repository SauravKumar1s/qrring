import React, { useState, useRef } from "react";
import OtpIcon from "../assets/icon/otpIcon.svg";
import OtpIcon2 from "../assets/icon/otpicon2.svg"
import { MyButton } from "../components/atoms/Button/MyButton";
import { HeaderText } from "../components/atoms/head/HeaderText";
import {useNavigate} from "react-router-dom"

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleVerifyAccount = (e) => {
    e.preventDefault();
    if (otp.length === 4 && otp.every((digit) => digit !== "")) {
      console.log("OTP:", otp);
    } else {
      console.log("Invalid OTP");
    }
  };

  const handleOtpChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12 bg-black">
      <div className="relative  px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <img src={OtpIcon} alt="icon" />
            <HeaderText text="Enter the OTP" />
            <div className="flex flex-row text-xl font-medium text-[#FFFFFF] leading-7  ">
              <p>
                We have sent you the OTP <br /> on <br />
                <span className="text-[#FD2B6C]">jasonsingh93@gmail.com</span>
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleVerifyAccount}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((digit, index) => (
                    <div key={index} className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-[32px] text-white bg-black font-bold  focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                 
                    <MyButton
                      type="submit"
                      text={
                        otp.every((digit) => digit !== "")
                          ? "Verify"
                          : "The OTP code is invalid."
                      }
                      disabled={
                        otp.length !== 4 || otp.some((digit) => digit === "")
                      }
                      onClick={()=>navigate("/option-section")}
                      src={OtpIcon2}
                      
                    />
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive the code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
