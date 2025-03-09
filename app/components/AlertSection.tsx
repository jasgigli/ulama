// app/components/AlertSection.tsx
import React from "react";
import { motion } from "framer-motion";

const AlertSection: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-white px-8 py-6 rounded-2xl shadow-xl slow-bounce max-w-3xl mx-auto"
      role="alert"
    >
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-amber-700 bg-white/90 inline-block px-6 py-3 rounded-full shadow-md tracking-wide">
          ضروری اعلان
        </h2>
      </div>
      <br />

      <p className="text-2xl font-semibold text-center mt-1">
        اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ
      </p>
      <p className="mt-2 leading-relaxed text-center">
        تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی
        بنائیں۔
      </p>
      <br />
      <div className="mt-2 text-center">
        <p className="text-xl text-yellow-200 underline decoration-dotted">
          نوٹ:
        </p>
        <p className="mt-2">
          اجلاس میں صرف اور صرف علماء کرام کے حاضری ضروری ہے باقی دوستوں سے
          معذرت۔
        </p>
        <br />
        <p className="mt-2 text-yellow-200">بوقت:</p>
        <p className="">آج بروز ہفتہ نماز عشاء کے فوراً بعد</p>
        <br />
        <p className="mt-2 text-yellow-200">بمقام:</p>
        <p className="">جامع مسجد احناف لطیف آباد</p>
      </div>
    </div>
  );
};

export default AlertSection;
