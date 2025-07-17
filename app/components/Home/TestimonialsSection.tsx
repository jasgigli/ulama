"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "../ui/Testimonial";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TestimonialItem {
  id: number;
  name: string;
  message: string;
  title?: string;
  imageSrc?: string;
}

const testimonials: TestimonialItem[] =
  {
    id: 1,
    name: "فاطمہ بی بی",
    title: "طالبہ",
    message:
      "مجلس اتحاد العلماء کی رہنمائی نے میری زندگی میں مثبت تبدیلیاں لائی ہیں۔ ان کی خدمات بے مثال ہیں۔ میں نے یہاں سے بہت کچھ سیکھا ہے اور اپنی زندگی میں اس کو عملی طور پر اپنایا ہے۔",
    imageSrc: "/pic.png",
  },
  {
    id: 2,
    name: "علی خان",
    title: "کاروباری شخصیت",
    message:
      "یہ تنظیم نہ صرف دینی تعلیم میں بلکہ سماجی خدمات میں بھی پیش پیش ہے۔ میں ان کی سفارش کرتا ہوں۔ انہوں نے میرے کاروبار میں اخلاقی اصولوں کو اپنانے میں میری مدد کی ہے۔",
    imageSrc: "/pic.png",
  },
  {
    id: 3,
    name: "سارہ رحمانی",
    title: "استاد",
    message:
      "معیاری مشورے اور رہنمائی کی بدولت میں نے اپنے مسائل کا حل تلاش کیا۔ مجلس اتحاد العلماء کی طرف سے فراہم کردہ تعلیمی مواد میرے طلباء کے لیے بہت مفید ثابت ہوا ہے۔",
    imageSrc: "/pic.png",
  },
  {
    id: 4,
    name: "عمران احمد",
    title: "سماجی کارکن",
    message:
      "مجلس اتحاد العلماء کے ساتھ کام کرنا میرے لیے باعث افتخار ہے۔ ان کی سماجی خدمات اور غریبوں کی مدد کے لیے کیے جانے والے کام قابل تحسین ہیں۔",
    imageSrc: "/pic.png",
  },
  {
    id: 5,
    name: "عائشہ محمود",
    title: "گھریلو خاتون",
    message:
      "میں نے مجلس اتحاد العلماء کے آن لائن کورسز سے بہت کچھ سیکھا ہے۔ گھر بیٹھے دینی تعلیم حاصل کرنا میرے لیے بہت آسان ہو گیا ہے۔",
    imageSrc: "/pic.png",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      {/* Featured Testimonial Carousel */}
      <div className="mb-16 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <Testimonial
                quote={testimonials[activeIndex].message}
                name={testimonials[activeIndex].name}
                title={testimonials[activeIndex].title}
                imageSrc={testimonials[activeIndex].imageSrc}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <FaArrowRight />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    idx === activeIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Testimonial
              quote={testimonial.message}
              name={testimonial.name}
              title={testimonial.title}
              imageSrc={testimonial.imageSrc}
              variant="card"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
