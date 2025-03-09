import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Section from "../ui/Section";

const ObjectivesSection: React.FC = () => {
  const objectives = [
    "عوام کو جامع شرعی رہنمائی فراہم کرنا",
    "معیاری دینی تعلیم اور تربیت کے پروگرامز کا انعقاد",
    "معاشرتی ہم آہنگی اور اتحاد کو فروغ دینا",
    "جدید و روایتی طریقوں کا امتزاج برائے مسائل کا حل",
    "نوجوانوں کی اخلاقی اور دینی تربیت کو فروغ دینا",
  ];

  return (
    <Section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        style={{ color: "var(--accent-color)" }}
      >
        ہمارے مقاصد
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {objectives.map((obj, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              className="flex items-start gap-3 bg-white bg-opacity-80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4"
            >
              <FaCheckCircle className="text-[var(--accent-color)] text-2xl mt-1" />
              <span className="text-lg">{obj}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-3xl mx-auto mt-12 text-center"
      >
        <p className="text-lg sm:text-xl text-gray-700">
          یہ مقاصد ہماری تنظیم کی بنیاد ہیں جو نہ صرف دینی بلکہ سماجی تبدیلی اور
          اتحاد کا بھی پیغام دیتے ہیں۔
        </p>
      </motion.div>
    </Section>
  );
};

export default ObjectivesSection;
