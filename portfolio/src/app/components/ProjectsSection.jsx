"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Youtube Clone",
    description: "Mainly focusing on HTML and CSS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Youtube-Project",
    demoUrl: "https://youtube-project-murex.vercel.app/",
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "Mainly focusing on HTML, CSS, and Javascript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Amazon-Project-on-progress",
    demoUrl: "https://amazon-project-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Pemira ITERA 2023",
    description: "Mainly focusing on HTML, TailwindCSS, and Javascript",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PemiraITERA",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Posyandu Mawar I Way Huwi Management Website",
    description: "Mainly focusing on Next.js and TailwindCSS",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kaben011201/TUBES_KAPITA_SELEKTA_09_2023",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Dicodit - Dicoding Reddit Forum",
    description: "Mainly focusing on ReactJS and API Integration",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/dicodit",
    demoUrl: "https://dicodit.vercel.app/",
  },
  {
    id: 6,
    title: "Otak-Atik: Aplikasi Belajar Untuk Semua",
    description:
      "Mainly focusing on Next.js, Typescript, and TailwindCSS as Frontend and Next.js, Prisma, and CockroackDB as Backend",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryudhis/Otak-Atik",
    demoUrl: "https://Otak-Atik.vercel.app/",
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
    <section id="projects">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
    </section>
  );
};

export default ProjectsSection;
