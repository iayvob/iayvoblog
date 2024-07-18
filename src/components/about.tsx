'use client'
import React from "react";
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
      <p>
        This application is a documentations site where I iayvob share my
        experiences during the work and any news conserning the technologies
      </p>
      <p className="block justify-center">if you need something you can</p>
      <p className="underlined">vist my website or send questions bellow</p>
    </motion.div>
  );
}