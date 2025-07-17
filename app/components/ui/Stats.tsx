"use client";
import React from "react";
t { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsProps {
  items: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "card" | "minimal";
  className?: string;
}

const Stats: React.FC<StatsProps> = ({
  items,
  columns = 4,
  variant = "default",
  className = "",
}) => {
  // Animation for counting up
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Grid columns based on prop
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  // Variants
  if (variant === "card") {
    return (
      <div
        ref={ref}
        className={`grid ${gridCols[columns]} gap-6 ${className}`}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {item.prefix}
              {isInView ? item.value : 0}
              {item.suffix}
            </p>
            <p className="text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div
        ref={ref}
        className={`grid ${gridCols[columns]} gap-6 ${className}`}
      >
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {item.prefix}
              {isInView ? item.value : 0}
              {item.suffix}
            </p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div
      ref={ref}
      className={`grid ${gridCols[columns]} gap-8 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold">
              {item.prefix}
              {isInView ? item.value : 0}
              {item.suffix}
            </span>
          </div>
          <p className="text-lg font-medium text-gray-900">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
