import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectShowcase from "./ProjectShowcase";
import ContactSection from "./ContactSection";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

const Home = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/ajay-makwana-608510230/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://gitlab.com/pdrs.yogesh.m/tradgo_user",
      label: "GitHub",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/makwana_aj1105",
      label: "Twitter",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/ajay_makwana____/",
      label: "Instagram",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-primary"
          >
            Ajay Makwana
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="hidden md:flex space-x-8"
          >
            {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer hover:text-primary transition-colors"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="md:hidden text-gray-700"
            aria-label="Menu"
          >
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section id="home" className="py-12 md:py-20">
          <HeroSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              My Skills
            </h2> */}
            <SkillsSection />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              My Projects
            </h2> */}
            <ProjectShowcase />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Get In Touch
            </h2> */}
            <ContactSection />
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Ajay Makwana</p>
              <p className="text-gray-400">Flutter Developer</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Ajay Makwana. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.button>
    </div>
  );
};

export default Home;
