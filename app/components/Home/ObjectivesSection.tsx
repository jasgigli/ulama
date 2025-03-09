import React from "react";
import { motion } from "framer-motion";
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
    <Section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        style={{ color: "var(--accent-color)" }}
      >
        ہمارے مقاصد
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {objectives.map((obj, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white bg-opacity-80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-lg"
            >
              {obj}
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ObjectivesSection;
