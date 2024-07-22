'use client'
import React from 'react'
import SectionName from '../sectionName'
import Image from 'next/image'
import { content } from '@/lib/content'
import { motion } from "framer-motion"
import json from "../../../public/strictJson/json.jpg"

export default function header() {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center mb-28 pl-5 w-full gap-0">
    <div>
      <SectionName text={`${content[1].title}`} />
    </div>
    <motion.div 
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
    >
      <Image 
          src={json}
          alt='json wallpaper' 
          width={600} 
          height={400}
          quality={90}
          className='p-8 md:p-O'
      />
    </motion.div>
  </div>
  )
}
