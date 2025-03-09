// app/components/ui/Section.tsx
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={`py-12 px-4 md:px-8 bg-white rounded-lg shadow-md ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
