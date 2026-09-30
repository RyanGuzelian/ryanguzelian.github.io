import React from 'react';

// A visual motif for Courtsy, not a screenshot or an architecture diagram.
export default function CourtGraphic({ className }) {
  return (
    <svg className={className} viewBox="0 0 720 420" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="3">
        <path d="M24 24H696V396H24Z" /><path d="M360 24V396" />
        <circle cx="360" cy="210" r="58" />
        <path d="M24 120H140V300H24M696 120H580V300H696" />
        <path d="M24 76C238 76 238 344 24 344M696 76C482 76 482 344 696 344" />
        <path d="M24 175H62V245H24M696 175H658V245H696" />
        <circle cx="78" cy="210" r="7" /><circle cx="642" cy="210" r="7" />
        <path d="M140 150A60 60 0 0 1 140 270M580 150A60 60 0 0 0 580 270" />
        <path d="M140 150A60 60 0 0 0 140 270M580 150A60 60 0 0 1 580 270" strokeDasharray="8 9" />
      </g>
    </svg>
  );
}
