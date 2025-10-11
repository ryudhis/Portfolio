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
      "A pixel-perfect recreation of YouTube’s interface designed to practice responsive layouts and precise visual details.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    tech: ["HTML", "CSS"],
    gitUrl: "https://github.com/ryudhis/Youtube-Project",
    demoUrl: "https://youtube-project-murex.vercel.app/",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "An e-commerce mockup inspired by Amazon. Includes product listings, cart interactions, and adaptive layouts built to refine UI structure and dynamic user flow handling.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    tech: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/ryudhis/Amazon-Project-on-progress",
    demoUrl: "https://amazon-project-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Pemira ITERA 2023",
    description:
      "A web platform built for the 2023 ITERA student election event. It provided candidate profiles and served as the main hub during the election campaign.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    gitUrl: "https://github.com/PemiraITERA",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Posyandu Mawar I Way Huwi Management Website",
    description:
      "A digital management tool for a local healthcare center, helping staff record patient data, schedule checkups, and generate reports to support daily health services.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "Prisma", "TailwindCSS"],
    gitUrl: "https://github.com/Kaben011201/TUBES_KAPITA_SELEKTA_09_2023",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Dicodit - Dicoding Reddit Forum",
    description:
      "A Reddit-style discussion forum where users can post, comment, and vote on topics. Designed to explore community interactions",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    tech: ["React", "Redux", "Node.js"],
    gitUrl: "https://github.com/ryudhis/dicodit",
    demoUrl: "https://dicodit.vercel.app/",
  },
  {
    id: 6,
    title: "Otak-Atik: Aplikasi Belajar Untuk Semua",
    description:
      "An inclusive learning marketplace that connects teachers and students. Instructors can create and sell courses, while learners can explore, purchase, and follow personalized lessons.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"],
    gitUrl: "https://github.com/ryudhis/Otak-Atik",
    demoUrl: "https://Otak-Atik.vercel.app/",
  },
  {
    id: 7,
    title: "Vocasawer",
    description:
      "A donation prototype for streamers, allowing supporters to send contributions and messages in a simple, interactive way inspired by real-world tipping platforms.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TailwindCSS", "Zustand"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 8,
    title: "OBE (Outcome-based Education) System ITERA",
    description:
      "A university-grade curriculum management system for tracking student learning outcomes. Features include assessment templates, performance tracking, and Excel import/export tools.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 9,
    title: "CodeGym",
    description:
      "A gamified learning platform where users can take coding quizzes, complete challenges, and monitor their progress through personalized learning paths.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    gitUrl: "",
    demoUrl: "https://codegym-production.vercel.app/",
  },
  {
    id: 10,
    title: "Notes App",
    description:
      "A modern note-taking app that supports authentication, rich-text editing, and persistent storage. Designed for simplicity, speed, and everyday productivity.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
    gitUrl: "https://github.com/ryudhis/notes-app-ryudhis",
    demoUrl: "https://notes-app-ryudhis.vercel.app/",
  },
  {
    id: 11,
    title: "Eventhings",
    description:
      "An event management web app for creating, managing, and discovering public or private events. Features a clean dashboard and responsive design for seamless browsing.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TypeScript", "Zustand", "TailwindCSS"],
    gitUrl: "",
    demoUrl: "",
  },
  {
    id: 12,
    title: "Nuxt Chat Bot",
    description:
      "A real-time chat application with user authentication and private messaging. Built to experiment with live communication and modern UI patterns.",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    tech: ["Nuxt.js", "Logto", "TailwindCSS", "Prisma", "PostgreSQL"],
    gitUrl: "https://github.com/ryudhis/nuxt-chat-bot",
    demoUrl: "https://nuxt-chat-bot.vercel.app/",
  },
  {
    id: 13,
    title: "Ryudhis Company Profile",
    description:
      "A company profile website showcasing business info, services, and contact details. Includes an admin dashboard for updating content easily.",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    tech: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL"],
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
            tags={project.tech}
            gitUrl={project.gitUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
