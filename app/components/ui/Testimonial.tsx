"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  imageSrc?: string;
  variant?: "default" | "card" | "minimal";
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  imageSrc,
  variant = "default",
  className = "",
}) => {
  // Render different variants
  if (variant === "card") {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
      >
        <div className="flex justify-end mb-4">
          <FaQuoteRight className="text-blue-200 text-4xl" />
        </div>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">{quote}</p>
        <div className="flex items-center">
          {imageSrc && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            {title && <p className="text-gray-600 text-sm">{title}</p>}
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`${className}`}>
        <p className="text-gray-700 mb-4 italic">&ldquo;{quote}&rdquo;</p>
        <p className="text-gray-900 font-medium">— {name}{title && `, ${title}`}</p>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {imageSrc && (
        <divme="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <FaQuoteRight className="text-blue-200 text-3xl mb-4" />
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{quote}</p>
      <h4 className="font-bold text-gray-900">{name}</h4>
      {title && <p className="text-gray-600">{title}</p>}
    </div>
  );
};

export default Testimonial;
