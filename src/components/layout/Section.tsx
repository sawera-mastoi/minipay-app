/**
 * Section.tsx component for layout structure.
 */
import React from 'react';

export const Section = ({ children, className = '', id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={py-12 md:py-20 \}>
    {children}
  </section>
);
