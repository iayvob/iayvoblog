'use client'
import React from 'react'
import SectionName from '../sectionName'
import Image from 'next/image'
import { content } from '@/lib/content'
import { motion } from "framer-motion"

export default function header() {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center mb-28 pl-5 w-full gap-0">
    <div>
      <SectionName text={`${content[0].title}`} />
    </div>
    <motion.div 
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
    >
      <Image 
          src='/./flutterwave/flw.png' 
          alt='payment landing page' 
          width={600} 
          height={400}
          quality={90}
          className='p-8 md:p-O'
      />
    </motion.div>
  </div>
  )
}
