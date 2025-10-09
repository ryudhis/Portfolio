"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Youtube Clone",
    description:
      "A front-end replica of YouTube’s interface built with HTML and CSS. Focused on mastering responsive layouts, grid systems, and video player styling.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Youtube-Project",
    demoUrl: "https://youtube-project-murex.vercel.app/",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "An e-commerce UI clone of Amazon using HTML, CSS, and JavaScript. Features product listings, cart interactions, and a responsive design to practice DOM manipulation.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Amazon-Project-on-progress",
    demoUrl: "https://amazon-project-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Pemira ITERA 2023",
    description:
      "A student election system website for ITERA, developed with HTML, TailwindCSS, and JavaScript. Provided a platform for candidate information and voting simulation, used during the 2023 campus election event.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PemiraITERA",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Posyandu Mawar I Way Huwi Management Website",
    description:
      "A management system for a local healthcare center built with Next.js and TailwindCSS. Includes patient data management, scheduling, and reporting to streamline community health services.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kaben011201/TUBES_KAPITA_SELEKTA_09_2023",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Dicodit - Dicoding Reddit Forum",
    description:
      "A forum web app inspired by Reddit, developed with ReactJS, Redux, and API integration. Supports user authentication, post creation, comments, and voting features.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/dicodit",
    demoUrl: "https://dicodit.vercel.app/",
  },
  {
    id: 6,
    title: "Otak-Atik: Aplikasi Belajar Untuk Semua",
    description:
      "A marketplace educational platform designed for inclusive learning. Built with Next.js, TypeScript, and TailwindCSS on the frontend, and Next.js API routes, Prisma, and CockroachDB on the backend. Features authentication, user management, teachers can create and sell courses, and students can browse, purchase, and learn from those courses.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Otak-Atik",
    demoUrl: "https://Otak-Atik.vercel.app/",
  },
  {
    id: 7,
    title: "Vocasawer",
    description:
      "A streamer donation prototype using Next.js, TailwindCSS, and Zustand. Enables donors to support streamers.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 8,
    title: "OBE (Outcome-based Education) System ITERA",
    description:
      "An academic management system for tracking student learning outcomes at ITERA. Built with Next.js, TypeScript, Prisma, and PostgreSQL. Features Excel import/export, assessment templates, and dynamic evaluation workflows.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 9,
    title: "CodeGym",
    description:
      "A gamified coding exercise platform with user authentication, quizzes, and challenge submissions. Developed using Next.js, TypeScript, Prisma, and Supabase. Features personalized learning paths and progress tracking.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "",
    demoUrl: "https://codegym-production.vercel.app/",
  },
  {
    id: 10,
    title: "Notes App",
    description:
      "A full-stack notes management app built with Next.js, TypeScript, Zustand, TailwindCSS (frontend) and Prisma (backend). Supports authentication, rich-text notes, and persistent storage with CRUD operations.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/notes-app-ryudhis",
    demoUrl: "https://notes-app-ryudhis.vercel.app/",
  },
  {
    id: 11,
    title: "Eventhings",
    description:
      "An event management web app built with Next.js, TypeScript, Zustand, and TailwindCSS. Allows users to create, manage, and browse events with a clean and responsive UI.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 12,
    title: "Nuxt Chat Bot",
    description:
      "A chat application built with Nuxt.js. Supports real-time messaging and user authentication with logto.",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/nuxt-chat-bot",
    demoUrl: "https://nuxt-chat-bot.vercel.app/",
  },
  {
    id: 13,
    title: "Ryudhis Company Profile",
    description:
      "A company profile website built with Next.js. Showcases the company's about, services, and contact information. Features admin dashboard for managing content.",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/ryudhis-company-profile",
    demoUrl: "https://ryudhis-company-profile.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
