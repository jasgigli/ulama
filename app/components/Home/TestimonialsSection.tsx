import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";

interface Testimonial {
  id: number;
  name: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "فاطمہ بی بی",
    message:
      "مجلس اتحاد العلماء کی رہنمائی نے میری زندگی میں مثبت تبدیلیاں لائی ہیں۔ ان کی خدمات بے مثال ہیں۔",
  },
  {
    id: 2,
    name: "علی خان",
    message:
      "یہ تنظیم نہ صرف دینی تعلیم میں بلکہ سماجی خدمات میں بھی پیش پیش ہے۔ میں ان کی سفارش کرتا ہوں۔",
  },
  {
    id: 3,
    name: "سارہ رحمانی",
    message:
      "معیاری مشورے اور رہنمائی کی بدولت میں نے اپنے مسائل کا حل تلاش کیا۔",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <Section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        style={{ color: "var(--accent-color)" }}
      >
        ہمارے تاثرات
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md"
          >
            <p className="text-lg text-gray-700 mb-4">“{t.message}”</p>
            <p
              className="text-right font-semibold"
              style={{ color: "var(--accent-color)" }}
            >
              - {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
