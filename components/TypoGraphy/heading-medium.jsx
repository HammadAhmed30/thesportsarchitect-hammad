import React from 'react'

export default function MediumHeading({className, children}) {
  return (
    <h1 className={`text-[45px] font-[600]  ${className || ""}`}>{children}</h1>
  )
}