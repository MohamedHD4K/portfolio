import React from "react";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";

const HeroSection = () => {
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
      id="hero"
      className="flex flex-col lg:flex-row justify-between w-full mt-20 items-center gap-10 p-6"
    >
      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-start gap-5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-gray-400 font-medium text-3xl"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.h3>
        <motion.h1
          className="text-5xl lg:text-7xl text-yellow-300 font-bold"
          variants={itemVariants}
        >
          Mohammad Dawara
        </motion.h1>
        <motion.h2
          className="text-3xl lg:text-5xl typewriter font-medium text-gray-300"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p className="text-lg text-gray-400" variants={itemVariants}>
          I am a passionate Web and Mobile Developer specializing in MERN Stack.
          With my education at Isparta Uygulamali Bilimler University and
          hands-on experience in building web and mobile applications.
        </motion.p>
        <motion.a
          href="/MohamedDawaraCV(en).docx" download
          className="btn btn-warning font-bold rounded-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
          variants={itemVariants}
        >
          <BiDownload size={20}/> Download CV
        </motion.a>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src="me.jpg"
            alt="Mohammad avatar"
            className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-laser-ring-1"></div>
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-laser-ring-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
