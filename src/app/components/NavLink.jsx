import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 font-medium hover:font-bold hover:text-white transition-all duration-200"
    >
      {title}
    </Link>
  );
};
export default NavLink;
