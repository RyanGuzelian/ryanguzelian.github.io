import React from "react";

/**
 * Blocky 32px-grid icons drawn to sit next to a Windows 98 bevel. Flat fills,
 * 1px black outlines, no gradients — the era had no anti-aliasing to spare.
 *
 * Render one with <Icon name="folder" size={32} />. Names are listed in NAMES.
 */

const shapes = {
  user: (
    <>
      <rect x="3" y="4" width="26" height="24" fill="#DCDCDC" stroke="#000" strokeWidth="1" />
      <rect x="5" y="6" width="22" height="20" fill="#FFFFFF" />
      <circle cx="16" cy="14" r="5" fill="#0A6E8C" />
      <path d="M8 26c0-5 4-7 8-7s8 2 8 7z" fill="#0A6E8C" />
    </>
  ),
  folder: (
    <>
      <path d="M2 7h10l3 3h15v17H2z" fill="#E8B33C" stroke="#000" strokeWidth="1" />
      <path d="M4 13h24v12H4z" fill="#FFDE7A" />
    </>
  ),
  briefcase: (
    <>
      <rect x="11" y="5" width="10" height="5" fill="none" stroke="#000" strokeWidth="2" />
      <rect x="3" y="9" width="26" height="18" fill="#7A4B1E" stroke="#000" strokeWidth="1" />
      <rect x="3" y="16" width="26" height="3" fill="#000" opacity=".35" />
      <rect x="14" y="15" width="4" height="5" fill="#E8B33C" stroke="#000" strokeWidth="1" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h13l6 6v20H7z" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
      <path d="M20 3v6h6" fill="#DCDCDC" stroke="#000" strokeWidth="1" />
      <g fill="#7A7A7A">
        <rect x="10" y="13" width="13" height="1.6" />
        <rect x="10" y="17" width="13" height="1.6" />
        <rect x="10" y="21" width="9" height="1.6" />
      </g>
    </>
  ),
  mail: (
    <>
      <rect x="3" y="7" width="26" height="18" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
      <path d="M3 7l13 10L29 7" fill="none" stroke="#000" strokeWidth="1.5" />
    </>
  ),
  pc: (
    <>
      <rect x="3" y="5" width="26" height="18" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
      <rect x="5" y="7" width="22" height="14" fill="#0A6E8C" />
      <rect x="11" y="24" width="10" height="3" fill="#A8A8A8" stroke="#000" strokeWidth="1" />
      <rect x="6" y="27" width="20" height="2" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
    </>
  ),
  gear: (
    <>
      <g fill="#808080" stroke="#000" strokeWidth=".8">
        <rect x="14" y="2" width="4" height="5" />
        <rect x="14" y="25" width="4" height="5" />
        <rect x="2" y="14" width="5" height="4" />
        <rect x="25" y="14" width="5" height="4" />
      </g>
      <circle cx="16" cy="16" r="11" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
      <circle cx="16" cy="16" r="4" fill="#808080" stroke="#000" strokeWidth="1" />
    </>
  ),
  pdf: (
    <>
      <path d="M7 3h13l6 6v20H7z" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
      <path d="M20 3v6h6" fill="#DCDCDC" stroke="#000" strokeWidth="1" />
      <rect x="7" y="17" width="19" height="9" fill="#C43B34" stroke="#000" strokeWidth="1" />
      <text x="16.5" y="24.2" fontSize="7" fontFamily="Tahoma, sans-serif" fill="#FFF" textAnchor="middle">
        PDF
      </text>
    </>
  ),
};

export const NAMES = Object.keys(shapes);

export default function Icon({ name, size = 32, ...rest }) {
  const shape = shapes[name] || shapes.doc;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {shape}
    </svg>
  );
}
