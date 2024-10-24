import React from 'react'

export default function Wrapper({className, children}) {
  return (
    <div className={`max-w-[1440px] w-[100%] p-[15px] mx-auto ${className || ""} `}>
        {children}
    </div>
  )
}
