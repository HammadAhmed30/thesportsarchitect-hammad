import React from 'react'

export default function LargeHeading({className, children}) {
  return (
    <h1 className={`text-[55px] font-[700]  ${className || ""}`}>{children}</h1>
  )
}
