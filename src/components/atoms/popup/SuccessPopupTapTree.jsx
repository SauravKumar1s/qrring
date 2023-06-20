import React from 'react'
import { LoginButton } from '../Button/MyButton'
import Right from "../icons/Right";
import { HeaderText } from '../head/HeaderText';


const SuccessPopupTapTree = () => {
  return (
    <div>
       <div className=" flex flex-col  justify-center h-screen">
      <div className="bg-white p-6">
        <Right />
        <div className="text-center">
          <HeaderText color="green"  text="successfully created"/>
          <p className="text-gray-600 my-9">
            Thank you for Tap tree
  
          </p>
          <LoginButton bg="#FF4444" text="hello" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default SuccessPopupTapTree

