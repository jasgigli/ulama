import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Section from "../ui/Section";

const AreaSection: React.FC = () => {
  return (
    <Section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        style={{ color: "var(--accent-color)" }}
      >
        ہمارا علاقہ
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-3xl text-[var(--accent-color)]" />
          <p className="text-lg sm:text-xl text-gray-700">
            مجلس اتحاد العلماء، خالصہ 2، قاضی آباد، پشاور میں واقع ہے۔ یہ اپنے
            وسیع جغرافیائی علاقے میں دینی تعلیم اور سماجی ہم آہنگی کو فروغ دیتا
            ہے۔
          </p>
        </div>
        <div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--accent-color)" }}
          >
            کمیونٹی کی جھلک
          </h3>
          <p className="text-lg sm:text-xl text-gray-700">
            ہماری تنظیم مقامی مساجد، مدارس اور سماجی اداروں کے ساتھ مل کر ایک
            مربوط کمیونٹی بناتی ہے، جس کا مقصد عوام کو باہم منسلک کرنا اور دینی
            اقدار کو فروغ دینا ہے۔
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default AreaSection;
