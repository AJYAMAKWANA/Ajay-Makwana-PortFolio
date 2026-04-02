import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

          {/* Content */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              I am a passionate <span className="font-semibold">Software Developer</span> 
              with strong expertise in both 
              <span className="font-semibold"> Flutter</span> and 
              <span className="font-semibold"> React.js</span>, focused on building 
              scalable and high-performance applications.
            </p>

            <p>
              In Flutter, I have developed cross-platform mobile applications with 
              advanced features such as API integration, state management using GetX, 
              authentication systems, push notifications, and real-time data handling.
            </p>

            <p>
              In React.js, I have hands-on experience with TypeScript, building reusable 
              and responsive UI components, managing API calls using Axios, handling 
              authentication flows, and optimizing application performance.
            </p>

            <p>
              I believe in writing clean, maintainable, and scalable code. Currently, 
              I am focused on enhancing my frontend expertise and expanding towards 
              full-stack development.
            </p>

            {/* Highlight Points */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                🚀 Flutter Mobile App Development
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                ⚛️ React.js Web Development
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                🔗 API Integration & Backend Handling
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                ⚡ Performance Optimization
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;