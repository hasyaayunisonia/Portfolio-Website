"use client";
import React from "react";
import Image from "next/image";
import logo79 from "@/app/images/experiences/79.png";
import logoBims from "@/app/images/experiences/bims.png";

const experiences = [
  {
    id: 1,
    company: "PT. Padepokan Tujuh Sembilan",
    role: "Software Developer",
    period: "Sept 2023 - Sept 2025 ◦ 2 years",
    logo: logo79,
  },
  {
    id: 2,
    company: "PT. Bima Inspira Solusindo (BIMS)",
    role: "Full Stack Developer",
    period: "July - Sept 2022 ◦ 2 months",
    logo: logoBims,
  },
];

const ExperiencesSection = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experiences
      </h2>

      <div className="grid grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center gap-4 p-4 bg-[#181818] rounded-xl shadow-md hover:bg-[#202020] transition-colors"
          >
            <Image
              src={exp.logo}
              alt={exp.company}
              width={80}
              height={80}
              className="object-cover rounded-md"
            />
            <div className="text-left">
              <p className="text-lg font-semibold text-white">{exp.company}</p>
              <p className="font-medium text-slate-400">{exp.role}</p>
              <p className="font-medium text-slate-500 text-sm">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExperiencesSection;
