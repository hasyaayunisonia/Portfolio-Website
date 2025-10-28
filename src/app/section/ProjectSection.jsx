"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import BPI from "@/app/images/projects/BPI.png";
import ProdLoan from "@/app/images/projects/ProdLoan.png";
import Sijepe from "@/app/images/projects/Sijepe.png";
import FeedingData from "@/app/images/projects/FeedingData.png";
import KPPKL from "@/app/images/projects/KPPKL.png";
import Reengineering from "@/app/images/projects/Reengineering.png";
import KabarNikah from "@/app/images/projects/KabarNikah.png";
import TalentCenter from "@/app/images/projects/TalentCenter.png";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "School Information Management System, LMS & Mobile BPI",
    description:
      "This project aims to enhance school administrative efficiency, improve learning effectiveness, and promote transparency in information and communication. With this system, BPI Foundation gains full control over its development, reducing long-term costs and eliminating third-party dependency, while enabling customization of features to meet the specific needs of the school.",
    image: BPI,
    tag: ["All", "React", "Typescript"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Enhancement Productive Loan ",
    description:
      "Enhance the productive loan module based on the scope from registration to loan flow. Perform bug fixes on implemented functions. Collaborate and coordinate with the AWDA team",
    image: ProdLoan,
    tag: ["All", "React", "Vue", "Javascript"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "BJBS SIJEPE",
    description:
      "The Professional Services Information System (SiJepe) is a web-based application that aims to fulfill information needs related to professional services related to third parties. With this application, it is hoped that it will make it easier for users to monitor the progress of the Kafalah Policy/Certificate issuance process, Restructuring, and Insurance Claims. This application is expected to not only increase efficiency and accuracy in data management, but also provide added value for all stakeholders in the financing ecosystem",
    image: Sijepe,
    tag: ["All", "React", "Javascript"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Feeding Data JobStreet",
    description:
      "Built an application to collect job vacancy data from the JobStreet website using web scraping techniques with specific keywords such as JavaScript, ReactJS, Node.js, Express, etc. The extracted data is stored in a local database and managed through a custom-built application. This project involved both backend and frontend development, with a focus on data collection, storage, and management. This application is equipped with Swagger and unit tests",
    image: FeedingData,
    tag: ["All", "React", "Javascript", "NodeJs Express", "PostgreSQL"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Reverse Engineering & Re-implementation Productive Loan System",
    description:
      "Reverse Engineering & Re-implementation Productive Loan System is a project to understand and create documentation for the Maucash Application by analyzing the existing structure, behavior, and functionality, in addition to redeveloping the productive loan module into a separate system.",
    image: Reengineering,
    tag: [
      "All",
      "React",
      "Vue",
      "Javascript",
      "Typescript",
      "MySQL",
      "MongoDB",
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Talent Center",
    description:
      "This application establishes a talent center website situated in Padepokan 79 to help users in discovering talents they need according to their requirements. This application implements a microservices architecture. There are two user sides : Client and Admin. The two user interfaces are separated to cater to the specific needs of each user.",
    image: TalentCenter,
    tag: ["All", "React", "Javascript", "PostgreSQL", "Docker"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title:
      "A Development of a Service for Grades Managing in The Application of KP and PKL Management Applying Event Driven Architecture",
    description:
      "This project involves developing an internship application to manage final grades. The existing project has implemented functionalities for login, registration, and mapping using a microservices architecture. To further develop this application, an additional service is needed for final assessment. The complexity of this project lies in prioritizing data consistency when retrieving values from other services and managing them within the grading service.",
    image: KPPKL,
    tag: ["All", "React", "Javascript", "Figma"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title:
      "KabarNikah Website Application Development PT. Bima Inspira Solusindo (BIMS)",
    description:
      "This application is focused on managing digital wedding invitation orders through an attractive and responsive web platform. It offers various wedding invitation themes for clients to choose from. The KabarNikah application system is designed to collect and store a set of data from clients for invitation purposes using a form. These assets are stored and later displayed on the web according to the chosen theme by the client. The application system frequently undergoes additions and improvements to its features.",
    image: KabarNikah,
    tag: ["All", "HTML", "CSS", "PHP", "MySQL", "CodeIgniter 3"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  const cardVariants = {
    initial: { opacity: 0, y: 500 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={selectedTag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("React")}
          name="React"
          isSelected={selectedTag === "React"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Vue")}
          name="Vue"
          isSelected={selectedTag === "Vue"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectSection;
