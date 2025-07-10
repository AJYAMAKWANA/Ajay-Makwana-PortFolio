import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Globe, BookOpen, Briefcase } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  address?: string; 
  languages?: string[]; 
  hobbies?: string[];
  education?: {
    institution: string;
    period: string;
    degree: string;
    university: string;
  };
}

const HeroSection = ({
  name = "Ajay Makwana",
  title = "Flutter Developer at PDRS Multitrade Pvt. Ltd.",
  phone = "+91 9824232491",
  email = "ajmakwana115@gmail.com",
  address = "H-1301, Parishkar Phase - 2, Near Khokhra Circle, Maninagar, Ahmedabad - 380008",
  languages = ["English", "Gujarati", "Hindi"],
  hobbies = ["Traveling", "Learning New Technology", "Cricket"],
  education = {
    institution: "M.P. Shah Arts & Science College",
    period: "July 2020 – May 2023",
    // degree: "Undergraduate",
    degree: "Bsc",
    university: "Saurashtra University",
  },
}: HeroSectionProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Flutter-like animated elements in background
  const flutterElements = Array(5)
    .fill(0)
    .map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-500/20 z-0"
        style={{
          width: Math.random() * 100 + 50,
          height: Math.random() * 100 + 50,
          left: `${Math.random() * 80}%`,
          top: `${Math.random() * 80}%`,
        }}
        animate={{
          x: [0, Math.random() * 30 - 15],
          y: [0, Math.random() * 30 - 15],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ));

  return (
    <section className="relative w-full min-h-[700px] bg-background overflow-hidden py-16 px-4 md:px-8 lg:px-16">
      {/* Flutter-like animated elements in background */}
      {flutterElements}

      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left column - Profile photo */}
          <motion.div variants={itemVariants} className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src="/images/profile.jpeg"
                  alt="Ajay Makwana"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 left-1/2 lg:left-1/4 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Badge className="px-4 py-1 text-lg bg-primary text-primary-foreground">
                  Flutter Developer
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Profile info */}
          <motion.div variants={itemVariants} className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mt-2">
              {title}
            </h2>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Contact Information 
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Phone className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>{phone}</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span>{email}</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <span className="flex-1">{address}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Languages & Hobbies */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Globe className="mr-2 h-5 w-5" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-primary/10"
                        >
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Hobbies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {hobbies.map((hobby, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-primary/10"
                        >
                          {hobby}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-card/50 backdrop-blur-sm md:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Education
                  </h3>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="font-medium">{education.institution}</h4>
                      <p className="text-muted-foreground">
                        {education.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {education.university}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-sm bg-primary/10 px-2 py-1 rounded">
                        {education.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
