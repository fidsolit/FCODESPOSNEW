// File: pages/Services.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Custom websites tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile app solutions.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Modern, user-friendly interface designs.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with SEO and social media.",
    icon: "📈",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure services.",
    icon: "☁️",
  },

  {
    title: "E-commerce Solutions",
    description: "Robust online stores to drive your business growth.",
    icon: "🛒",
  },
  {
    title: "Laptop and Computer Repair",
    description: "We repair laptops and Computers.",
    icon: "💻🛠",
  },
  {
    title: "CCTV INSTALLATION",
    description: "We install CCTV for your security.",
    icon: "🖲",
  },

  {
    title: "Point of Sale",
    description: "We create POS for your business.",
    icon: " 📠",
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We provide top-notch solutions to help your business thrive.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg border border-gray-200 transition-shadow"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Framer Motion Variants
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default Services;
