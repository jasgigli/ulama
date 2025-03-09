import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const GlobalImpactSection: React.FC = () => {
  return (
    <Section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--accent-color)" }}
        >
          عالمی اثر و رسوخ
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          ہماری تنظیم مقامی اور بین الاقوامی سطح پر اپنی خدمات اور شراکت داری کے
          ذریعے اثرانداز ہو رہی ہے۔ ہم دنیا بھر میں مختلف اداروں اور کمیونٹیز کے
          ساتھ مل کر دینی و سماجی اقدار کو فروغ دے رہے ہیں۔
        </p>
      </motion.div>
    </Section>
  );
};

export default GlobalImpactSection;
