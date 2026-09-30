import React from "react";
import styled from "styled-components";
import Icon from "./Icons";
import { contact } from "../data/resume";

/**
 * Icons run down the left edge on desktop, the way a real desktop arranges
 * them, which leaves the whole remaining area to windows. On mobile they
 * become a grid across the top, above the stacked windows.
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
  gap: 2px;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;

  @media (min-width: 821px) {
    grid-template-columns: 84px;
    grid-auto-flow: row;
    width: 84px;
    gap: 4px;
    margin-bottom: 0;
  }
`;

const Tile = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 2px;
  background: none;
  border: 1px dotted transparent;
  color: var(--white);
  font-size: 12px;
  text-align: center;
  line-height: 1.25;
  text-decoration: none;
  cursor: default;
  min-height: 76px;

  .label {
    padding: 1px 3px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.55);
  }

  &:hover .label,
  &:focus-visible .label {
    background: var(--sel);
    text-shadow: none;
  }

  &:focus-visible {
    border-color: var(--white);
    outline: none;
  }

  @media (min-width: 821px) {
    width: 84px;
    min-height: 0;
  }
`;

const ENTRIES = [
  { id: "about", label: "About Ryan", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "skills", label: "Skills", icon: "gear" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export default function DesktopIcons({ onOpenWindow }) {
  return (
    <Grid>
      {ENTRIES.map((entry) => (
        <Tile key={entry.id} type="button" onClick={() => onOpenWindow(entry.id)}>
          <Icon name={entry.icon} size={32} />
          <span className="label">{entry.label}</span>
        </Tile>
      ))}
      <Tile
        as="a"
        href={contact.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="pdf" size={32} />
        <span className="label">Resume.pdf</span>
      </Tile>
    </Grid>
  );
}
