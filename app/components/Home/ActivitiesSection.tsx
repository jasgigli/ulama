"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBalanceScale,
  FaBook,
  FaComments,
  FaHandsHelping,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import Button from "../ui/Button";

const ActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activities = [
    {
      title: "شرعی رہنمائی",
      description: "مفتیان کرام کی زیر نگرانی شرعی مسائل کا جامع حل",
      icon: <FaBalanceScale className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم معاشرے کے ہر طبقے کو قرآن و سنت کی روشنی میں جامع رہنمائی فراہم کرتے ہیں۔ ہمارے مفتیان کرام روزمرہ زندگی کے مسائل کا شرعی حل پیش کرتے ہیں۔ ہم آن لائن اور آف لائن دونوں طریقوں سے شرعی مسائل کا حل فراہم کرتے ہیں۔",
    },
    {
      title: "دینی تعلیم",
      description: "قرآن، حدیث، فقہ اور تفسیر کی معیاری تدریسی پروگرامز",
      icon: <FaBook className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم اعلیٰ معیار کے تعلیمی پروگرام منعقد کرتے ہیں جو روایتی اور جدید علوم کا امتزاج ہیں۔ ہمارے پروگرامز میں قرآن، حدیث، فقہ، تفسیر اور دیگر دینی علوم شامل ہیں۔ ہم بچوں، نوجوانوں اور بالغوں کے لیے مختلف سطحوں پر تعلیمی پروگرام پیش کرتے ہیں۔",
    },
    {
      title: "اصلاحی بیانات",
      description: "دروس، خطبے اور تقاریر کے ذریعے اخلاقی اقدار کی ترویج",
      icon: <FaComments className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم باقاعدگی سے دروس، خطبے اور تقاریر کا انعقاد کرتے ہیں جن میں اخلاقی اقدار کی ترویج کی جاتی ہے۔ ہمارے علماء کرام معاشرتی مسائل پر روشنی ڈالتے ہیں اور ان کا حل پیش کرتے ہیں۔ ہم آن لائن پلیٹ فارمز پر بھی اپنے بیانات شیئر کرتے ہیں۔",
    },
    {
      title: "سماجی خدمات",
      description: "غرباء و مساکین کی امداد اور ہنگامی حالات میں فوری تعاون",
      icon: <FaHandsHelping className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم غرباء و مساکین کی امداد اور ہنگامی حالات میں فوری تعاون فراہم کرتے ہیں۔ ہم زکوٰۃ، صدقات اور عطیات کی تقسیم کا انتظام کرتے ہیں۔ ہم قدرتی آفات کے متاثرین کی امداد کے لیے ریلیف کیمپ لگاتے ہیں۔",
    },
    {
      title: "بین المذاہب ہم آہنگی",
      description: "مختلف مذاہب کے درمیان تعاون اور رواداری کو فروغ دینا",
      icon: <FaUsers className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم مختلف مذاہب کے درمیان تعاون اور رواداری کو فروغ دیتے ہیں۔ ہم بین المذاہب مکالمے اور کانفرنسز کا انعقاد کرتے ہیں۔ ہم امن و محبت کے پیغام کو پھیلانے کے لیے کوشاں ہیں۔",
    },
    {
      title: "نوجوانوں کی رہنمائی",
      description:
        "نوجوانوں کو دینی تعلیم اور سماجی ذمہ داریوں کے لیے تیار کرنا",
      icon: <FaLightbulb className="text-blue-600" />,
      image: "/majlis.png",
      details:
        "ہم نوجوانوں کو دینی تعلیم اور سماجی ذمہ داریوں کے لیے تیار کرتے ہیں۔ ہم نوجوانوں کے لیے خصوصی پروگرام منعقد کرتے ہیں جن میں انہیں دینی اور دنیاوی علوم سے آگاہ کیا جاتا ہے۔ ہم نوجوانوں کو معاشرے میں مثبت کردار ادا کرنے کے لیے تیار کرتے ہیں۔",
    },
  ];

  return (
    <div>
      {/* Interactive Services Tabs */}
      <div className="mb-16">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {activities.map((activity, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activity.title}
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 md:h-auto"
            >
              <Image
                src={activities[activeTab].image}
                alt={activities[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-4">
                    {activities[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {activities[activeTab].title}
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {activities[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activities[activeTab].details}
              </p>
              <Button
                href={`/services#${activities[activeTab].title}`}
                variant="outline"
              >
                مزید معلومات <FaArrowLeft className="mr-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className="p-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
                <span className="text-2xl">{activity.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {activity.title}
              </h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <a
                href={`/services#${activity.title}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                مزید معلومات <FaArrowLeft className="mr-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-700 mb-6">
          ہماری خدمات کے بارے میں مزید معلومات حاصل کرنے کے لیے ہم سے رابطہ کریں
        </p>
        <Button href="/contact" size="lg">
          ہم سے رابطہ کریں
        </Button>
      </motion.div>
    </div>
  );
};

export default ActivitiesSection;
