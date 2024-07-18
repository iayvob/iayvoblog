"use client"
import React from "react";
import { motion } from "framer-motion"

export default function SectionName({text}: any) {
  return (
    <motion.div
      className="flex w-[89%] text-6xl font-bold my-8"
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="hover:cursor-pointer">{text}</h3>
    </motion.div>
  );
}
