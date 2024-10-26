import React from 'react'

export default function SmallParagraph({className, children}) {
  return (
    <p className={`md:text-[20px] text-[14px] font-[400] leading-[130%]  ${className || ""}`}>{children}</p>
  )
}