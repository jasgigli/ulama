import React from "react";
import { FaRocket, FaGlobe } from "react-icons/fa";
import Hero from "../ui/Hero";

const WelcomeSection: React.FC = () => {
  return (
    <Hero
      title="مجلس اتحاد العلماء میں خوش آمدید"
      subtitle="ہماری تنظیم دینی تعلیم، شرعی رہنمائی اور سماجی ہم آہنگی کے فروغ کے لیے پرعزم ہے۔ ہم آپ کو علم، حکمت اور روحانیت کے سفر پر مدعو کرتے ہیں۔"
      imageUrl="/majlis.png"
      primaryButtonText="ہمارے بارے میں"
      primaryButtonHref="/about"
      secondaryButtonText="خدمات دیکھیں"
      secondaryButtonHref="/services"
      height="lg"
      overlay={true}
    />
  );
};

export default WelcomeSection;
