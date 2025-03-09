import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import Section from "../ui/Section";

const GlobalImpactSection: React.FC = () => {
  return (
    <Section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-gray-200 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "var(--accent-color)" }}
        >
          عالمی اثر و رسوخ
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700">
          ہماری تنظیم مقامی اور بین الاقوامی سطح پر اپنی خدمات اور شراکت داری کے
          ذریعے اثرانداز ہو رہی ہے۔ ہم دنیا بھر میں مختلف اداروں اور کمیونٹیز کے
          ساتھ مل کر دینی و سماجی اقدار کو فروغ دے رہے ہیں۔
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-4"
        >
          <FaGlobeAmericas className="text-5xl text-[var(--accent-color)]" />
          <span className="text-xl font-bold text-[var(--accent-color)]">
            دنیا بھر میں ہماری پہچان
          </span>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default GlobalImpactSection;
