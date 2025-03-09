"use client";
import React from "react";
import { motion } from "framer-motion";
import WelcomeSection from "../components/Home/WelcomeSection";
import LatestNewsSection from "../components/Home/LatestNewsSection";
import ObjectivesSection from "../components/Home/ObjectivesSection";
import AreaSection from "../components/Home/AreaSection";
import LeadersSection from "../components/Home/LeadersSection";
import ActivitiesSection from "../components/Home/ActivitiesSection";
// import AlertSection from "../components/AlertSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import MissionSection from "../components//Home/MissionSection";
import GlobalImpactSection from "../components/Home/GlobalImpactSection";

interface SectionComponent {
  component: React.ComponentType;
  key: string;
  id: string; // For bookmarking
}

const HomePage = () => {
  const sections: SectionComponent[] = [
    { component: WelcomeSection, key: "welcome", id: "welcome" },
    // { component: AlertSection, key: "alert", id: "alert" },
    { component: ObjectivesSection, key: "objectives", id: "objectives" },
    { component: AreaSection, key: "area", id: "area" },
    { component: LeadersSection, key: "leaders", id: "leaders" },
    { component: ActivitiesSection, key: "activities", id: "activities" },
    { component: LatestNewsSection, key: "news", id: "news" },
    { component: TestimonialsSection, key: "testimonials", id: "testimonials" },
    { component: MissionSection, key: "mission", id: "mission" },
    { component: GlobalImpactSection, key: "globalimpact", id: "globalimpact" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <main className="container mx-auto py-12 space-y-16">
      {sections.map((section) => {
        const Component = section.component;
        return (
          <motion.section
            key={section.key}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id={section.id}
            className="px-4"
          >
            <Component />
          </motion.section>
        );
      })}
    </main>
  );
};

export default HomePage;
