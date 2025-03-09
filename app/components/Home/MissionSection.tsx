import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaHeart } from "react-icons/fa";
import Section from "../ui/Section";

const MissionSection: React.FC = () => {
  return (
    <Section className="py-20">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "var(--accent-color)" }}
        >
          ہمارا مشن
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-700">
          ہمارا مقصد دینی تعلیم اور شرعی رہنمائی کے ذریعے معاشرے میں مثبت تبدیلی
          لانا ہے۔ ہم ایک جامع پلیٹ فارم فراہم کرتے ہیں جو عوام کو معیاری
          معلومات اور عملی رہنمائی فراہم کرتا ہے تاکہ وہ اپنی زندگیوں میں بہتری
          لا سکیں۔
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <FaBullseye className="text-5xl text-[var(--accent-color)] mb-2" />
            <p className="text-lg font-semibold text-gray-700">
              وضاحت اور فوکس
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <FaHeart className="text-5xl text-[var(--accent-color)] mb-2" />
            <p className="text-lg font-semibold text-gray-700">
              جذبات اور وابستگی
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default MissionSection;
