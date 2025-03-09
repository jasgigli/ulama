import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe } from "react-icons/fa";
import Section from "../ui/Section";

const WelcomeSection: React.FC = () => {
  return (
    <Section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 1.05 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)] text-white p-12 sm:p-16 rounded-3xl shadow-2xl max-w-6xl mx-auto overflow-hidden transform perspective-1000"
      >
        <div className="relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 flex items-center justify-center gap-3">
            <FaRocket className="text-4xl" /> خوش آمدید{" "}
            <FaGlobe className="text-4xl" />
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8">
            مجلس اتحاد العلماء کی جدید ویب سائٹ پر آپ کا دل کی گہرائیوں سے
            خیرمقدم ہے۔ ہماری تنظیم دینی تعلیم، شرعی رہنمائی اور سماجی ہم آہنگی
            کے فروغ کے لیے پرعزم ہے۔
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[var(--accent-color)] font-bold rounded-full shadow-lg transition-transform"
            >
              ہمارے بارے میں
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[var(--accent-color)] font-bold rounded-full shadow-lg transition-transform"
            >
              مزید پڑھیں
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 bg-black opacity-25"
        />
      </motion.div>
    </Section>
  );
};

export default WelcomeSection;
