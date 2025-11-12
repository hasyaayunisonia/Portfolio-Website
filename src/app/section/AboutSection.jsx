"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: `Politeknik Negeri Bandung, Associate Degree in Informatics Engineering (D3) (2020 - 2023)`,
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Learn Web Programming Basics - Dicoding</li>
        <li>Learn Basic JavaScript Programming - Dicoding</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-20" id="about">
      <div className="gap-8 items-center py-8 xl:gap-16 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Software Engineering graduate from Politeknik Negeri Bandung with a
            focus on front-end developer and data/business analysis. Skilled in
            modern frameworks and databases including React.js, Next.js, Vue.js,
            TypeScript, PostgreSQL, MySQL, and MongoDB. Highly motivated to
            contribute to innovative projects by combining technical expertise
            with analytical thinking.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
