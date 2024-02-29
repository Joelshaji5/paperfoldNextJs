"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "../../Style/NavBar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "home"
    },
    {
      id: 2,
      link: "Our Products",
      name: "Our Products"
    },
    {
      id: 3,
      link: "services",
      name: "Services"
    },
    {
      id: 4,
      link: "Portfolio",
      name: "Portfolio"
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-14   text-white bg-white fixed nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/Logo.png" alt="Paperfold Logo" width={200} height={300} />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link href="/contact">
        <button className="text-black mr-10 navBtn">Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
