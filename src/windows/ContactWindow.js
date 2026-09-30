import React from "react";
import Window from "../components/Window";
import {
  Prose,
  GroupBox,
  DefList,
  Button,
  ButtonRow,
} from "../styles/win98";
import { contact, profile } from "../data/resume";

/**
 * Contact — a dialog: no menu bar, no status bar, one group box of details and
 * a row of actions. Every address comes from data/resume.js.
 */

export default function ContactWindow(props) {
  return (
    <Window {...props} title="Contact" icon="mail">
      <Prose>
        Open to backend, platform, and security engineering work. Email is the
        fastest way to reach me.
      </Prose>

      <GroupBox>
        <legend>Details</legend>
        <DefList>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>

          <dt>LinkedIn</dt>
          <dd>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              {contact.linkedinLabel}
            </a>
          </dd>

          <dt>GitHub</dt>
          <dd>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.githubLabel}
            </a>
          </dd>

          <dt>Location</dt>
          <dd>{profile.location}</dd>
        </DefList>
      </GroupBox>

      <ButtonRow>
        <Button as="a" $default href={`mailto:${contact.email}`}>
          Email Ryan
        </Button>
        <Button
          as="a"
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume.pdf
        </Button>
        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </ButtonRow>
    </Window>
  );
}
