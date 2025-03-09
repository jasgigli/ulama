import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

const AreaSection: React.FC = () => {
  return (
    <Section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-8"
        style={{ color: "var(--accent-color)" }}
      >
        ہمارا علاقہ
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg sm:text-xl leading-relaxed text-justify max-w-3xl mx-auto"
      >
        مجلس اتحاد العلماء، خالصہ 2، قاضی آباد، پشاور میں واقع ایک ممتاز تنظیم
        ہے جو مقامی سطح پر دینی تعلیم، شرعی رہنمائی اور سماجی ہم آہنگی کو فروغ
        دیتی ہے۔ ہماری شراکت داری مقامی مساجد، مدارس اور سماجی اداروں کے ساتھ مل
        کر ایک مربوط پلیٹ فارم فراہم کرتی ہے۔
      </motion.p>
    </Section>
  );
};

export default AreaSection;
