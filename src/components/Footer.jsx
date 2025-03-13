import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-base-200 py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/MohamedHD4K"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mohammad-dawara-b71a58276"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://twitter.com/modman74153460"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
          >
            <FaXTwitter size={24} />
          </a>
        </div>

        <p className="text-center text-gray-400 text-sm mb-6">
          © {new Date().getFullYear()} Mohammad Dawara. All rights reserved.
        </p>

        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-300 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp size={20} className="text-base-100" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;