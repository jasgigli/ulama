"use client";
// components/QuestionsAnswersSection.tsx

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Section from "../components/ui/Section";

const accordionData = [
  {
    question: "نماز کیا ہے؟",
    answer:
      "نماز اسلامی عبادات میں سے ایک اہم عبادت ہے جو روزانہ پانچ مرتبہ ادا کی جاتی ہے۔ یہ اللہ تعالیٰ سے براہ راست رابطے کا ذریعہ ہے اور بندہ اپنے رب سے مناجات کرتا ہے۔ نماز نہ صرف روحانی تربیت ہے بلکہ اجتماعی اتحاد کا بھی ذریعہ ہے۔",
  },
  {
    question: "روزہ کیا ہے؟",
    answer:
      "روزہ اسلامی عبادات میں سے ایک ہے جو رمضان المبارک کے مہینے میں فرض ہے۔ صبح صادق سے غروب آفتاب تک کھانے پینے اور نفسانی خواہشات سے پرہیز روزہ کو مکمل کرتا ہے۔ یہ تقویٰ اور صبر پیدا کرنے کا بہترین ذریعہ ہے۔",
  },
  {
    question: "قرآن کیا ہے؟",
    answer:
      "قرآن مسلمانوں کی مقدس کتاب ہے جو اللہ کی طرف سے نازل کی گئی ہدایت ہے۔ یہ زندگی کے ہر پہلو کے لیے رہنمائی فراہم کرتا ہے اور ایمان، عبادت، اخلاق اور معاشرتی اصولوں کی بنیاد ہے۔",
  },
  {
    question: "رسول اللہ صلی اللہ علیہ وآلہ وسلم کیا ہیں؟",
    answer:
      "حضرت محمد ﷺ اللہ کے آخری رسول اور نبی ہیں جنہیں اللہ نے لوگوں کی رہنمائی کے لیے بھیجا۔ ان کی تعلیمات اور اخلاقی مثالیں آج بھی مسلمانوں کے لیے روشنی کا منبع ہیں۔",
  },
  {
    question: "زکواۃ کیا ہے؟",
    answer:
      "زکواۃ ایک مالی عبادت ہے جس کے ذریعے مالدار مسلمان اپنے مال کا ایک حصہ ضرورت مندوں کو دیتے ہیں۔ یہ معاشرتی انصاف اور غربت میں کمی کے لیے ایک اہم ذریعہ ہے۔",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-right focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 text-gray-600 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="py-2 text-gray-700 text-right">{answer}</p>
      </div>
    </div>
  );
};

const CustomAccordion: React.FC = () => {
  return (
    <div className="divide-y divide-gray-200">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

const faq: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <Section>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8">
          سوالات اور جوابات
        </h2>
        <CustomAccordion />
      </Section>
    </div>
  );
};

export default faq;
