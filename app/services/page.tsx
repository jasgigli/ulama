"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";

// Define our services data
interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "شرعی مسائل کا حل",
    description:
      "مفتیان کرام کی موجودگی میں نکاح، طلاق، وراثت، کاروبار، اور دیگر شرعی مسائل کا حل پیش کیا جاتا ہے۔ ہم مستند علماء کرام کے ذریعے شرعی فتاویٰ بھی فراہم کرتے ہیں۔",
  },
  {
    title: "دینی تعلیم",
    description:
      "بچوں اور بڑوں کے لیے قرآن، حدیث، فقہ، اور تفسیر کی تعلیم کا اہتمام کیا جاتا ہے۔ ہم باقاعدہ دینی تعلیم کے کورسز اور ورکشاپس کا انعقاد کرتے ہیں۔",
  },
  {
    title: "اصلاحی بیانات",
    description:
      "جمعہ کے خطبات، دروس، اور دیگر مواقع پر علماء کرام کے ذریعے اصلاحی بیانات کا اہتمام کیا جاتا ہے۔ ان بیانات کا مقصد لوگوں کی اخلاقی تربیت اور معاشرے میں مثبت تبدیلی لانا ہے۔",
  },
  {
    title: "سماجی خدمات",
    description:
      "غرباء و مساکین کی امداد، بیماروں کی عیادت، اور دیگر سماجی کاموں میں بڑھ چڑھ کر حصہ لیا جاتا ہے۔ ہم قدرتی آفات اور ہنگامی صورتحال میں متاثرین کی مدد کے لیے پیش پیش رہتے ہیں۔",
  },
  {
    title: "بین المذاہب ہم آہنگی",
    description:
      "ہم مختلف مذاہب اور مسالک کے درمیان ہم آہنگی اور رواداری کو فروغ دینے کے لیے کوشاں ہیں۔ ہم سمجھتے ہیں کہ ایک پرامن اور خوشحال معاشرے کے لیے بین المذاہب ہم آہنگی نہایت ضروری ہے۔",
  },
  {
    title: "نوجوانوں کی رہنمائی",
    description:
      "ہم نوجوانوں کو دینی تعلیمات سے روشناس کرانے اور انہیں معاشرے کا ایک ذمہ دار شہری بنانے کے لیے خصوصی پروگرام ترتیب دیتے ہیں۔",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          ہم کیا کرتے ہیں
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-center max-w-3xl mx-auto mb-8"
        >
          مجلس اتحاد العلماء علاقے کے لوگوں کو دینی و دنیاوی امور میں رہنمائی
          فراہم کرتی ہے۔
        </motion.p>
      </Section>

      {/* Services Cards Section */}
      <Section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
