"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

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
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Successfully sent message.");
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
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
