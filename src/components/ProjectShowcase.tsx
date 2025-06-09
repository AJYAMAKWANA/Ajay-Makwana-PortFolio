import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  playStoreLink: string;
  image: string;
}

interface ProjectShowcaseProps {
  projects?: Project[];
}

const ProjectShowcase = ({
  projects = [
    {
      title: "TradGo Recharge & Bill Payment",
      description:
        "A comprehensive mobile application for recharge, bill payments, money transfer, and more.",
      features: [
        "Mobile Recharge & Bill Payments Module",
        "Money Transfer Module",
        "Aadhaar Enabled Payment System (AEPS)",
        "Report Module",
        "Nearby Service Module",
        "KYC Module",
        "Integration with Native Third-Party SDK",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN&gl=US",
      image:
        "/images/tradgo.webp",
    },
    {
      title: "TradGo Partners",
      description:
        "A platform connecting service providers with customers, enabling business growth and service discovery.",
      features: [
        "Business Registration for Service Providers",
        "Connects with Thousands of People for Better Business",
        "Opportunity Platform",
        "Detailed Description of User Services",
        "Direct Connection with Service Providers",
        "Nearby Services like Plumber, Electrician, etc.",
        "Registration for Own Business",
        "Post Business Online (Hotel, Salon, etc.)",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.tradgobusiness&hl=en_ZA&gl=US",
      image:
        "/images/tradgo_business.webp",
    },
    {
      title: "Tradgo Distributor",
      description:
        "Tradgo Distributor is a powerful mobile application designed for distributors managing mobile recharge services. It provides a fast, user-friendly solution to handle retailer registrations, payments, and multi-level recharge distribution.",
      features: [
        "Retailer Management",
        "Distributors can register new retailers under their downline.",
        "View and manage the complete list of retailers in real time.",
        "Distributors and retailers can make payment requests directly from the app.",
        "View the history and status of all payment requests easily.",
        "Supports Mobile, DTH, and Data Card recharge services.",
        "Fast, reliable, and secure transactions powered by years of industry experience.",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.new_tradgo_distributor&hl=en_IN",
      image:
        "/images/tradgo_distributor.webp",
    },
    {
      title: "PDRS Attendance",
      description:
        "PDRS Attendance is a mobile application designed to help companies and organizations manage the attendance of their employees, especially those working in the field or on-site. The app allows employees to mark their attendance easily from their mobile device, while supervisors and admin staff can monitor attendance records in real time.\n" +
        "This system is ideal for teams working outside the office—such as field staff, remote workers, or contract employees—who need a simple and reliable way to record their daily presence.",
      features: [
        "Secure login and user authentication",
        "Simple and quick attendance marking (with optional location tagging)",
        "Calendar view to check past attendance",
        "Monthly and yearly attendance report generation",
        "GPS-based location capture for field staff (optional)",
        "Data storage with online sync or local offline mode",
        "Role-based access for employees, supervisors, and admin",
        "Export attendance reports for payroll or HR purposes",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.pdrs_Attendance&hl=en_IN",
      image:
        "/images/pdrs_attendance.webp",
    },
    {
      title: "Health Care Anywhere",
      description:
        "Our healthcare app is designed to make medical services more accessible, reliable, and convenient. With a seamless and user-friendly interface, patients can quickly connect with top doctors, order medicines, and manage their health – all in one place.",
      features: [
        "Doctor Appointments",
        "Book appointments with top doctors across multiple specialties.",
        " View doctor availability and schedule in real time.",
        "Get consultation reminders so you never miss an appointment.",
        "Medicine Ordering & Delivery",
        " Order prescribed medicines online with ease.",
        "Upload your prescription directly through the app.",
        "Get medicines delivered to your doorstep quickly and securely.",
        "Receive timely refill reminders for regular medications.",
        "Smart Health Management",
        "Real-time appointment booking with instant confirmation.",
        "Track your medicine orders with live updates.",
        "Secure payment options including digital wallets, cards, and UPI.",
        "Manage all your prescriptions, consultations, and health records in one place.",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.doctorplusmedicare&hl=en_IN",
      image:
        "/images/helth_care.webp",
    },

    {
      title: "Recharge Infotech",
      description:
        "Mobile, DTH, and bill payment services online allow users to conveniently pay their bills and recharge their mobile and DTH plans from the comfort of their own homes. These services typically offer a variety of payment options, such as credit/debit cards, net banking, and digital wallets, making transactions simple and secure.",
      features: [
        "Mobile Recharge",
        "Recharge prepaid and postpaid mobile numbers instantly.",
        "Supports all major telecom operators.",
        "Choose from recommended plans, data packs, and top-ups.",
        "DTH Recharge",
        "Recharge your Direct-To-Home (DTH) service in just a few clicks.",
        "Browse popular plans and channels by provider.",
        "View your account balance and next recharge date.",
        "Utility & Bill Payments",
        "Pay bills for electricity, water, gas, broadband, and more.",
        "Track due dates and get reminders for upcoming bills.",
        "Instantly generate receipts for completed payments.",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.newRechargeInfotech&hl=en_IN",
      image:
        "/images/recharge_infotech.webp",
    },

    {
      title: "Zapptech",
      description:
        "Zapptech is a trusted, easy-to-use, all-in-one solution for your daily recharge and bill payment needs. Whether it's mobile recharges, utility bill payments, or earning cashback on every transaction — Zapptech makes it all simple and rewarding.",
      features: [
        "Mobile Recharge & Bill Payments",
        "Recharge prepaid mobile numbers across all operators",
        "Pay postpaid bills instantly",
        "Get instant cashback on every successful transaction",
        "DTH Recharge",
        "Recharge your favorite DTH services with ease",
        "Utility Bill Payments",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.zapptech&hl=en_IN",
      image:
        "/images/zeptech.webp",
    },

    {
      title: "Doctor4You",
      description:
        "mDoc is a smart online platform that allows patients to book doctor appointments from their homes, eliminating the need to travel and wait in long queues. The primary goal of mDoc is to save time and effort, especially for patients living in rural or remote areas where access to medical services is limited.",
      features: [
        "Online Doctor Appointments",
        "Book appointments with qualified doctors across various specialties",
        "Real-time availability of doctors",
        "Instant confirmation and reminders for scheduled consultations",
        "Easy Access for Rural Areas",
        "Designed to help patients in rural regions who often travel long distances just to book appointments",
        "Saves both time and travel costs",
        "Empowers communities with faster and easier access to healthcare",
        "User-Friendly Experience",
        "Simple interface suitable for all age groups",
        "Multilingual support (optional)",
        "Secure patient-doctor data handling",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.mdocfinder&hl=en_IN",
      image:
      "/images/doctor4you.webp",
    },
  ],
}: ProjectShowcaseProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore my Flutter development projects that showcase my skills in
            building robust, feature-rich mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      objectFit: "contain",
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-slate-800">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-slate-700 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Google Play
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
