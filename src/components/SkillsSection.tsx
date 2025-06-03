import React from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  FileJson,
  Flame,
  Layers,
  Lock,
  Palette,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

interface SkillsProps {
  skills?: {
    name: string;
    percentage: number;
  }[];
  technologies?: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const SkillsSection = ({
  skills = [
    { name: "Flutter Development", percentage: 95 },
    { name: "Administrative", percentage: 85 },
    { name: "Public Speaking", percentage: 80 },
    { name: "Problem Solving", percentage: 85 },
    { name: "Communication", percentage: 80 },
  ],
  technologies = [
    { name: "Flutter", icon: <Smartphone className="h-6 w-6" /> },
    { name: "Dart", icon: <Zap className="h-6 w-6" /> },
    { name: "Firebase", icon: <Flame className="h-6 w-6" /> },
    { name: "API Integration", icon: <FileJson className="h-6 w-6" /> },
    { name: "State Management", icon: <Layers className="h-6 w-6" /> },
    { name: "UI/UX Design", icon: <Palette className="h-6 w-6" /> },
    { name: "Security", icon: <Lock className="h-6 w-6" /> },
    { name: "Animation", icon: <Sparkles className="h-6 w-6" /> },
    { name: "REST APIs", icon: <Code className="h-6 w-6" /> },
    { name: "Database", icon: <Database className="h-6 w-6" /> },
  ],
}: SkillsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in Flutter development with expertise in various
            technologies and soft skills that help me deliver exceptional mobile
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Professional Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress
                    value={skill.percentage}
                    className="h-2 bg-gray-200"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="text-blue-600 mb-2">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Why Choose My Skills?</h3>
          <p className="mb-6">
            With a strong foundation in Flutter development and a comprehensive
            skill set, I deliver high-quality, performant mobile applications
            that meet client requirements and exceed user expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cross-Platform Expertise</h4>
              <p className="text-sm">
                Build once, deploy everywhere with Flutter's cross-platform
                capabilities.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm">
                Create beautiful, responsive UIs that work on any device size.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Performance Optimization</h4>
              <p className="text-sm">
                Develop high-performance apps with efficient state management.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
