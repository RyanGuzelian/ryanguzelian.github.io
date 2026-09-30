import React from "react";
import styled, { css } from "styled-components";
import Icon from "./Icons";
import { bevelOut, bevelPressed, bevelThin } from "../styles/win98";

/**
 * Window chrome: title bar, optional menu bar, body, optional status bar.
 *
 * Content components never manage position or z-order — the manager in
 * useWindows passes `geometry` and the callbacks, and this component draws the
 * frame around whatever children it is given.
 *
 * Above 820px a window is absolutely positioned and draggable by its title bar.
 * Below that it is a static full-width panel in the document flow, because a
 * draggable desktop is unusable on a phone.
 */

const Frame = styled.section`
  background: var(--face);
  padding: 3px;
  margin: 0 0 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${bevelOut};

  /* Minimized windows stay mounted so their state survives the trip. */
  &[hidden] {
    display: none;
  }

  @media (min-width: 821px) {
    position: absolute;
    margin: 0;
  }

  @media (max-width: 820px) {
    /* Geometry is desktop-only; never let inline styles leak to mobile. */
    left: auto !important;
    top: auto !important;
    width: 100% !important;
    height: auto !important;
    z-index: auto !important;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 3px 3px 4px;
  background: linear-gradient(90deg, var(--title-a1), var(--title-a2));
  color: var(--white);
  font-weight: 700;
  font-size: 12.5px;
  user-select: none;
  flex: none;
  cursor: default;

  ${({ $active }) =>
    !$active &&
    css`
      background: linear-gradient(90deg, var(--title-i1), var(--title-i2));
      color: #d8d8d8;
    `}
`;

const TitleText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TitleButtons = styled.span`
  display: flex;
  gap: 2px;
  flex: none;
`;

const ChromeButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  background: var(--face);
  ${bevelOut};
  display: grid;
  place-items: center;
  cursor: default;
  color: var(--dark);

  &:active {
    ${bevelPressed};
  }

  &:focus-visible {
    outline: 1px dotted var(--dark);
    outline-offset: -4px;
  }

  /* 16px is authentic and unusable with a thumb. */
  @media (max-width: 820px) {
    width: 30px;
    height: 28px;
  }
`;

const GlyphMinimize = styled.i`
  display: block;
  width: 8px;
  height: 2px;
  margin-top: 6px;
  background: var(--dark);
`;

const GlyphMaximize = styled.i`
  display: block;
  width: 9px;
  height: 8px;
  border: 1px solid var(--dark);
  border-top-width: 2px;
`;

const GlyphClose = styled.i`
  display: block;
  width: 9px;
  height: 9px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    width: 10px;
    height: 1.5px;
    background: var(--dark);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const MenuBar = styled.div`
  display: flex;
  gap: 2px;
  padding: 2px 1px;
  font-size: 12.5px;
  flex: none;

  span {
    padding: 2px 7px;
  }

  span:hover {
    background: var(--sel);
    color: var(--white);
  }

  u {
    text-decoration: underline;
  }

  /* Decorative on desktop, pure noise on a phone. */
  @media (max-width: 820px) {
    display: none;
  }
`;

const Body = styled.div`
  background: ${({ $field }) => ($field ? "var(--field)" : "var(--face)")};
  padding: ${({ $field }) => ($field ? "0" : "12px 14px")};
  overflow: auto;
  flex: 1;
  min-height: 0;

  @media (max-width: 820px) {
    padding: ${({ $field }) => ($field ? "0" : "12px")};
  }
`;

const StatusBar = styled.div`
  display: flex;
  gap: 3px;
  padding: 3px 2px 1px;
  font-size: 12px;
  flex: none;

  span {
    padding: 2px 6px;
    ${bevelThin};
  }

  span:first-child {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const MENU_ITEMS = [
  ["F", "ile"],
  ["E", "dit"],
  ["V", "iew"],
  ["H", "elp"],
];

export default function Window({
  id,
  title,
  icon = "doc",
  active,
  hidden,
  geometry,
  menu = false,
  field = false,
  status,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onDragStart,
  children,
}) {
  const labelId = `wintitle-${id}`;

  return (
    <Frame
      id={`win-${id}`}
      hidden={hidden}
      style={geometry}
      aria-labelledby={labelId}
      className={active ? "active" : "inactive"}
      onMouseDown={onFocus}
    >
      <TitleBar $active={active} onMouseDown={onDragStart}>
        <Icon name={icon} size={16} />
        <TitleText id={labelId}>{title}</TitleText>
        <TitleButtons>
          {onMinimize && (
            <ChromeButton type="button" aria-label={`Minimize ${title}`} onClick={onMinimize}>
              <GlyphMinimize />
            </ChromeButton>
          )}
          {onMaximize && (
            <ChromeButton type="button" aria-label={`Maximize ${title}`} onClick={onMaximize}>
              <GlyphMaximize />
            </ChromeButton>
          )}
          <ChromeButton type="button" aria-label={`Close ${title}`} onClick={onClose}>
            <GlyphClose />
          </ChromeButton>
        </TitleButtons>
      </TitleBar>

      {menu && (
        <MenuBar aria-hidden="true">
          {MENU_ITEMS.map(([k, rest]) => (
            <span key={k}>
              <u>{k}</u>
              {rest}
            </span>
          ))}
        </MenuBar>
      )}

      <Body $field={field}>{children}</Body>

      {status && (
        <StatusBar>
          {status.map((cell, i) => (
            <span key={i}>{cell}</span>
          ))}
        </StatusBar>
      )}
    </Frame>
  );
}
