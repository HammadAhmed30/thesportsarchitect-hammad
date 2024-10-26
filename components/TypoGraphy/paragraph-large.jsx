import React from 'react'

export default function LargeParagraph({className, children}) {
  return (
    <p className={`md:text-[28px] text-[18px] font-[400] leading-[120%]  ${className || ""}`}>{children}</p>
  )
}