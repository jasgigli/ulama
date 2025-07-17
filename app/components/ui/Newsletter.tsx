"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: "default" | "card" | "minimal";
}

const Newsletter: React.FC<NterProps> = ({
  title = "ہمارے نیوز لیٹر کے لیے سبسکرائب کریں",
  description = "تازہ ترین خبروں اور اپڈیٹس کے لیے ہمارے نیوز لیٹر میں شامل ہوں",
  className = "",
  variant = "default",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setEmail("");

      setSubmitStatus({
        success: true,
        message: "آپ کو کامیابی سے سبسکرائب کر لیا گیا ہے۔",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "سبسکرائب کرنے میں مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
      })
 finally {
      setIsSubmitting(false);
    }
  };

  // Card variant
  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <FaEnvelope className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {submitStatus.message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              submitStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="آپ کا ای میل ایڈریس"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⟳</span>
                <span>...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>سبسکرائب</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    );
  }

  // Minimal variant
  if (variant === "minimal") {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="آپ کا ای میل ایڈریس"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            {isSubmitting ? "..." : "سبسکرائب"}
          </button>
        </form>

        {submitStatus.message && (
          <div
            className={`mt-2 text-sm ${
              submitStatus.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FaEnvelope className="text-4xl mx-auto mb-4 text-white/80" />
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-white/80 mb-8">{description}</p>

        {submitStatus.message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.success
                ? "bg-green-500/20 text-white"
                : "bg-red-500/20 text-white"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="آپ کا ای میل ایڈریس"
            className="flex-grow px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors duration-300 font-medium flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⟳</span>
                <span>...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>سبسکرائب</span>
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
