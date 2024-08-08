"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>HTML</li>
        <li>TailwindCSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Zustand</li>
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
        <li>Digital Talent Scholarship: Junior Mobile Programmer (2019)</li>
        <li>Informatics Engineering at Institute Technolgy Sumatera</li>
        <li>
          Independent Study Dicoding Cycle 6: React and Back-End Developer
          (2024)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>
          MTA: HTML 5 Application Development Fundamentals (2019): 86/100 Score
        </li>
        <li>TOEIC (2019): 820/990 Score</li>
        <li>Digital Talent Scholarship: Junior Mobile Programmer (2019)</li>
        <li>Advanced React (2024) from Meta</li>
        <li>React Expert (2024) from Dicoding</li>
        <li>Best Student SIB Dicoding Cycle 6 React & Back-End Developer</li>
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
    <section className="text-white" id="about">
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
            I am a passionate Informatics Engineering student with a strong
            foundation in web development. My enthusiasm for information
            technology fuels my desire to continuously learn and stay ahead of
            the curve. I possess proficiency in various programming languages,
            with a particular focus on front-end development. My experience
            includes building website projects using HTML, CSS (Vanilla and
            Tailwind), PHP, and JavaScript (Vanilla, React.js, and Next.js).
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
