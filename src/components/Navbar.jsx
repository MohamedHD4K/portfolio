import React, { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaStarOfLife, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ onClick, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 ${
        isScrolled
          ? "bg-base-200/50 border-b border-base-300 backdrop-blur-lg"
          : ""
      }`}
    >
      <motion.nav
        className="flex items-center justify-between py-5 px-6 lg:px-10 m-auto max-w-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <FaStarOfLife size={30} className="text-warning mt-1" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-base-content to-secondary bg-clip-text text-transparent">
            Portfolio.
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-300 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center gap-8 absolute lg:static top-16 right-6 bg-base-100 lg:bg-transparent p-6 lg:p-0 rounded-lg shadow-lg lg:shadow-none z-50`}
        >
          <a
            href="#hero"
            className="hover:text-warning font-semibold duration-150 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-warning font-semibold duration-150 cursor-pointer"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-warning font-semibold duration-150 cursor-pointer"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-warning font-semibold duration-150 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-warning font-semibold duration-150 cursor-pointer"
          >
            Contact
          </a>
        </ul>

        {/* Social Media Links */}
        <ul className="hidden lg:flex gap-8 text-yellow-300">
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://linkedin.com/in/mohammad-dawara-b71a58276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={25}
                className="hover:opacity-80 duration-150"
              />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://github.com/MohamedHD4K"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} className="hover:opacity-80 duration-150" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://x.com/modman74153460"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={25} className="hover:opacity-80 duration-150" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a
              href="https://www.instagram.com/m7md_dr45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram
                size={25}
                className="hover:opacity-80 duration-150"
              />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <div>
              {theme ? (
                <MdDarkMode
                  size={25}
                  onClick={onClick}
                  className="hover:opacity-80 duration-150"
                />
              ) : (
                <MdLightMode
                  size={25}
                  onClick={onClick}
                  className="hover:opacity-80 duration-150"
                />
              )}
            </div>
          </motion.li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
