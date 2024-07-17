"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVarient = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Experiences = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      className="mb-28 scorll-mt-28 max-w-[53rem] text-center sm:mb-40"
      id="experience"
    >
      <SectionHeading>My Experiences</SectionHeading>
    </section>
  );
};

export default Experiences;
