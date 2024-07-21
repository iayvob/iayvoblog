"use client";

import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/themeToggle";
import { motion } from 'framer-motion';
import { Url } from "@/lib/content";

const Header = () => {

  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full"
      initial={{ opacity: 0, y: -75 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }} 
      >
      <div className="flex justify-between gap-2 max-w-[90%] py-10 w-full mb-10">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="justify-start">
            <p className="border-black text-xl font-bold transition-all hover:-translate-y-[2px] md:block">
              iayvoblog
            </p>
          </Link>
        </div>
        <div className="flex gap-5 items-center">
        <Link href={`${Url}/about`} className="hover:-translate-y-[2px]">
              About
          </Link>
          <Link href={`${Url}#documentations`} className="hover:-translate-y-[2px] transition-all">
              Documentations
          </Link>
          <ThemeToggle className="justify-start hover:-translate-y-[2px] transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
