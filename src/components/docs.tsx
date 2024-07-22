"use client";
import React, { useRef, useState } from "react";
import Doc from "./doc";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { content } from "@/lib/content";

export default function Docs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const itemsPerPage = 6;
  const totalPages = Math.ceil(content.length / itemsPerPage);
  const pagination: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const [indexPage, setIndexPage] = useState(0);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.75], [0.9, 1]);

  return (
    <div>
      <motion.div
        className="w-[100%] flex flex-col sm:flex-row flex-wrap sm:gap-16 gap-y-16 justify-center mt-18"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        ref={ref}
      >
        {content.slice(indexPage * itemsPerPage, (indexPage + 1) * itemsPerPage).map((topic, index) => (
          <React.Fragment key={index}>
            <Doc {...topic} />
          </React.Fragment>
        ))}
      </motion.div>
      <div className="flex justify-center mt-8 gap-4">
        {pagination.map((page) => (
          <Button
            key={page}
            className="rounded-full"
            onClick={() => {
              setIndexPage(page - 1);
            }}
          >
            <Link href="#documentations">{page}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
