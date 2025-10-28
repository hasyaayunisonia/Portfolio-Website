import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white py-8 text-center">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-secondary to-primary"></div>

      <h2 className="text-lg font-semibold mb-3">Hasya Ayuni Sonia</h2>

      <div className="flex justify-center space-x-6 mb-4 text-sm">
        <a
          href="https://github.com/hasyaayunisonia"
          target="_blank"
          className="hover:text-secondary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hasya-ayuni-sonia"
          target="_blank"
          className="hover:text-secondary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=itshasyaayuni@gmail.com&su=Hello%20Hasya&body=I%20found%20your%20portfolio!"
          target="_blank"
          className="hover:text-secondary transition-colors"
        >
          Email
        </a>
      </div>

      <p className="text-slate-500 text-xs">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
