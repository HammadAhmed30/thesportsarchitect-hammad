import React from 'react'

export default function SmallHeading({className, children}) {
  return (
    <h1 className={`text-[35px] font-[600]  ${className || ""}`}>{children}</h1>
  )
}