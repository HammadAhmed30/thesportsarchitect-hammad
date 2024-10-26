import React from 'react'

export default function MediumHeading({className, children}) {
  return (
    <h1 className={`md:text-[45px] text-[27px] font-[600]  ${className || ""}`}>{children}</h1>
  )
}