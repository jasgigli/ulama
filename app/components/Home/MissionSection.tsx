import { motion } from "framer-motion";
import React from "react";
import { FaBookOpen, FaBullseye, FaHandshake, FaHeart } from "react-icons/fa";
import Card from "../ui/Card";

const MissionSection: React.FC = () => {
  // Mission values with icons
  const missionValues = [
    {
      icon: <FaBullseye className="text-4xl text-blue-600" />,
      title: "وضاحت اور فوکس",
      description:
        "ہم اپنے مقاصد کے حصول کے لیے واضح حکمت عملی کے ساتھ کام کرتے ہیں",
    },
    {
      icon: <FaHeart className="text-4xl text-blue-600" />,
      title: "جذبات اور وابستگی",
      description:
        "ہم اپنے کام سے محبت کرتے ہیں اور معاشرے کی بہتری کے لیے پرعزم ہیں",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-600" />,
      title: "تعاون اور یکجہتی",
      description: "ہم مل کر کام کرنے اور آپس میں تعاون کرنے پر یقین رکھتے ہیں",
    },
    {
      icon: <FaBookOpen className="text-4xl text-blue-600" />,
      title: "علم اور حکمت",
      description:
        "ہم علم کی اہمیت کو سمجھتے ہیں اور اسے پھیلانے کے لیے کوشاں ہیں",
    },
  ];

  return (
    <div>
      <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-center text-gray-700">
        ہمارا مقصد دینی تعلیم اور شرعی رہنمائی کے ذریعے معاشرے میں مثبت تبدیلی
        لانا ہے۔ ہم ایک جامع پلیٹ فارم فراہم کرتے ہیں جو عوام کو معیاری معلومات
        اور عملی رہنمائی فراہم کرتا ہے تاکہ وہ اپنی زندگیوں میں بہتری لا سکیں۔
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {missionValues.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              variant="glass"
              className="h-full flex flex-col items-center text-center p-6"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg">
          <p className="text-lg font-medium">
            "ہم علم، حکمت اور روحانیت کے ذریعے معاشرے کی تعمیر کے لیے کوشاں ہیں"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionSection;
