"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectPropsType = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectPropsType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 sm:mb-8"
    >
      <section className=" bg-gray-100 max-w-[42rem] max-h-[25rem] sm:h-[20rem]  border rounded-lg border-black/5 overflow-hidden sm:pr-8 sm:relative  hover:bg-gray-200 transition cursor-pointer dark:bg-white/10 dark:hover:bg-white/30 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:mt-auto h-full group-even:ml-auto">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="sm:absolute top-8 -right-40 sm:w-[28.25rem]  rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:scale-[1.04] group-hover:-rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
        "
          src={imageUrl}
          alt="Project I worked"
          quality={95}
        />
      </section>
    </motion.div>
  );
}

export default Project;
