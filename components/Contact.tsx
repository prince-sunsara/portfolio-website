"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-2">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:princesunasara977@gmail.com">
          princesunasara977@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (FormData) => {
          await sendEmail(FormData);
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          name="email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack px-4 py-2"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 group hover:scale-110 focus:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
