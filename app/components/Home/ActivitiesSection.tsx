import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBook,
  FaComments,
  FaHandsHelping,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import Section from "../ui/Section";

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      title: "شرعی رہنمائی",
      description: "مفتیان کرام کی زیر نگرانی شرعی مسائل کا جامع حل",
      icon: <FaBalanceScale />,
    },
    {
      title: "دینی تعلیم",
      description: "قرآن، حدیث، فقہ اور تفسیر کی معیاری تدریسی پروگرامز",
      icon: <FaBook />,
    },
    {
      title: "اصلاحی بیانات",
      description: "دروس، خطبے اور تقاریر کے ذریعے اخلاقی اقدار کی ترویج",
      icon: <FaComments />,
    },
    {
      title: "سماجی خدمات",
      description: "غرباء و مساکین کی امداد اور ہنگامی حالات میں فوری تعاون",
      icon: <FaHandsHelping />,
    },
    {
      title: "بین المذاہب ہم آہنگی",
      description: "مختلف مذاہب کے درمیان تعاون اور رواداری کو فروغ دینا",
      icon: <FaUsers />,
    },
    {
      title: "نوجوانوں کی رہنمائی",
      description:
        "نوجوانوں کو دینی تعلیم اور سماجی ذمہ داریوں کے لیے تیار کرنا",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <Section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ color: "var(--accent-color)" }}
        >
          ہماری خدمات
        </h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-700">
          ہماری خدمات جدید دور کی ضرورتوں کو مدنظر رکھتے ہوئے جامع اور معیاری
          ہیں۔
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {activities.map((act, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateY: 20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl transform transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl text-[var(--accent-color)]">
                {act.icon}
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--accent-color)" }}
              >
                {act.title}
              </h3>
            </div>
            <p className="text-gray-700 text-base">{act.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ActivitiesSection;
