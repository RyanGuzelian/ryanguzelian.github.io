import React from "react";
import styled from "styled-components";
import Window from "../components/Window";
import {
  Heading,
  Prose,
  GroupBox,
  Button,
  ButtonRow,
  Field,
} from "../styles/win98";

/**
 * Project properties — the dialog that opens when a tile in the Projects
 * folder is chosen. No menu bar and no status bar: a properties sheet has
 * neither.
 *
 * Everything is read off the project record handed down by App.
 */

/** The tagline, set quieter than the description it introduces. */
const Tagline = styled.p`
  margin: -4px 0 12px;
  color: var(--shadow);
  max-width: 64ch;
`;

/** A sunken well holding the screenshot, cropped to a stable shape. */
const Shot = styled(Field)`
  margin-bottom: 12px;
  overflow: hidden;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
`;

export default function ProjectDetailWindow({ project, ...chrome }) {
  // App can unset the project a frame before it closes this window.
  if (!project) return null;

  const { title, tagline, description, image, stack, links } = project;

  return (
    <Window {...chrome} title={`${title} Properties`} icon="doc">
      <Heading>{title}</Heading>
      <Tagline>{tagline}</Tagline>

      {image && (
        <Shot>
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        </Shot>
      )}

      <Prose>{description}</Prose>

      <GroupBox>
        <legend>Built with</legend>
        {stack.join(", ")}
      </GroupBox>

      <ButtonRow>
        {links.map((link) => (
          <Button
            key={link.url}
            as="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Button>
        ))}
        <Button type="button" $default onClick={chrome.onClose}>
          OK
        </Button>
      </ButtonRow>
    </Window>
  );
}
