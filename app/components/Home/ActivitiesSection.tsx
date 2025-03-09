import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      title: "شرعی رہنمائی",
      description: "مفتیان کرام کی زیر نگرانی شرعی مسائل کا جامع حل",
    },
    {
      title: "دینی تعلیم",
      description: "قرآن، حدیث، فقہ اور تفسیر کی معیاری تدریسی پروگرامز",
    },
    {
      title: "اصلاحی بیانات",
      description: "دروس، خطبے اور تقاریر کے ذریعے اخلاقی اقدار کی ترویج",
    },
    {
      title: "سماجی خدمات",
      description: "غرباء و مساکین کی امداد اور ہنگامی حالات میں فوری تعاون",
    },
    {
      title: "بین المذاہب ہم آہنگی",
      description: "مختلف مذاہب کے درمیان تعاون اور رواداری کو فروغ دینا",
    },
    {
      title: "نوجوانوں کی رہنمائی",
      description:
        "نوجوانوں کو دینی تعلیم اور سماجی ذمہ داریوں کے لیے تیار کرنا",
    },
  ];

  return (
    <Section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ color: "var(--accent-color)" }}
        >
          ہماری خدمات
        </h2>
        <p className="text-lg sm:text-xl mt-4">
          ہم ایسے معیاری خدمات فراہم کرتے ہیں جو دینی و سماجی معیار کو بلند کرتے
          ہیں۔
        </p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {activities.map((act, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
          >
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--accent-color)" }}
            >
              {act.title}
            </h3>
            <p className="text-gray-700 text-base">{act.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ActivitiesSection;
