"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMosque, FaSchool, FaHandshake, FaUsers } from "react-icons/fa";
import Image from "next/image";

const AreaSection: React.FC = () => {
  // Community highlights
  const communityHighlights = [
    {
      icon: <FaMosque className="text-blue-600" />,
      title: "مساجد",
      description: "ہماری تنظیم مقامی مساجد کے ساتھ مل کر دینی تعلیم اور عبادات کو فروغ دیتی ہے"
    },
    {
      icon: <FaSchool className="text-blue-600" />,
      title: "مدارس",
      description: "ہم مقامی مدارس کے ساتھ تعاون کرکے دینی تعلیم کو معیاری بناتے ہیں"
    },
    {
      icon: <FaHandshake className="text-blue-600" />,
      title: "سماجی ادارے",
      description: "ہم سماجی اداروں کے ساتھ مل کر کمیونٹی کی فلاح و بہبود کے لیے کام کرتے ہیں"
    },
    {
      icon: <FaUsers className="text-blue-600" />,
      title: "کمیونٹی سینٹرز",
      description: "ہمارے کمیونٹی سینٹرز مختلف سماجی اور تعلیمی سرگرمیوں کا مرکز ہیں"
    }
  ];

  return (
    <div>
      {/* Map and Location Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">ہمارا مرکزی دفتر</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  مجلس اتحاد العلماء، خالصہ 2، قاضی آباد، پشاور میں واقع ہے۔ یہ اپنے
                  وسیع جغرافیائی علاقے میں دینی تعلیم اور سماجی ہم آہنگی کو فروغ دیتا
                  ہے۔
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900">رابطہ معلومات</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>فون: 0912345678</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>ای میل: info@majlisulama.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>اوقات کار: صبح 8 بجے سے شام 6 بجے تک</span>
                </li>
              </ul>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block w-fit">
              ہدایات حاصل کریں
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-auto"
          >
            {/* Replace with an actual map or image of your location */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-lg">یہاں نقشہ یا مقام کی تصویر شامل کریں</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Community Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">کمیونٹی کی جھلک</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Impact */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">ہمارا کمیونٹی پر اثر</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              ہماری تنظیم مقامی مساجد، مدارس اور سماجی اداروں کے ساتھ مل کر ایک
              مربوط کمیونٹی بناتی ہے، جس کا مقصد عوام کو باہم منسلک کرنا اور دینی
              اقدار کو فروغ دینا ہے۔ ہم اپنے علاقے میں امن، محبت اور بھائی چارے کو فروغ دینے کے لیے کوشاں ہیں۔
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="bg-blue-600 text-white p-1 rounded-full">✓</span>
                <span className="text-gray-700">دینی تعلیم کا فروغ</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-600 text-white p-1 rounded-full">✓</span>
                <span className="text-gray-700">سماجی ہم آہنگی کی ترویج</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-600 text-white p-1 rounded-full">✓</span>
                <span className="text-gray-700">غرباء و مساکین کی امداد</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-600 text-white p-1 rounded-full">✓</span>
                <span className="text-gray-700">نوجوانوں کی تربیت</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden"
          >
            <Image
              src="/majlis.png"
              alt="Community Impact"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
};

export default AreaSection;
