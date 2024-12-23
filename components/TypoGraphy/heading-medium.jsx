import { motion } from 'framer-motion'
import React from 'react'

export default function MediumHeading({className, children}) {
  return (
    <motion.h1 initial={{ y: "20px", opacity: "0%", blur: "100px" }}
    whileInView={{ y: "0px", opacity: "100%", blur: "0px" }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className={`md:text-[45px] text-[27px] font-[600]  ${className || ""}`}>{children}</motion.h1>
  )
}