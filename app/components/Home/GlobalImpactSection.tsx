"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  FaGlobeAmericas,
  FaHandshake,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import Stats from "../ui/Stats";

const GlobalImpactSection: React.FC = () => {
  // Impact statistics
  const impactStats = [
    { value: 50, label: "شراکت دار تنظیمیں", prefix: "+", suffix: "" },
    { value: 10000, label: "مستفید افراد", prefix: "+", suffix: "" },
    { value: 25, label: "ممالک", prefix: "", suffix: "" },
    { value: 100, label: "پروگرامز", prefix: "+", suffix: "" },
  ];

  // Global partners
  const globalPartners = [
    {
      name: "الازہر یونیورسٹی",
      icon: <FaUniversity className="text-blue-600" />,
    },
    {
      name: "عالمی اسلامی فورم",
      icon: <FaGlobeAmericas className="text-blue-600" />,
    },
    { name: "اسلامک ریلیف", icon: <FaHandshake className="text-blue-600" /> },
    { name: "مسلم ایڈ", icon: <FaUsers className="text-blue-600" /> },
  ];

  return (
    <div>
      {/* World Map with Impact Visualization */}
      <div className="mb-16 relative">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                عالمی اثر و رسوخ
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ہماری تنظیم مقامی اور بین الاقوامی سطح پر اپنی خدمات اور شراکت
                داری کے ذریعے اثرانداز ہو رہی ہے۔ ہم دنیا بھر میں مختلف اداروں
                اور کمیونٹیز کے ساتھ مل کر دینی و سماجی اقدار کو فروغ دے رہے
                ہیں۔
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaGlobeAmericas className="text-2xl text-blue-600" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  دنیا بھر میں ہماری پہچان
                </span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white p-1 rounded-full">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    بین الاقوامی کانفرنسز اور سیمینارز
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white p-1 rounded-full">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    عالمی تنظیموں کے ساتھ شراکت داری
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white p-1 rounded-full">
                    ✓
                  </span>
                  <span className="text-gray-700">بین المذاہب مکالمے</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white p-1 rounded-full">
                    ✓
                  </span>
                  <span className="text-gray-700">عالمی سطح پر امدادی کام</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-80 lg:h-auto bg-blue-50"
            >
              {/* Replace with an actual world map visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaGlobeAmericas className="text-6xl text-blue-300 mx-auto mb-4" />
                  <p className="text-gray-600">عالمی نقشہ یہاں شامل کریں</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          ہمارا عالمی اثر
        </h3>
        <Stats items={impactStats} variant="card" columns={4} />
      </motion.div>

      {/* Global Partners */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            ہمارے عالمی شراکت دار
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ہم دنیا بھر کی مختلف تنظیموں کے ساتھ مل کر کام کرتے ہیں تاکہ ہمارے
            مشترکہ مقاصد کو حاصل کیا جا سکے
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <span className="text-3xl">{partner.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                {partner.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalImpactSection;
