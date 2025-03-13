import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";

const ContactSection = () => {
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
    <section id="contact" className="flex flex-col gap-10 p-6 lg:p-10">
      <motion.h1
        className="font-bold text-3xl mb-4 lg:text-4xl text-center"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: true }}
      >
        <span>Contact </span>
        <span className="text-yellow-300">Me</span>
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row justify-between gap-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-1/2"
          variants={itemVariants}
        >
          <h2 className="font-bold text-2xl mb-4">Social Media</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-center">
              <span className="btn btn-warning rounded-full p-3">
                <MdEmail size={22} />
              </span>
              <p className="text-gray-400">mohamed455dwr@gmail.com</p>
            </li>
            <li className="flex gap-4 items-center">
              <span className="btn btn-warning rounded-full p-3">
                <PiPhoneCall size={22} />
              </span>
              <p className="text-gray-400">+90 5528283106</p>
            </li>
            <li className="flex gap-4 items-center">
              <span className="btn btn-warning rounded-full p-3">
                <FaGithub size={22} />
              </span>
              <a
                href="https://github.com/MohamedHD4K"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
              >
                MohamedHD4K
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="btn btn-warning rounded-full p-3">
                <FaLinkedinIn size={22} />
              </span>
              <a
                href="https://linkedin.com/in/mohammad-dawara-b71a58276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
              >
                mohammad-dawara-b71a58276
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <span className="btn btn-warning rounded-full p-3">
                <FaXTwitter size={22} />
              </span>
              <a
                href="https://twitter.com/modman74153460"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
              >
                modman74153460
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          className="flex flex-col gap-6 w-full lg:w-1/2"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              className="input w-full lg:w-1/2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="input w-full lg:w-1/2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="tel"
              className="input w-full lg:w-1/2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              className="input w-full lg:w-1/2 rounded-lg bg-base-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Subject"
              required
            />
          </div>
          <textarea
            rows="6"
            className="input w-full rounded-lg bg-base-200 focus:outline-none focus:ring-2 h-40 focus:ring-yellow-300 p-3"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="btn btn-warning px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
