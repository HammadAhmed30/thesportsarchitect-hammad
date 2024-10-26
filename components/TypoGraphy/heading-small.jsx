import React from 'react'

export default function SmallHeading({className, children}) {
  return (
    <h1 className={`md:text-[35px] text-[18px] font-[600]  ${className || ""}`}>{children}</h1>
  )
}