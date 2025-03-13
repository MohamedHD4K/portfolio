import React from "react";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiPagespeedinsights } from "react-icons/si";
import { motion } from "framer-motion";

const ServicesSection = () => {
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
    <section id="services" className="w-full flex flex-col gap-10 p-6 lg:p-10">
      <motion.h1
        className="font-bold text-3xl lg:text-4xl text-center"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
      >
        <span>Our</span> <span className="text-yellow-300">Services</span>
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-8 border flex flex-col items-center gap-4 border-yellow-300 rounded-xl hover:shadow-lg hover:bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <MdDesignServices size={50} className="text-yellow-300" />
          <h1 className="text-2xl font-bold">Web Design</h1>
          <p className="text-gray-500 text-sm text-center">
            Create responsive and visually appealing website designs tailored to
            your needs.
          </p>
          <button className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
            Read More
          </button>
        </motion.div>

        <motion.div
          className="p-8 border flex flex-col items-center gap-4 border-yellow-300 rounded-xl hover:shadow-lg hover:bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <FaCode size={50} className="text-yellow-300" />
          <h1 className="text-2xl font-bold">Web Development</h1>
          <p className="text-gray-500 text-sm text-center">
            Build robust and scalable web applications using modern
            technologies.
          </p>
          <button className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
            Read More
          </button>
        </motion.div>

        <motion.div
          className="p-8 border flex flex-col items-center gap-4 border-yellow-300 rounded-xl hover:shadow-lg hover:bg-base-200 transition-all duration-300"
          variants={itemVariants}
        >
          <SiPagespeedinsights size={50} className="text-yellow-300" />
          <h1 className="text-2xl font-bold">Performance Optimiz</h1>
          <p className="text-gray-500 text-sm text-center">
            Optimize your website for speed, SEO, and better user experience.
          </p>
          <button className="btn btn-warning px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
            Read More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
