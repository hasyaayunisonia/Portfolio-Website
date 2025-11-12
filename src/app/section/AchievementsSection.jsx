"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Technologies",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "2",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-4 px-4 xl:gap-16">
      <div className="text-center py-8 lg:px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComa
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  };
                }}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base ">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AchievementsSection;
