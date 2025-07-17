"use client";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
  background?: "white" | "light" | "gradient" | "none";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  title,
  subtitle,
  centered = false,
  id,
  background = "white",
  spacing = "lg",
}) => {
  // Background variants
  const backgrounds = {
    white: "bg-white",
    light: "bg-blue-50",
    gradient: "bg-gradient-to-b from-white to-blue-50",
    none: "",
  };

  // Spacing variants
  const spacings = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  // Text alignment
  const textAlign = centered ? "text-center" : "text-right";

  // Common classes
  const baseClasses = `
    ${backgrounds[background]}
    ${spacings[spacing]}
    ${className}
  `;

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <section id={id} className={baseClasses}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            className={`mb-12 ${textAlign}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={headerVariants}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
            <div
              className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 ${
                centered ? "mx-auto" : "mr-0"
              }`}
            />
          </motion.div>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
