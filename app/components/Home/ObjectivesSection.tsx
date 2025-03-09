// app/Home/ObjectivesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const ObjectivesSection: React.FC = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">
        ہمارے مقاصد
      </h2>
      <ul className="list-disc list-inside text-lg space-y-3">
        {/* Individual motion.li for each list item */}
        <motion.li
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="transition duration-300"
        >
          علماء کرام کے ذریعے عوام الناس کو درپیش شرعی مسائل کا حل فراہم کرنا۔
        </motion.li>
        <motion.li
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="transition duration-300"
        >
          علاقے میں دینی تعلیم و تربیت کے پروگراموں کا انعقاد کرنا۔
        </motion.li>
        <motion.li
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="transition duration-300"
        >
          مسلمانوں کے درمیان اتحاد و اتفاق کو فروغ دینا اور فرقہ واریت کا خاتمہ
          کرنا۔
        </motion.li>
        <motion.li
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="transition duration-300"
        >
          معاشرے میں پیدا ہونے والے سماجی مسائل کا اسلامی تعلیمات کی روشنی میں
          حل پیش کرنا۔
        </motion.li>
        <motion.li
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="transition duration-300"
        >
          نوجوان نسل کی دینی تربیت اور کردار سازی پر خصوصی توجہ دینا۔
        </motion.li>
      </ul>
    </Section>
  );
};

export default ObjectivesSection;
