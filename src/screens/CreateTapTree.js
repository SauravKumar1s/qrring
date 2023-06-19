import React from "react";
import Input from "../components/atoms/Input/Input";
import { LoginButton } from "../components/atoms/Button/MyButton";
import { HeaderText } from "../components/atoms/head/HeaderText";
import camera from "../assets/icon/camera.png";
import BorderOr from "../components/atoms/lines/BorderOr";
import correct from "../assets/icon/correct.svg";

const CreateTapTree = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary bg-[#181818] ">
      <div className="bg-black text-end leading-8 py-20 pt-8 pr-3">
        <HeaderText text="Create TapTree" />
      </div>
      <div className="relative z-50 bottom-14 flex justify-start px-10  items-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
          <img
            src={camera}
            alt="Avatar Image"
            className="w-8 h-8 object-cover"
          />
        </div>
      </div>

      <div className="relative bottom-32  p-6 h-screen flex flex-col justify-end">
        <div className="flex justify-between flex-col gap-6 pt-24">
          <Input placeholder="name@flowbite.com" padding="4" />
          <BorderOr text="" textColor="#757575" />
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <Input placeholder="another@example.com" padding="2" />
            </div>
            <div>
              <img src={correct} alt="right" />
            </div>
          </div>

          <LoginButton text="Finish" />
        </div>
      </div>
    </div>
  );
};

export default CreateTapTree;
