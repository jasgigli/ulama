"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
}) => {
  // Style variants
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  // Size variants
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  // Common classes
  const baseClasses = `
    rounded-lg font-medium transition-all duration-300
    flex items-center justify-center gap-2
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${fullWidth ? "w-full" : ""}
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
};

export default Button;
