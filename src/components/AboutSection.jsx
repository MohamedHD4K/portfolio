import React from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaFlutter, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-between bg-base-200 p-10 w-full items-center rounded-2xl gap-10"
    >
      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.h3 className="text-gray-400 font-bold" variants={itemVariants}>
          About Me
        </motion.h3>
        <motion.h1
          className="text-5xl lg:text-6xl text-yellow-300 font-bold"
          variants={itemVariants}
        >
          I'm a Developer
        </motion.h1>
        <motion.h2
          className="text-2xl font-medium text-gray-300"
          variants={itemVariants}
        >
          I Develop Applications That Help People
        </motion.h2>
        <motion.p className="text-gray-400 text-lg" variants={itemVariants}>
          Web Developer specializing in MERN Stack and mobile apps using
          Flutter. Experienced in implementing RESTful APIs for seamless
          communication between frontend and backend systems.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FaReact size={50} className="text-blue-500" />,
            key: "react",
          },
          {
            icon: <FaNodeJs size={50} className="text-green-600" />,
            key: "nodejs",
          },
          {
            icon: <SiTailwindcss size={50} className="text-blue-500" />,
            key: "tailwind",
          },
          {
            icon: <SiExpress size={50} className="text-gray-400" />,
            key: "express",
          },
          {
            icon: <SiMongodb size={50} className="text-green-500" />,
            key: "mongodb",
          },
          {
            icon: <BiLogoPostgresql size={50} className="text-blue-500" />,
            key: "postgresql",
          },
          {
            icon: <FaGithub size={50} className="text-gray-400" />,
            key: "github",
          },
          {
            icon: <BiLogoTypescript size={50} className="text-blue-500" />,
            key: "typescript",
          },
          {
            icon: <FaJsSquare size={50} className="text-yellow-400" />,
            key: "javascript",
          },
          {
            icon: <SiSocketdotio size={50} className="text-gray-400" />,
            key: "socketio",
          },
          {
            icon: <SiPrisma size={50} className="text-gray-400" />,
            key: "prisma",
          },
          {
            icon: <FaFlutter size={50} className="text-blue-500" />,
            key: "flutter",
          },
        ].map((tech) => (
          <motion.div
            key={tech.key}
            className="bg-gradient-to-bl to-base-100 from-base-100/10 border border-base-300
            rounded-2xl flex justify-center items-center p-6 hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutSection;
