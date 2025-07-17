"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaQuoteRight,
  FaTwitter,
} from "react-icons/fa";
import Button from "../ui/Button";

interface Leader {
  src: string;
  name: string;
  role: string;
  bio: string;
  featured?: boolean;
}

const LeadersSection: React.FC = () => {
  const [activeLeader, setActiveLeader] = useState<number | null>(null);

  const leaders: Leader[] = [
    {
      src: "/nazirullah.jfif",
      name: "مولانا مفتی نذیر اللہ حقانی صاحب",
      role: "سرپرست",
      bio: "مولانا مفتی نذیر اللہ حقانی صاحب ایک جید عالم دین اور ممتاز شخصیت ہیں۔ آپ کی سرپرستی میں مجلس اتحاد العلماء دینی خدمات سرانجام دے رہی ہے۔",
      featured: true,
    },
    {
      src: "/pic.png",
      name: "شیخ قرآن و حدیث حضرت مفتی محمد ندیم محمود صاحب",
      role: "سرپرست",
      bio: "شیخ القرآن والحدیث حضرت مفتی محمد ندیم محمود صاحب ایک بلند پایہ عالم دین اور مفسر قرآن ہیں۔ آپ کی رہنمائی میں دینی تعلیمات کا فروغ عمل میں لایا جا رہا ہے۔",
      featured: true,
    },
    {
      src: "/pic.png",
      name: "پیر طریقت حضرت مولانا عبدالبصیر عزیزی صاحب",
      role: "سرپرست",
      bio: "پیر طریقت حضرت مولانا عبدالبصیر عزیزی صاحب ایک روحانی شخصیت اور رہنما ہیں۔ آپ تزکیہ نفس اور روحانی تربیت کے ذریعے لوگوں کی اصلاح کا کام کر رہے ہیں۔",
    },
    {
      src: "/malik.jfif",
      name: "جناب ملک شاہ نواز اعوان صاحب",
      role: "سرپرست",
      bio: "جناب ملک شاہ نواز اعوان صاحب ایک سماجی شخصیت اور مجلس اتحاد العلماء کے اہم رکن ہیں۔ آپ تنظیم کے انتظامی امور میں معاونت فراہم کرتے ہیں۔",
    },
    {
      src: "/pic.png",
      name: "مولانا قاری محمد یونس حقانی صاحب",
      role: "امیر",
      bio: "مولانا قاری محمد یونس حقانی صاحب مجلس اتحاد العلماء کے امیر ہیں۔ آپ تنظیم کی قیادت اور رہنمائی کا فریضہ انجام دے رہے ہیں۔",
      featured: true,
    },
    {
      src: "/sajadsubhan.png",
      name: "پیر طریقت مولانا سید سجاد سبحان صاحب",
      role: "نائب امیر",
      bio: "پیر طریقت مولانا سید سجاد سبحان صاحب مجلس اتحاد العلماء کے نائب امیر ہیں۔ آپ دینی اور روحانی معاملات میں رہنمائی فراہم کرتے ہیں۔",
    },
    {
      src: "/pic.png",
      name: "مولانا قاری داؤد شاہ صاحب",
      role: "نائب امیر",
      bio: "مولانا قاری داؤد شاہ صاحب مجلس اتحاد العلماء کے نائب امیر ہیں۔ آپ تنظیم کے انتظامی امور میں معاونت کرتے ہیں۔",
    },
    {
      src: "/haiderali.png",
      name: "مولانا حیدرعلی اطرافی",
      role: "جنرل سیکرٹری",
      bio: "مولانا حیدر علی اطرافی مجلس اتحاد العلماء کے جنرل سیکرٹری ہیں۔ آپ تنظیم کے انتظامی اور تنظیمی امور کی نگرانی کرتے ہیں۔",
    },
    {
      src: "/qasim.png",
      name: "مولانا مفتی محمد قاسم صاحب",
      role: "جنرل سیکرٹری",
      bio: "مولانا مفتی محمد قاسم صاحب مجلس اتحاد العلماء کے جنرل سیکرٹری ہیں۔ آپ تنظیم کے انتظامی اور تنظیمی امور میں معاونت کرتے ہیں۔",
    },
    {
      src: "/abdulhaq.png",
      name: "مولانا عبدالحق سرحدی",
      role: "سیکرٹری اطلاعات",
      bio: "مولانا عبدالحق سرحدی مجلس اتحاد العلماء کے سیکرٹری اطلاعات ہیں۔ آپ تنظیم کی خبروں اور اعلانات کو عوام تک پہنچاتے ہیں۔",
    },
  ];

  // Featured leaders for the top section
  const featuredLeaders = leaders.filter((leader) => leader.featured);
  // Regular leaders for the grid
  const regularLeaders = leaders.filter((leader) => !leader.featured);

  const openLeaderDetails = (index: number) => {
    setActiveLeader(index);
  };

  const closeLeaderDetails = () => {
    setActiveLeader(null);
  };

  return (
    <div>
      {/* Featured Leaders Carousel */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredLeaders.map((leader, index) => (
            <motion.div
              key={`featured-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-200 mb-3">{leader.role}</p>
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <FaFacebookF className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <FaTwitter className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <FaLinkedinIn className="text-white" />
                    </a>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => openLeaderDetails(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    مزید معلومات
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Regular Leaders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regularLeaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="group"
            onClick={() => openLeaderDetails(index + featuredLeaders.length)}
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
              <div className="relative h-64">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                  {leader.name}
                </h3>
                <p className="text-blue-600 text-sm mb-2">{leader.role}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Leaders Button */}
      <div className="mt-12 text-center">
        <Button href="/leaders" variant="outline" size="lg">
          تمام رہنماؤں کو دیکھیں
        </Button>
      </div>

      {/* Leader Details Modal */}
      <AnimatePresence>
        {activeLeader !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeLeaderDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={
                      activeLeader < leaders.length
                        ? leaders[activeLeader].src
                        : "/pic.png"
                    }
                    alt={
                      activeLeader < leaders.length
                        ? leaders[activeLeader].name
                        : ""
                    }
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <button
                    onClick={closeLeaderDetails}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-800 hover:bg-white"
                  >
                    ×
                  </button>

                  {activeLeader < leaders.length && (
                    <>
                      <h2 className="text-3xl font-bold mb-2 text-gray-900">
                        {leaders[activeLeader].name}
                      </h2>
                      <p className="text-blue-600 text-lg mb-6">
                        {leaders[activeLeader].role}
                      </p>

                      <div className="mb-6">
                        <FaQuoteRight className="text-blue-200 text-4xl mb-4" />
                        <p className="text-gray-700 leading-relaxed">
                          {leaders[activeLeader].bio}
                        </p>
                      </div>

                      <div className="flex space-x-4 mb-6">
                        <a
                          href="#"
                          className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="#"
                          className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="#"
                          className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <button
                          onClick={() =>
                            setActiveLeader((prev) =>
                              prev !== null && prev > 0
                                ? prev - 1
                                : leaders.length - 1
                            )
                          }
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                        >
                          <FaChevronRight /> پچھلا
                        </button>
                        <button
                          onClick={() =>
                            setActiveLeader((prev) =>
                              prev !== null && prev < leaders.length - 1
                                ? prev + 1
                                : 0
                            )
                          }
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                        >
                          اگلا <FaChevronLeft />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadersSection;
