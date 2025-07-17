"use client";
import React from "reac
 { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  overlay?: boolean;
  height?: "sm" | "md" | "lg" | "full";
  className?: string;
  imagePosition?: "right" | "left" | "background";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt = "Hero image",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  overlay = true,
  height = "lg",
  className = "",
  imagePosition = "background",
}) => {
  // Height variants
  const heights = {
    sm: "min-h-[400px]",
    md: "min-h-[500px]",
    lg: "min-h-[600px]",
    full: "min-h-screen",
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  // Background image hero
  if (imagePosition === "background" && imageUrl) {
    return (
      <div className={`relative ${heights[height]} flex items-center ${className}`}>
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-xl text-white/90 mb-8"
              >
                {subtitle}
              </motion.p>
            )}
            {(primaryButtonText || secondaryButtonText) && (
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex flex-wrap gap-4"
              >
                {primaryButtonText && primaryButtonHref && (
                  <Button href={primaryButtonHref} size="lg">
                    {primaryButtonText}
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonHref && (
                  <Button
                    href={secondaryButtonHref}
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Split layout hero (text + image side by side)
  return (
    <div className={`${heights[height]} ${className}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          <div className={`${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-xl text-gray-600 mb-8"
              >
                {subtitle}
              </motion.p>
            )}
            {(primaryButtonText || secondaryButtonText) && (
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex flex-wrap gap-4"
              >
                {primaryButtonText && primaryButtonHref && (
                  <Button href={primaryButtonHref} size="lg">
                    {primaryButtonText}
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonHref && (
                  <Button
                    href={secondaryButtonHref}
                    variant="outline"
                    size="lg"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </motion.div>
            )}
          </div>
          {imageUrl && (
            <div className={`${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
