import React from "react";

interface SectionProps {
  id: string;
  bg: string;
}

const Section: React.FC<SectionProps> = ({ id, bg }) => {
  return (
    <section id={id} className={`h-96 ${bg} flex items-center justify-center`}>
      <h2>{id}</h2>
    </section>
  );
};

export default Section;
