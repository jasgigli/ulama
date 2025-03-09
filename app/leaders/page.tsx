"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Enhanced Section component with extra shadow and spacing
const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`py-12 px-4 md:px-8 bg-white rounded-xl shadow-lg ${className}`}
    >
      {children}
    </section>
  );
};

// Enhanced Card component with a smooth hover shadow effect
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

interface Leader {
  src: string;
  name: string;
  role: string;
  bio: string;
}

const LeadersPage: React.FC = () => {
  const leaderVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const leaders: Leader[] = [
    {
      src: "/nazirullah.jfif",
      name: "مولانا مفتی نذیر اللہ حقانی صاحب",
      role: "سرپرست",
      bio: "مولانا مفتی نذیر اللہ حقانی صاحب ایک جید عالم دین اور ممتاز شخصیت ہیں۔ آپ کی سرپرستی میں مجلس اتحاد العلماء دینی خدمات سرانجام دے رہی ہے۔",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPWG9sY2QrCB5by8HR--QQ4VbWwdrbjt8lLIZLoDX_OTeI5wkIGvNzwD_JTZ_dXZTXew&usqp=CAU",
      name: "شیخ قرآن و حدیث حضرت مفتی محمد ندیم محمود صاحب",
      role: "سرپرست",
      bio: "شیخ قرآن و حدیث حضرت مفتی محمد ندیم محمود صاحب ایک بلند پایہ عالم دین اور مفسر قرآن ہیں۔",
    },
    {
      src: "/pic.png",
      name: "پیر طریقت حضرت مولانا عبدالبصیر عزیزی صاحب",
      role: "سرپرست",
      bio: "پیر طریقت حضرت مولانا عبدالبصیر عزیزی صاحب ایک روحانی شخصیت ہیں جو تزکیہ نفس اور اصلاح کا کام انجام دیتے ہیں۔",
    },
    {
      src: "/malik.jfif",
      name: "جناب ملک شاہ نواز اعوان صاحب",
      role: "سرپرست",
      bio: "جناب ملک شاہ نواز اعوان صاحب ایک سماجی اور انتظامی شخصیت ہیں جو تنظیم کو مضبوط بنانے میں اہم کردار ادا کرتے ہیں۔",
    },
    {
      src: "/pic.png",
      name: "مولانا قاری محمد یونس حقانی صاحب",
      role: "امیر",
      bio: "مولانا قاری محمد یونس حقانی صاحب تنظیم کے امیر ہیں اور علمی و اخلاقی اقدار کو فروغ دیتے ہیں۔",
    },
    {
      src: "/sajadsubhan.png",
      name: "پیر طریقت مولانا سید سجاد سبحان صاحب",
      role: "نائب امیر",
      bio: "پیر طریقت مولانا سید سجاد سبحان صاحب تنظیم کے نائب امیر ہیں اور دینی امور میں رہنمائی فراہم کرتے ہیں۔",
    },
    {
      src: "/pic.png",
      name: "مولانا قاری داؤد شاہ صاحب",
      role: "نائب امیر",
      bio: "مولانا قاری داؤد شاہ صاحب تنظیم کے نائب امیر ہیں اور انتظامی امور میں معاونت فراہم کرتے ہیں۔",
    },
    {
      src: "/haiderali.png",
      name: "مولانا حیدرعلی اطرافی",
      role: "جنرل سیکرٹری",
      bio: "مولانا حیدرعلی اطرافی تنظیم کے جنرل سیکرٹری ہیں اور تنظیمی امور کی نگرانی کرتے ہیں۔",
    },
    {
      src: "/qasim.png",
      name: "مولانا مفتی محمد قاسم صاحب",
      role: "جنرل سیکرٹری",
      bio: "مولانا مفتی محمد قاسم صاحب تنظیم کے جنرل سیکرٹری ہیں اور روزمرہ امور میں معاونت فراہم کرتے ہیں۔",
    },
    {
      src: "/abdulhaq.png",
      name: "مولانا عبدالحق سرحدی",
      role: "سیکرٹری اطلاعات",
      bio: "مولانا عبدالحق سرحدی تنظیم کی خبروں اور اعلانات کو عوام تک پہنچاتے ہیں۔",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-700">
          ہمارے راہنما
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={leaderVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              className="transition duration-300"
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center p-6">
                  <Image
                    src={leader.src}
                    alt={leader.name}
                    width={120}
                    height={120}
                    className="rounded-full mb-4 object-cover border-4 border-blue-200"
                    priority={index < 3}
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-base text-gray-600 mt-1">{leader.role}</p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LeadersPage;
