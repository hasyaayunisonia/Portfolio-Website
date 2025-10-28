"use client";

import React from "react";
import Image from "next/image";
import myImage from "@/app/images/me.png";
import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 order-2 md:order-1 place-self-center text-center md:text-left justify-self-center md:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello I&apos;m
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white mb-4 block">
              Hasya Ayuni Sonia
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hey! I’m a Front-End Developer who loves building interactive and
            responsive web experiences. I enjoy turning ideas into clean, modern
            interfaces that users love to explore.
          </p>

          {/* <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div> */}
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 order-1 md:order-2 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#181818]">
            <Image
              src={myImage}
              alt="Hero image"
              fill
              sizes="(max-width: 1024px) 250px, 400px"
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ProfileSection;
