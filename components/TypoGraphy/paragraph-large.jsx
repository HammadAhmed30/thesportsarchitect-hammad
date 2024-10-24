import React from 'react'

export default function LargeParagraph({className, children}) {
  return (
    <p className={`text-[28px] font-[400] leading-[120%]  ${className || ""}`}>{children}</p>
  )
}