import React from "react";
import avatar from "../assets/img/profileAvatar.png";
import { HeaderText } from "../components/atoms/head/HeaderText";
import { ProfileLinkBox } from "../components/atoms/link/ProfileLinkBox";
import { GradientButtton, GradientButttonSlideLeft } from "../components/atoms/Button/MyButton";

const ProfileAllLink = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary bg-[#181818] h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
          <img
            src={avatar}
            alt="Avatar Image"
            className="w-12 h-12 object-cover"
          />
        </div>
        <div className="text-center">
          <HeaderText text="Krish Suri" />
          <p className="text-white text-xl font-bold p-6">
            Discover My Work amd see where you can find me ❤
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ProfileLinkBox text="Website" />
          <ProfileLinkBox text="portfolio" />
          <ProfileLinkBox text="Website" />
          <ProfileLinkBox text="Website" />
          <GradientButttonSlideLeft text="Slide for SAFTEY ASSISTANCE" />
        </div>
      </div>
    </div>
  )
};

export default ProfileAllLink;
