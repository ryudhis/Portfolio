"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Next.js</li>
        <li>React JS</li>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Prisma ORM</li>
        <li>Zustand</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>TailwindCSS</li>
        <li>PHP</li>
        <li>C++</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>
          Informatics Engineering at Institute Technolgy Sumatera (2021-2025)
        </li>
        <li>
          Independent Study Dicoding Cycle 6: React and Back-End Developer
          (2024)
        </li>
        <li>Digital Talent Scholarship: Junior Mobile Programmer (2019)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>
          Third Best Graduate – August 2025 Judicium Ceremony, Faculty of
          Industrial Technology, Institut Teknologi Sumatera (2025)
        </li>
        <li>
          Best Student SIB Dicoding Cycle 6 React & Back-End Developer (2024)
        </li>
        <li>React Expert (2024) from Dicoding</li>
        <li>Advanced React (2024) from Meta</li>
        <li>
          MTA: HTML 5 Application Development Fundamentals (2019): 86/100 Score
        </li>
        <li>TOEIC (2019): 820/990 Score</li>
        <li>Digital Talent Scholarship: Junior Mobile Programmer (2019)</li>
      </ul>
    ),
  },
  {
    title: "Working Experience",
    id: "working-experience",
    content: (
      <ul className="list-disc pl-4">
        <li>
          Capstone Final Project as Fullstack Engineer at Institut Teknologi
          Sumatera (March 2024 - August 2025)
        </li>
        <li>
          Freelance as Frontend Engineer at Eventhings (February 2025 - May
          2025)
        </li>
        <li>
          Internship as Product Engineer at Dicoding Indonesia (September 2024 -
          December 2024)
        </li>
        <li>
          Internship as Frontend Engineer at Vocagame (July 2024 - August 2024)
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <motion.section
      className="text-white"
      id="about"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="hero image"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Full-Stack Engineer with a strong foundation in
            web development, specializing in building modern web applications
            using React and Next.js. Proficient in both frontend (React,
            Next.js, Tailwind, TypeScript) and backend (Node.js, Express,
            Prisma, TypeScript) technologies, I thrive on solving technical
            challenges, creating user-friendly solutions, and delivering
            impactful digital products. I am currently open to full-time
            opportunities and freelance projects in software engineering.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("working-experience")}
              active={tab === "working-experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || null}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
