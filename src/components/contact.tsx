"use client";

import React from "react";
import { motion } from "framer-motion";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "../../actions/sendEmail";

export default function Contact() {
  return (
    <motion.section
      className="sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="text-center mt-5 mb-12">
        <h1 className="text-2xl font-semibold">Send Questions</h1>
      </div>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please send your message directly at{" "}
        <a className="underline" href="mailto:iayvob@gmail.com">
          iayvob@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("message sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
