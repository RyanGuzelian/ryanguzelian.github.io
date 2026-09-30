import styled, { css } from "styled-components";

/**
 * The Windows 98 bevel system and the widgets built from it.
 *
 * Everything in this file exists so that content components never hand-roll a
 * border: a raised surface is `bevelOut`, a sunken one is `bevelIn`, and the
 * widgets below compose those two. If you need a new widget, build it here.
 */

/** Raised: white top-left, black bottom-right, with the inner highlight pair. */
export const bevelOut = css`
  border: 2px solid;
  border-color: var(--white) var(--dark) var(--dark) var(--white);
  box-shadow: inset 1px 1px 0 var(--face-light), inset -1px -1px 0 var(--shadow);
`;

/** Sunken: the same relationship inverted. Used for fields and wells. */
export const bevelIn = css`
  border: 2px solid;
  border-color: var(--shadow) var(--white) var(--white) var(--shadow);
  box-shadow: inset 1px 1px 0 var(--dark), inset -1px -1px 0 var(--face-light);
`;

/** The single-pixel version, for status bar cells and group boxes. */
export const bevelThin = css`
  border: 1px solid;
  border-color: var(--shadow) var(--white) var(--white) var(--shadow);
`;

export const bevelPressed = css`
  border-color: var(--dark) var(--white) var(--white) var(--dark);
  box-shadow: inset 1px 1px 0 var(--shadow), inset -1px -1px 0 var(--face-light);
`;

/** Dotted focus rectangle, drawn inside the control the way Windows does. */
export const focusRing = css`
  &:focus-visible {
    outline: 1px dotted var(--dark);
    outline-offset: -5px;
  }
`;

export const Button = styled.button`
  min-width: 84px;
  padding: 5px 12px;
  background: var(--face);
  ${bevelOut};
  font-family: var(--ui);
  font-size: 12.5px;
  color: var(--ink);
  cursor: default;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:active {
    ${bevelPressed};
    padding: 6px 11px 4px 13px;
  }

  ${focusRing};

  ${({ $default }) =>
    $default &&
    css`
      box-shadow: inset 1px 1px 0 var(--face-light),
        inset -1px -1px 0 var(--shadow), 0 0 0 1px var(--dark);
    `}

  @media (max-width: 820px) {
    min-height: 40px;
  }
`;

/** Anchors that need to look like buttons (resume download, project links). */
export const LinkButton = styled(Button).attrs({ as: "a" })`
  line-height: 1.6;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const GroupBox = styled.fieldset`
  ${bevelThin};
  padding: 14px 12px 12px;
  margin: 14px 0 0;
  min-width: 0;

  > legend {
    padding: 0 4px;
    font-weight: 700;
    font-size: 12.5px;
  }
`;

/** Label/value pairs, the standard layout inside a properties dialog. */
export const DefList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 7px 16px;
  margin: 0;
  font-size: 12.5px;
  min-width: 0;

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 2px 0;

    dd {
      margin-bottom: 8px;
    }
  }
`;

export const Prose = styled.p`
  max-width: 64ch;
  margin: 0 0 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h2`
  margin: 0 0 10px;
  font-size: 15px;
`;

/** A sunken white well — Explorer's file pane, list views, thumbnails. */
export const Field = styled.div`
  background: var(--field);
  ${bevelIn};
  min-height: 0;
`;

export const ListView = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
  background: var(--field);

  th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--face);
    border: 2px solid;
    border-color: var(--white) var(--shadow) var(--shadow) var(--white);
    padding: 3px 7px;
    text-align: left;
    font-weight: 400;
    white-space: nowrap;
  }

  td {
    padding: 3px 7px;
    vertical-align: top;
  }

  tbody tr {
    cursor: default;
  }

  tbody tr:focus-visible {
    outline: 1px dotted var(--dark);
    outline-offset: -2px;
  }

  tbody tr[aria-selected="true"] td {
    background: var(--sel);
    color: var(--white);
  }

  tbody tr[aria-selected="true"] td .sub {
    color: #c8cce8;
  }

  .sub {
    display: block;
    font-size: 12px;
    color: #3a3a3a;
  }

  .nm {
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }

  td.yr {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
`;

export const FileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
  gap: 6px;
  padding: 10px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  }
`;

/** An icon + label, used both on the desktop and inside folder windows. */
export const FileTile = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 7px 4px;
  background: none;
  border: 1px dotted transparent;
  font-family: var(--ui);
  font-size: 12px;
  color: var(--ink);
  text-align: center;
  line-height: 1.25;
  cursor: default;

  .label {
    padding: 1px 3px;
  }

  &:hover .label,
  &:focus-visible .label {
    background: var(--sel);
    color: var(--white);
  }

  &:focus-visible {
    border-color: var(--dark);
    outline: none;
  }

  @media (max-width: 820px) {
    min-height: 78px;
  }
`;

export const TabStrip = styled.div`
  display: flex;
  gap: 2px;
  padding-left: 2px;
  flex-wrap: wrap;
`;

export const Tab = styled.button`
  padding: 4px 12px 5px;
  background: var(--face);
  border: 2px solid;
  border-color: var(--white) var(--dark) transparent var(--white);
  border-radius: 3px 3px 0 0;
  font-family: var(--ui);
  font-size: 12.5px;
  cursor: default;
  position: relative;
  top: 2px;

  &[aria-selected="true"] {
    top: 0;
    padding: 6px 14px 7px;
    font-weight: 700;
    z-index: 2;
  }

  ${focusRing};

  @media (max-width: 820px) {
    min-height: 38px;
  }
`;

export const TabPanel = styled.div`
  border: 2px solid;
  border-color: var(--white) var(--shadow) var(--shadow) var(--white);
  padding: 14px;
  background: var(--face);
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;
