"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.25,
              }}
            >
              <Image
                src={"/prince.jpg"}
                alt="Prince Sunsara"
                height={192}
                width={192}
                quality={95}
                priority={true}
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute right-0 bottom-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>

        <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Prince Sunsara.</span> I'm a{" "}
          <span className="font-bold">Web Developer</span>. I enjoy building{" "}
          <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React </span> &{" "}
          <span className="underline">Node</span>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-2 px-4 text-lg font-medium items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
            Contact me here <BsArrowRight />
          </Link>
          <a
            href=""
            className="bg-white gap-2 flex items-center px-7 py-3 rounded-full"
          >
            Download CV <HiDownload />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-sunsara-6202201b1/"
            target="_blank"
            className="bg-white text-gray-700 flex gap-2 items-center p-4 rounded-full"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.github.com/prince-sunsara/"
            target="_blank"
            className="bg-white text-gray-700 flex items-center p-4 rounded-full text-[1.35rem]"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Intro;