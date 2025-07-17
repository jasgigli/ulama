"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "glass";
  hover?: boolean;
  onClick?: () => void;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "background";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  onClick,
  image,
  imageAlt = "Card image",
  imagePosition = "top",
}) => {
  // Style variants
  const variants = {
    default: "bg-white shadow-md",
    elevated: "bg-white shadow-lg",
    bordered: "bg-white border border-gray-200",
    glass: "glass-effect",
  };

  // Hover effect
  const hoverEffect = hover
    ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    : "";

  // Common classes
  const baseClasses = `
    rounded-xl overflow-hidden
    ${variants[variant]}
    ${hoverEffect}
    ${onClick ? "cursor-pointer" : ""}
    ${className}
  `;

  // Card with background image
  if (image && imagePosition === "background") {
    return (
      <motion.div
        whileHover={hover ? { scale: 1.02 } : {}}
        className={`${baseClasses} relative`}
        onClick={onClick}
      >
        <div className="absolute inset-0 z-0">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative z-10 p-6 text-white">{children}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={baseClasses}
      onClick={onClick}
    >
      {image && imagePosition === "top" && (
        <div className="relative h-48 w-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">{children}</div>
      {image && imagePosition === "bottom" && (
        <div className="relative h-48 w-full">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
    </motion.div>
  );
};

export default Card;
