import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-primary to-secondary"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 px-3 md:px-6 py-2 md:py-3 text-sm md:text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
