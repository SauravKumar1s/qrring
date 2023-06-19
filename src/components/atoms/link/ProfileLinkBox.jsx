import React from 'react'

export const ProfileLinkBox = ({text}) => {
  return (
    <div
    className="w-80 h-16 flex items-center justify-center text-center bg-[rgba(0, 0, 0, 0.26)] shadow-xl rounded-full text-white text-xl font-bold"
    style={{
      boxShadow: "11px 4px 14px 0 rgba(57, 31, 38, 0.55)",
    }}
  >
    {text}
  </div>
  )
}
