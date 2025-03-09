// app/Home/LeadersSection.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Card from "../ui/Section";

interface Leader {
  src: string;
  name: string;
  role: string;
  bio: string;
}

const LeadersSection: React.FC = () => {
  const leaderVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const leaders: Leader[] = [
    {
      src: "/nazirullah.jfif",
      name: "مولانا مفتی نذیر اللہ حقانی صاحب",
      role: "سرپرست",
      bio: "مولانا مفتی نذیر اللہ حقانی صاحب ایک جید عالم دین اور ممتاز شخصیت ہیں۔ آپ کی سرپرستی میں مجلس اتحاد العلماء دینی خدمات سرانجام دے رہی ہے۔",
    },
    {
      src: "/images/leader2.jpg",
      name: "شیخ قرآن و حدیث حضرت مفتی محمد ندیم محمود صاحب",
      role: "سرپرست",
      bio: "شیخ القرآن والحدیث حضرت مفتی محمد ندیم محمود صاحب ایک بلند پایہ عالم دین اور مفسر قرآن ہیں۔ آپ کی رہنمائی میں دینی تعلیمات کا فروغ عمل میں لایا جا رہا ہے۔",
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
      name: "مولانا عبدالحق سرحدی ",
      role: "سیکرٹری اطلاعات",
      bio: "مولانا عبدالحق سرحدی مجلس اتحاد العلماء کے سیکرٹری اطلاعات ہیں۔ آپ تنظیم کی خبروں اور اعلانات کو عوام تک پہنچاتے ہیں۔",
    },
  ];

  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">
        ہمارے راہنما
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            variants={leaderVariant}
            whileHover={{ scale: 1.05 }}
            className="transition duration-300"
          >
            <Card>
              <div className="flex flex-col items-center text-center p-4">
                <Image
                  src={leader.src}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-3 object-cover border-4 border-teal-200"
                  priority={index < 3}
                />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
                <p className="mt-2 text-sm text-justify">{leader.bio}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default LeadersSection;
