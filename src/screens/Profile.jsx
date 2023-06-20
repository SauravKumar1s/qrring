import React from "react";
import backgroundImage from "../assets/img/Union.svg";
import backgroundImage2 from "../assets/img/bg2.svg";
import pencil from "../assets/icon/pancil.svg";
import location from "../assets/icon/location.svg";
import phone from "../assets/icon/phone.svg";
import {
  GradientButtonSlideLeft,
  GradientButtton,
} from "../components/atoms/Button/MyButton";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleFinishClick = () => {
    navigate("/profile-all-link");
  };
  return (
    <>
      <div className="bg-[#191919] min-h-screen flex flex-col items-center justify-start ">
        <div
          className="absolute flex flex-col h-[380px] bg-no-repeat w-[340px] mt-12"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex items-center space-x-4 p-4">
            <img
              className="w-10 h-10 rounded-full"
              src={backgroundImage}
              alt=""
            />
            <div className="font-bold text-white">
              <div>Krish Suri</div>
              <div className="text-xs text-white">male</div>
            </div>
          </div>

          <div
            className="flex flex-col shadow-md rounded-xl sm:w-[330px] w-[320px] m-auto z-50 "
            style={{
              backgroundImage: `url(${backgroundImage2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="space-y-4 flex flex-col justify-center p text-white p-6 pb-6 text-start  divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-base font-semibold sm:text-2xl text-[#C9C9C9]">
                  Blood group
                </h2>
                <p className="text-xl font-bold sm:text-base dark:text-gray-400">
                  AB+
                </p>
              </div>
              <div className="my-2 space-y-1">
                <h2 className="text-base font-semibold sm:text-2xl text-[#C9C9C9]">
                  Existing Medical Condition
                </h2>
                <p className="text-xl font-bold sm:text-base dark:text-gray-400">
                  Gluten, Peanuts
                </p>
              </div>

              <div className="my-2 space-y-1">
                <h2 className="text-base font-semibold sm:text-2xl text-[#C9C9C9]">
                  Address
                </h2>
                <p className="text-xl  text-center font-bold sm:text-base dark:text-gray-400 w-[203px]">
                  H-40, New govind pura, Street no. 40, 3 rd Floor
                </p>
              </div>

              <div className="flex justify-between pt-2 space-x-4 align-center">
                <a
                  href="#"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div>
                      <img src={phone} alt="phone" />
                    </div>
                    <div>
                      <h2 className="text-xs font-semibold text-[#C9C9C9]">
                        Address
                      </h2>
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div>
                      <img src={location} alt="phone" />
                    </div>
                    <div>
                      <h2 className="text-xs font-semibold text-[#C9C9C9]">
                        location
                      </h2>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div>
                      <img src={pencil} alt="phone" />
                    </div>
                    <div>
                      <h2 className="text-xs font-semibold  text-[#C9C9C9]">
                        pencil
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[580px]">
          <GradientButtton
            text="Slide for TapTree"
            onClick={handleFinishClick}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
