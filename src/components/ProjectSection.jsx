import React from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="w-full flex flex-col gap-10 p-6 lg:p-10">
      {/* Section Title */}
      <motion.h1
        className="font-bold text-3xl lg:text-4xl text-center"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
      >
        <span>Explore My Popular </span>
        <span className="text-yellow-300">Projects</span>
      </motion.h1>

      {/* Project Cards */}
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Project 1: E-commerce Website */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 p-6 border border-base-200 rounded-2xl hover:shadow-lg hover:bg-base-300 bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <img
              src="2.png"
              alt="E-commerce Project"
              className="w-full rounded-lg shadow object-cover border border-base-200"
            />
            <img
              src="1.png"
              alt="E-commerce Project"
              className="w-full rounded-lg shadow object-cover border border-base-200"
            />
          </div>

          <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-yellow-300">
              E-commerce Website
            </h2>
            <p className="text-gray-400">
              A fully functional e-commerce platform built with React, Node.js,
              and MongoDB. Features include user authentication, product
              management, and payment integration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MohamedHD4K/product-store-PERN-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                View Code
              </a>
              <a
                href="https://github.com/MohamedHD4K/product-store-PERN-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2: X Clone Project */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 p-6 border border-base-200 rounded-2xl hover:shadow-lg hover:bg-base-300 bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-yellow-300">
              X Clone Project
            </h2>
            <p className="text-gray-400">
              A clone of the popular social media platform X (formerly Twitter),
              built using the MERN stack. Features include real-time updates,
              user authentication, and post interactions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MohamedHD4K/mern-stack-twitter-project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                View Code
              </a>
              <a
                href="https://github.com/MohamedHD4K/mern-stack-twitter-project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <img
              src="3.png"
              alt="X Clone Project"
              className="w-full rounded-lg shadow object-cover border border-base-200"
            />
            <img
              src="4.png"
              alt="X Clone Project"
              className="w-full rounded-lg shadow object-cover border border-base-200"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-6 p-6 border border-base-200 rounded-2xl hover:shadow-lg hover:bg-base-300 bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex gap-4">
            <img
              src="5.png"
              alt="E-commerce Mobile App"
              className="w-60 rounded-lg shadow object-cover border border-base-200"
            />
            <img
              src="6.png"
              alt="E-commerce Mobile App"
              className="w-60 rounded-lg shadow object-cover border border-base-200"
            />
          </div>

          <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-yellow-300">
              E-commerce Mobile App
            </h2>
            <p className="text-gray-400">
              A mobile e-commerce application built with Flutter and Firebase.
              Features include product browsing, cart management, and secure
              payment integration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MohamedHD4K/flutter-ecommerce-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                View Code
              </a>
              <a
                href="https://github.com/MohamedHD4K/flutter-ecommerce-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;