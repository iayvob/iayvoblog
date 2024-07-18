'use client'
import React from 'react'
import { comments } from '@/lib/topComments'
import Comment from './comment'
import { motion } from 'framer-motion'

export default function Comments() {
  return (
    <motion.ul 
      className='flex gap-x-5'       
      initial={{ opacity: 0, y: 75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
        {comments.map((comment, index)=>(
            <React.Fragment key={index}>
                <Comment {...comment} />
            </React.Fragment>
        ))}
    </motion.ul>
  )
}
