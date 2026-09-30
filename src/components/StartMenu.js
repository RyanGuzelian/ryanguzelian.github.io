import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Icon from "./Icons";
import { bevelOut } from "../styles/win98";
import { contact } from "../data/resume";

const Menu = styled.nav`
  position: fixed;
  left: 4px;
  bottom: var(--taskbar-h);
  width: 250px;
  background: var(--face);
  padding: 3px;
  display: flex;
  z-index: 9500;
  ${bevelOut};

  @media (max-width: 820px) {
    width: calc(100% - 8px);
  }
`;

const Rail = styled.div`
  width: 26px;
  flex: none;
  background: linear-gradient(180deg, #808080, #000080);
  color: var(--white);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.06em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 4px;
`;

const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  min-width: 0;
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 10px;
  background: none;
  border: 0;
  font-size: 13px;
  color: var(--ink);
  text-align: left;
  text-decoration: none;
  cursor: default;

  &:hover,
  &:focus-visible {
    background: var(--sel);
    color: var(--white);
    outline: none;
  }

  @media (max-width: 820px) {
    min-height: 44px;
  }
`;

const Separator = styled.div`
  height: 1px;
  margin: 4px 3px;
  border-top: 1px solid var(--shadow);
  border-bottom: 1px solid var(--white);
`;

const ENTRIES = [
  { id: "about", label: "About Ryan", icon: "user" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "skills", label: "Skills", icon: "gear" },
];

export default function StartMenu({ open, onOpenWindow, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) return;
      if (e.target.closest("#startBtn")) return;
      onClose();
    };
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Menu id="startmenu" ref={ref} aria-label="Start menu">
      <Rail>Guzelian 98</Rail>
      <Items>
        {ENTRIES.map((entry) => (
          <Item
            key={entry.id}
            type="button"
            onClick={() => {
              onOpenWindow(entry.id);
              onClose();
            }}
          >
            <Icon name={entry.icon} size={22} />
            {entry.label}
          </Item>
        ))}
        <Separator />
        <Item
          type="button"
          onClick={() => {
            onOpenWindow("contact");
            onClose();
          }}
        >
          <Icon name="mail" size={22} />
          Contact
        </Item>
        <Item
          as="a"
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          <Icon name="pdf" size={22} />
          Resume.pdf
        </Item>
      </Items>
    </Menu>
  );
}
