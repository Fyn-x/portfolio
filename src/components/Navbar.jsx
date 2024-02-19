"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    {
      id: "1",
      name: "About",
      link: "/#about",
    },
    {
      id: "2",
      name: "Experience",
      link: "/#exp",
    },
    {
      id: "3",
      name: "Projects",
      link: "/#projects",
    },
  ];

  const updateOpenState = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <nav
        className={`h-16 fixed z-50 ${
          open ? "" : "border-b-[1px] border-secondary"
        } flex items-center justify-between bg-primary w-full px-4 md:px-24`}
      >
        <Image width={100} height={0} alt="..." src="/img/fynx-logo.png" />
        <button
          onClick={updateOpenState}
          className="md:hidden flex hover:opacity-75"
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-tertiary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-tertiary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <ul
          className={`hidden md:flex md:items-center gap-6 h-full text-quaternary`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link className="hover:text-tertiary" href={menu.link}>
                <span className="text-tertiary">#</span> {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`transition-all duration-1000 md:hidden fixed z-40 ${
          open
            ? "translate-y-16 animate-nav-open"
            : "-translate-y-16 animate-nav-close"
        } w-full bg-primary border-b-[1px] border-secondary px-4 md:px-24 py-4`}
      >
        <div
          className={`flex flex-col items-start gap-3 h-full text-quaternary`}
        >
          {menus.map((menu) => (
            <Link
              key={menu.id}
              className="hover:text-tertiary"
              href={menu.link}
            >
              <span className="text-tertiary">#</span> {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
