import React from "react";
import logo from "../assets/favicon.ico";

// import Gmail from "../assets/envelope-regular.svg";
// import Gmail from "../assets/github.svg";
// import Gmail from "../assets/linkedin.svg";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

function Navbar() {
  return (
    <div className="bg-premium_dark">
      <nav className="flex justify-between items-center p-3">
        <a href="/" className="text-text text-[2rem] animate-wiggle nav">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="flex gap-2">
          <li>
            <a
              href="mailto:omoniyi.success@gmail.com"
              className="text-text hover:text-teal-300 focus-visible:text-teal-300 nav"
              target="_blank" rel="noreferrer"
            >
              <Email />
            </a>
          </li>
          <li className="text-xs">
            <a
              href="https://github.com/wabjay"
              className="text-text hover:text-teal-300 focus-visible:text-teal-300 nav"
              target="_blank" rel="noreferrer"
            >
              <GitHub />
            </a>
          </li>

          <li className="text-xs">
            <a
              href="https://www.linkedin.com/in/wabjay/"
              className="text-text hover:text-teal-300 focus-visible:text-teal-300 nav"
              target="_blank" rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
