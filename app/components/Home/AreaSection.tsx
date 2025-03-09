// app/Home/AreaSection.tsx
import React from "react";
import Section from "../ui/Section";

const AreaSection: React.FC = () => {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">
        ہمارا علاقہ
      </h2>
      <p className="text-lg leading-relaxed text-justify">
        مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع ہے۔ یہ تنظیم علاقے
        کی مختلف مساجد کے جید علماء کرام اور ائمہ مساجد کی نمائندگی کرتی ہے۔
        ہماری تنظیم علاقے کے لوگوں کو دینی رہنمائی فراہم کرنے اور ان کے مسائل کو
        حل کرنے کے لیے ایک متحدہ پلیٹ فارم ہے۔
      </p>
    </Section>
  );
};

export default AreaSection;
