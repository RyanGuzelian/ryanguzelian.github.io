import React from "react";
import Window from "../components/Window";
import { Heading, Prose, GroupBox, DefList } from "../styles/win98";
import { about, education, capabilities } from "../data/resume";

/**
 * About — a document window: menu bar, prose, and two group boxes.
 *
 * Every string below is read out of data/resume.js; nothing here is retyped.
 */

/** "a, b, c, and d" — Oxford comma, and it degrades correctly for 1 and 2 items. */
function listWithAnd(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

/**
 * "Credential (detail), years" — the detail clause is dropped entirely when the
 * data has no detail, so no empty parentheses or dangling comma is rendered.
 */
function credentialLine({ credential, detail, years }) {
  const head = detail ? `${credential} (${detail})` : credential;
  return [head, years].filter(Boolean).join(", ");
}

const spoken = capabilities.find((group) => group.label === "Spoken");

export default function AboutWindow(props) {
  return (
    <Window
      {...props}
      title="About Ryan"
      icon="user"
      menu
      status={["Ready", "Montreal, QC"]}
    >
      <Heading>Ryan Guzelian</Heading>

      {about.map((paragraph) => (
        <Prose key={paragraph.slice(0, 32)}>{paragraph}</Prose>
      ))}

      <GroupBox>
        <legend>Education</legend>
        <DefList>
          {education.map((entry) => (
            <React.Fragment key={entry.school}>
              <dt>{entry.school}</dt>
              <dd>{credentialLine(entry)}</dd>
            </React.Fragment>
          ))}
        </DefList>
      </GroupBox>

      {spoken && (
        <GroupBox>
          <legend>Languages spoken</legend>
          <Prose>{listWithAnd(spoken.items)} — all fluent.</Prose>
        </GroupBox>
      )}
    </Window>
  );
}
