import React from 'react'

export default function Triangle({className, dark}) {
  return (
    <img src={ dark ?  "/triangle1.png" : "triangle.png"} className={`w-[50px]  ${className || ""}`} alt="" />
  )
}
