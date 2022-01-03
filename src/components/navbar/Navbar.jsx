import React, { useState } from "react";
import { useMatch, useResolvedPath } from "react-router";
import { Link } from "react-router-dom";

function Navbar({fullWidth}) {
  const [open, setOpen] = useState(false);

  const Navitem = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <Link
        to={to}
        className={`block mt-4 lg:inline-block text-lg lg:mt-0 text-buttext hover:text-text ${
          match && "p-1 bg-text text-bg"
        }  mr-4`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div>
      <nav
        className={`flex items-center justify-between transition-all duration-500 ease-in-out  ${
          open ? "h-64" : "h-16"
        } overflow-hidden flex-wrap bg-bg p-6 ${fullWidth && 'w-screen'}`}
      >
        <div class="flex items-center flex-shrink-0  text-text mr-6">
          <img
            className="fill-current h-8 w-8 mr-2"
            width="94"
            height="94"
            alt="MY LOGO"
            src="/images/logo.png"
          />
          <span class="font-semibold hidden lg:block text-2xl tracking-tight">
            SIWES CLASSIFICATION SYSTEM
          </span>
          <span class="font-semibold block lg:hidden tracking-tight">
            SIWES CS
          </span>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={(e) => setOpen(!open)}
            className="flex items-center px-3 py-2 border rounded text-buttext border-bg hover:text-text hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Navitem to="/">Home</Navitem>
            <Navitem to="/supervisors">Supervisors</Navitem>
            <Navitem to="/students">Students</Navitem>
            <Navitem to="/about">About</Navitem>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
}

export default Navbar;
