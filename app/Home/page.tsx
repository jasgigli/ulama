"use client";
import React from "react";
import { motion } from "framer-motion";
import WelcomeSection from "../components/Home/WelcomeSection";
import MissionSection from "../components/Home/MissionSection";
import ObjectivesSection from "../components/Home/ObjectivesSection";
import LeadersSection from "../components/Home/LeadersSection";
import ActivitiesSection from "../components/Home/ActivitiesSection";
import AreaSection from "../components/Home/AreaSection";
import LatestNewsSection from "../components/Home/LatestNewsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import GlobalImpactSection from "../components/Home/GlobalImpactSection";

interface SectionComponent {
  component: React.ComponentType;
  key: string;
  id: string; // For bookmarking
}

const HomePage = () => {
  // Logical order:
  // 1. Welcome (hero)
  // 2. Mission (vision and purpose)
  // 3. Objectives (what we aim to achieve)
  // 4. Leaders (the team behind the organization)
  // 5. Activities (services provided)
  // 6. Area (where we operate)
  // 7. Latest News (updates)
  // 8. Testimonials (social proof)
  // 9. Global Impact (reach and influence)
  const sections: SectionComponent[] = [
    { component: WelcomeSection, key: "welcome", id: "welcome" },
    { component: MissionSection, key: "mission", id: "mission" },
    { component: ObjectivesSection, key: "objectives", id: "objectives" },
    { component: LeadersSection, key: "leaders", id: "leaders" },
    { component: ActivitiesSection, key: "activities", id: "activities" },
    { component: AreaSection, key: "area", id: "area" },
    { component: LatestNewsSection, key: "news", id: "news" },
    { component: TestimonialsSection, key: "testimonials", id: "testimonials" },
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
