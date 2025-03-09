import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const MissionSection: React.FC = () => {
  return (
    <Section className="py-16">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--accent-color)" }}
        >
          ہمارا مشن
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          ہمارا مقصد دینی تعلیم اور شرعی رہنمائی کے ذریعے معاشرے میں مثبت تبدیلی
          لانا ہے۔ ہم ایک جامع پلیٹ فارم فراہم کرتے ہیں جو عوام کو معیاری
          معلومات اور عملی رہنمائی فراہم کرتا ہے تاکہ وہ اپنی زندگیوں میں بہتری
          لا سکیں۔
        </p>
      </motion.div>
    </Section>
  );
};

export default MissionSection;
