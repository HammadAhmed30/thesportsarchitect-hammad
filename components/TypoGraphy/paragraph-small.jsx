import React from 'react'

export default function SmallParagraph({className, children}) {
  return (
    <p className={`text-[20px] font-[400] leading-[120%]  ${className || ""}`}>{children}</p>
  )
}