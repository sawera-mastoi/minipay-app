/**
 * Toggle.tsx UI component.
 */
import React from 'react';

export const Toggle = ({ enabled, onChange }: { enabled: boolean, onChange: (val: boolean) => void }) => (
  <button 
    onClick={() => onChange(!enabled)}
    className={`w-12 h-6 rounded-full transition-colors ${enabled ? 'bg-yellow-500' : 'bg-neutral-800'}`}
  >
    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${enabled ? 'translate-x-7' : 'translate-x-1'}`} />
  </button>
);
