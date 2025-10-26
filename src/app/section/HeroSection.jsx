"use client";

import React from "react";
import Image from "next/image";
import adaImage from "@/app/images/me.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {" "}
              Hello I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Hasya", // Types 'One'
                1000, // Waits 1s
                // "Front End Developer", // Deletes 'One' and types 'Two'
                // 2000, // Waits 2s
                // "System Analyst", // Types 'Three' without deleting 'Two',
                // 2000,
                // "Business Analyst",
                // 2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", lineHeight: "1em" }}
            />
          </h1>
          {/* Role Front End Developer */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa
            odit assumenda iusto aperiam ducimus! Nihil est vel adipisci et sed
            ducimus, sunt neque, assumenda debitis eligendi quaerat earum
            repellat.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={adaImage}
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div> */}
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-[#181818]">
            <Image
              src={adaImage}
              alt="Hero image"
              fill // makes the image cover the parent
              sizes="(max-width: 1024px) 250px, 400px"
              className="object-cover object-center"
              priority // optional: if this is hero avatar you want to load asap
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
