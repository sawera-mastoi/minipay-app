/**
 * Section.tsx component for layout structure.
 */
import React from 'react';

export const Section = ({ children, className = '', id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={py-16 md:py-24 lg:py-32 \}>
    {children}
  </section>
);
