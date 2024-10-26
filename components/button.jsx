import React from 'react'

export default function ReuseableButton({className, children}) {
  return (
    <button className={` py-[12px] text-[14px] font-[600] rounded-full px-[30px] bg-mainColor ${className || ""}`}>
        {children}
    </button>
  )
}
