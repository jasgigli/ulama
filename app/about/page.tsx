"use client";

import React from "react";
import { motion } from "framer-motion";

// Hero Section with a full-width gradient background
const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white text-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold">ہمارے بارے میں</h1>
      <p className="mt-4 text-2xl">
        ہمارے مشن، تاریخ اور ہماری ٹیم کا مختصر جائزہ
      </p>
    </motion.section>
  );
};

// Introduction Section
const IntroSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 md:px-8 bg-white"
    >
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
        تنظیم کا تعارف
      </h2>
      <p className="text-xl leading-relaxed text-right max-w-4xl mx-auto">
        مجلس اتحاد العلماء ایک غیر سرکاری، غیر سیاسی، اور غیر منافع بخش تنظیم ہے
        جو خالصہ 2، قاضی آباد، پشاور کے علماء کرام اور ائمہ مساجد پر مشتمل ہے۔
        اس تنظیم کا مقصد دینی تعلیم کے فروغ، شرعی مسائل کے حل اور مسلمانوں میں
        اتحاد و یگانگت کو فروغ دینا ہے۔
      </p>
    </motion.section>
  );
};

// Mission Section
const MissionSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 md:px-8 bg-gray-50"
    >
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
        ہمارا مشن
      </h2>
      <ul className="list-disc list-inside text-xl leading-relaxed text-right max-w-3xl mx-auto">
        <li>اسلامی اقدار کو فروغ دینا</li>
        <li>دینی تعلیمات سے عوام کو روشناس کرانا</li>
        <li>
          شرعی اور معاشرتی مسائل کا اسلامی اصولوں کی روشنی میں حل پیش کرنا
        </li>
      </ul>
    </motion.section>
  );
};

// History Section
const HistorySection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 md:px-8 bg-white"
    >
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
        ہماری تاریخ
      </h2>
      <p className="text-xl leading-relaxed text-right max-w-4xl mx-auto">
        ہماری تنظیم کی بنیاد ایک ایسے وژن سے رکھی گئی کہ علماء کرام ایک پلیٹ
        فارم پر آ کر دینی اور دنیاوی مسائل کا حل تلاش کریں۔ گزشتہ سالوں میں ہم
        نے متعدد تعلیمی، اصلاحی اور سماجی پروگراموں کا انعقاد کیا ہے جنہوں نے نہ
        صرف ہمارے علاقے میں بلکہ وسیع پیمانے پر مثبت اثرات مرتب کیے ہیں۔
      </p>
    </motion.section>
  );
};

// Call to Action Section
const CallToActionSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 md:px-8 bg-blue-600 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-4">ہماری ٹیم میں شامل ہوں</h2>
      <p className="text-2xl mb-8">
        اگر آپ ہمارے مقاصد کے لیے اپنا تعاون دینا چاہتے ہیں تو براہ کرم ہم سے
        رابطہ کریں۔
      </p>
      <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow hover:bg-blue-100 transition">
        ابھی شامل ہوں
      </button>
    </motion.section>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <IntroSection />
      <MissionSection />
      <HistorySection />
      <CallToActionSection />
    </div>
  );
};

export default AboutPage;
