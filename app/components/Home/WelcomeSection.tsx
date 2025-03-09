// app/Home/WelcomeSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const WelcomeSection: React.FC = () => {
  return (
    // No need for motion.section here, as the parent HomePage handles animation
    <Section>
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-4">خوش آمدید</h2>
        <p className="text-xl leading-relaxed text-center text-teal-100">
          مجلس اتحاد العلماء کی ویب سائٹ پر خوش آمدید۔ یہ تنظیم خالصہ 2 قاضی
          آباد پشاور کے علماء اور اماموں پر مشتمل ہے، جو اسلامی تعلیمات کے فروغ،
          شرعی مسائل کے حل، اور مسلمانوں کے درمیان اتحاد و یگانگت کے لیے کوشاں
          ہے۔ ہم آپ کو دین کی صحیح رہنمائی فراہم کرنے کے لیے پرعزم ہیں۔
        </p>
      </div>
    </Section>
  );
};

export default WelcomeSection;
