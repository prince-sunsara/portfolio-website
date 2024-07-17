"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Hello, my name is <span className="font-semibold">Prince Sunsara</span>.
        I’m from <span className="font-semibold">Manund, Patan, Gujarat</span>,
        where I completed my <span className="font-bold">SSC</span> with
        <span className="font-medium"> 83%</span>. I finished my{" "}
        <span className="font-bold">HSC </span>
        in 2020 from Tribhuvana Vidhyalaya at Lanava with{" "}
        <span className="font-medium">64%</span>. After that, I joined
        Sankalchand Patel College of Engineering in Visnagar in 2020, where I
        graduated with a degree in Computer Science, earning a CGPA of{" "}
        <span className="font-medium"> 7.16</span>. College life has been a
        refreshing change, providing more freedom and finally freeing me from
        the need to wear a uniform. Post-college, I aspire to work in the{" "}
        <span className="italic">IT industry</span>.
      </p>
      <p className="mt-3">
        I have a strong interest in{" "}
        <span className="font-medium">web development</span> and enjoy creating
        well-designed websites. As a beginner, I am particularly focused on both{" "}
        <span className="italic">frontend</span> &
        <span className="italic"> backend development</span>, utilizing
        technologies like <span className="font-semibold">HTML</span>,
        <span className="font-semibold">CSS</span>,{" "}
        <span className="font-semibold">JavaScript</span>,{" "}
        <span className="font-semibold">React.js</span>, and{" "}
        <span className="font-semibold">Node.js</span>. If anyone needs support
        in these areas, I’ll be glad to help. Besides my professional interests,
        I enjoy watching movies at least once a month and am a big fan of{" "}
        <span className="italic">anime</span>. I also play cricket on weekends
        and volleyball whenever I get the chance. Additionally, I love reading
        manga, with
        <span className="font-semibold"> Eiichiro Oda</span> being my favorite
        manga artist.
      </p>
      <p className="mt-3 text-center">
        Thank you for your time. Have a great day.
      </p>
    </motion.section>
  );
};

export default About;
