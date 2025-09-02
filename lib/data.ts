import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import psMovies from "@/public/psMovies.jpg";
import textUtils from "@/public/text-utils.png";
import dailyJournal from "@/public/daily-journal.png";
import gamingFusionHub from "@/public/gamingFusionHub.jpg";
import psychoScript from "@/public/psychoScript.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Virtual",
    description:
      "While pursuing my graduatation I apply for Virtual internship at Code Clause as Front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Virtual",
    description:
      "I worked as a front-end developer intern for 1 month at Octa Net.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Gaming Fusion Hub",
    description:
      "A modern gaming platform built with React and Tailwind. Features classic browser mini-games, engaging blogs, and a responsive, SEO-friendly design for all devices.",
    tags: ["React", "Tailwind", "Vite", "Canvas"],
    imageUrl: gamingFusionHub,
    link: "https://gaming-fusion-hub.vercel.app/",
  },

  {
    title: "Ps Movies",
    description:
      "A full-stack project where users can give public feedback to companies. Built with React and Tailwind, focused on usability, scalability, and clean UI.",
    tags: ["React", "Tailwind"],
    imageUrl: psMovies,
    link: "https://ps-movies.vercel.app/",
  },

  {
    title: "Daily Journal Blog",
    description:
      "A blogging web app built with MERN stack. Includes word and character count, analytics, and social post limits for writers and content creators.",
    tags: ["React Js", "Node js", "Express Js", "Mongo DB"],
    imageUrl: dailyJournal,
    link: "https://github.com/prince-sunsara/Daily-Journal-Blog-Website-with-mongo",
  },

  {
    title: "PsychoScript",
    description:
      "A creative text styling app with 50+ fonts and effects. Customize text using gradients, animations, and export styled results instantly for free.",
    tags: ["React", "Next.js", "Tailwind", "Text Effects"],
    imageUrl: psychoScript,
    link: "https://psycho-script.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "AI",
] as const;
