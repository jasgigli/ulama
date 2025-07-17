"use client";
import React from "react";
import ActivitiesSection from "../components/Home/ActivitiesSection";
import AreaSection from "../components/Home/AreaSection";
import GlobalImpactSection from "../components/Home/GlobalImpactSection";
import LatestNewsSection from "../components/Home/LatestNewsSection";
import LeadersSection from "../components/Home/LeadersSection";
import MissionSection from "../components/Home/MissionSection";
import ObjectivesSection from "../components/Home/ObjectivesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import Section from "../components/ui/Section";

interface SectionConfig {
  component: React.ComponentType;
  key: string;
  id: string;
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "gradient" | "none";
  centered?: boolean;
}

const HomePage = () => {
  // Enhanced section configuration with titles and backgrounds
  const sections: SectionConfig[] = [
    {
      component: WelcomeSection,
      key: "welcome",
      id: "welcome",
      background: "none",
    },
    {
      component: MissionSection,
      key: "mission",
      id: "mission",
      title: "ہمارا مشن",
      subtitle:
        "ہم علم، حکمت اور روحانیت کے ذریعے معاشرے کی تعمیر کے لیے کوشاں ہیں",
      background: "light",
      centered: true,
    },
    {
      component: ObjectivesSection,
      key: "objectives",
      id: "objectives",
      title: "ہمارے مقاصد",
      subtitle: "ہم ان اہداف کے حصول کے لیے پرعزم ہیں",
      background: "white",
    },
    {
      component: LeadersSection,
      key: "leaders",
      id: "leaders",
      title: "ہمارے رہنما",
      subtitle: "ہماری تنظیم کے قابل احترام رہنما",
      background: "gradient",
      centered: true,
    },
    {
      component: ActivitiesSection,
      key: "activities",
      id: "activities",
      title: "ہماری سرگرمیاں",
      subtitle: "ہم معاشرے کی بہتری کے لیے متعدد سرگرمیاں انجام دیتے ہیں",
      background: "white",
    },
    {
      component: AreaSection,
      key: "area",
      id: "area",
      title: "ہمارا کام کا دائرہ",
      subtitle: "ہم ان علاقوں میں خدمات انجام دیتے ہیں",
      background: "light",
    },
    {
      component: LatestNewsSection,
      key: "news",
      id: "news",
      title: "تازہ ترین خبریں",
      subtitle: "ہماری تنظیم کی تازہ ترین سرگرمیوں سے آگاہ رہیں",
      background: "white",
      centered: true,
    },
    {
      component: TestimonialsSection,
      key: "testimonials",
      id: "testimonials",
      title: "لوگوں کی رائے",
      subtitle: "ہماری خدمات سے مستفید ہونے والے افراد کی آراء",
      background: "gradient",
    },
    {
      component: GlobalImpactSection,
      key: "globalimpact",
      id: "globalimpact",
      title: "عالمی اثرات",
      subtitle: "ہماری تنظیم کا عالمی سطح پر اثر و رسوخ",
      background: "light",
      centered: true,
    },
  ];

  return (
    <main>
      {/* Welcome section without container constraints for full-width hero */}
      <div className="mb-0">
        <WelcomeSection />
      </div>

      {/* Rest of the sections with proper spacing and styling */}
      {sections.slice(1).map((section) => {
        const Component = section.component;
        return (
          <Section
            key={section.key}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            background={section.background}
            centered={section.centered}
            spacing="xl"
          >
            <Component />
          </Section>
        );
      })}
    </main>
  );
};

export default HomePage;
