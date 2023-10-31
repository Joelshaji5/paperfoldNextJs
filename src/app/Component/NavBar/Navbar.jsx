"use client"
import React, { useState, useEffect } from 'react';
import "../../Style/NavBar.css"

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? 'bg-gray-900 text-white fixed top-0 left-0 w-full shadow-lg transition-all duration-300'
          : 'bg-transparent'
      } p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default StickyNavbar;
