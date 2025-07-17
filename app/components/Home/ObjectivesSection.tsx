import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBookReader, FaHandsHelping, FaUsers, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import Card from "../ui/Card";

const ObjectivesSection: React.FC = () => {
  // Enhanced objectives with icons and descriptions
  const objectives = [
    {
      icon: <FaBookReader />,
      title: "شرعی رہنمائی",
      text: "عوام کو جامع شرعی رہنمائی فراہم کرنا",
      description: "ہم معاشرے کے ہر طبقے کو قرآن و سنت کی روشنی میں جامع رہنمائی فراہم کرتے ہیں"
    },
    {
      icon: <FaGraduationCap />,
      title: "دینی تعلیم",
      text: "معیاری دینی تعلیم اور تربیت کے پروگرامز کا انعقاد",
      description: "ہم اعلیٰ معیار کے تعلیمی پروگرام منعقد کرتے ہیں جو روایتی اور جدید علوم کا امتزاج ہیں"
    },
    {
      icon: <FaUsers />,
      title: "معاشرتی ہم آہنگی",
      text: "معاشرتی ہم آہنگی اور اتحاد کو فروغ دینا",
      description: "ہم مختلف طبقات کے درمیان باہمی احترام اور ہم آہنگی کو فروغ دیتے ہیں"
    },
    {
      icon: <FaLightbulb />,
      title: "مسائل کا حل",
      text: "جدید و روایتی طریقوں کا امتزاج برائے مسائل کا حل",
      description: "ہم روایتی اصولوں کو جدید تقاضوں کے ساتھ ہم آہنگ کرکے مسائل کا حل پیش کرتے ہیں"
    },
    {
      icon: <FaHandsHelping />,
      title: "نوجوانوں کی تربیت",
      text: "نوجوانوں کی اخلاقی اور دینی تربیت کو فروغ دینا",
      description: "ہم نوجوان نسل کی اخلاقی اور دینی تربیت پر خصوصی توجہ دیتے ہیں"
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((objective, index) => (
          <motion.div
            key={objective.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              variant={index % 2 === 0 ? "default" : "elevated"}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-lg">
                    <span className="text-2xl">{objective.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{objective.title}</h3>
                </div>
                <p className="text-lg font-medium text-gray-800 mb-3">{objective.text}</p>
                <p className="text-gray-600 mt-auto">{objective.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 text-center"
      >
        <p className="text-lg md:text-xl text-gray-700">
          یہ مقاصد ہماری تنظیم کی بنیاد ہیں جو نہ صرف دینی بلکہ سماجی تبدیلی اور
          اتحاد کا بھی پیغام دیتے ہیں۔ ہم ان مقاصد کے حصول کے لیے پوری لگن اور محنت سے کام کر رہے ہیں۔
        </p>
      </motion.div>
    </div>
  );
};
};

export default ObjectivesSection;
