import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const WelcomeSection: React.FC = () => {
  return (
    <Section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)] text-white p-12 sm:p-16 rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden"
      >
        <div className="relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            خوش آمدید
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed">
            مجلس اتحاد العلماء کی جدید ویب سائٹ پر آپ کا دل کی گہرائیوں سے
            خیرمقدم ہے۔ ہماری تنظیم دینی تعلیم، شرعی رہنمائی اور سماجی ہم آہنگی
            کے فروغ کے لیے پرعزم ہے۔ آیئے، علم و حکمت کی نئی دنیا میں قدم رکھیں۔
          </p>
        </div>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 bg-black opacity-20"
        />
      </motion.div>
    </Section>
  );
};

export default WelcomeSection;
