import React from 'react'

export default function LargeHeading({className, children}) {
  return (
    <h1 className={`md:text-[55px] text-[35px] font-[700]  ${className || ""}`}>{children}</h1>
  )
}
