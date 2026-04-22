import React from 'react';

export const Toggle = ({ enabled, onChange }: { enabled: boolean, onChange: (val: boolean) => void }) => (
  <button 
    onClick={() => onChange(!enabled)}
    className={\w-12 h-6 rounded-full transition-colors \\}
  >
    <div className={\w-4 h-4 bg-white rounded-full transition-transform \\} />
  </button>
);
