// app/Home/ActivitiesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const ActivitiesSection: React.FC = () => {
  return (
    <Section>
      <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">ہم کیا کرتے ہیں</h2>
        <p className="text-lg leading-relaxed text-justify">
          مجلس اتحاد العلماء علاقے کے لوگوں کو مختلف دینی و دنیاوی معاملات میں
          رہنمائی فراہم کرتی ہے۔ ہم درج ذیل خدمات پیش کرتے ہیں:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-4 text-justify">
          <li>
            <strong className="text-white">شرعی مسائل کا حل:</strong> مفتیان
            کرام کی موجودگی میں نکاح، طلاق، وراثت، کاروبار، اور دیگر شرعی مسائل
            کا حل پیش کیا جاتا ہے۔ ہم مستند علماء کرام کے ذریعے شرعی فتاویٰ بھی
            فراہم کرتے ہیں۔
          </li>
          <li>
            <strong className="text-white">دینی تعلیم:</strong> بچوں اور بڑوں کے
            لیے قرآن، حدیث، فقہ، اور تفسیر کی تعلیم کا اہتمام کیا جاتا ہے۔ ہم
            باقاعدہ دینی تعلیم کے کورسز اور ورکشاپس کا انعقاد کرتے ہیں۔
          </li>
          <li>
            <strong className="text-white">اصلاحی بیانات:</strong> جمعہ کے
            خطبات، دروس، اور دیگر مواقع پر علماء کرام کے ذریعے اصلاحی بیانات کا
            اہتمام کیا جاتا ہے۔ ان بیانات کا مقصد لوگوں کی اخلاقی تربیت اور
            معاشرے میں مثبت تبدیلی لانا ہے۔
          </li>
          <li>
            <strong className="text-white">سماجی خدمات:</strong> غرباء و مساکین
            کی امداد، بیماروں کی عیادت، اور دیگر سماجی کاموں میں بڑھ چڑھ کر حصہ
            لیا جاتا ہے۔ ہم قدرتی آفات اور دیگر ہنگامی صورتحال میں بھی متاثرین
            کی مدد کے لیے پیش پیش رہتے ہیں۔
          </li>
          <li>
            <strong className="text-white">بین المذاہب ہم آہنگی:</strong> ہم
            مختلف مذاہب اور مسالک کے درمیان ہم آہنگی اور رواداری کو فروغ دینے کے
            لیے کوشاں ہیں۔ ہم سمجھتے ہیں کہ ایک پرامن اور خوشحال معاشرے کے لیے
            بین المذاہب ہم آہنگی نہایت ضروری ہے۔
          </li>
          <li>
            <strong className="text-white">نوجوانوں کی رہنمائی:</strong> ہم
            نوجوانوں کو دینی تعلیمات سے روشناس کرانے اور انہیں معاشرے کا ایک ذمہ
            دار شہری بنانے کے لیے خصوصی پروگرام ترتیب دیتے ہیں۔
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default ActivitiesSection;
