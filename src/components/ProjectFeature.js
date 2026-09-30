import React from 'react';
import styled from 'styled-components';
import CourtGraphic from './CourtGraphic';
import { Actions, TextLink, Stack } from './UI';

const Feature = styled.article`
  display: grid; grid-template-columns: 1fr 1.16fr; gap: 64px; align-items: center;
  .feature-copy { max-width: 500px; }
  h2, h3 { font-family: var(--display); font-size: clamp(52px, 6vw, 80px); margin-bottom: 20px; }
  .feature-description { font-size: 23px; line-height: 1.45; }
  .feature-note { color: var(--secondary); margin-top: 20px; }
  .court-panel { background: var(--cobalt); color: var(--mist); padding: 36px 22px; }
  @media (max-width: 800px) {
    grid-template-columns: 1fr; gap: 28px;
    .court-panel { padding: 20px 10px; }
  }
`;
export default function ProjectFeature({ project, headingLevel = 'h2' }) {
  const Heading = headingLevel;
  return (
    <Feature>
      <div className="feature-copy">
        <Heading>{project.title}</Heading>
        <p className="feature-description">{project.shortDescription}</p>
        <p className="feature-note">Built with tenant isolation and role-based access at the core.</p>
        <Stack>{project.tags.join(', ')}</Stack>
        <Actions>
          <TextLink href={`#projects/${project.id}`} aria-label={`View project: ${project.title}`}>View project</TextLink>
          <TextLink href={project.links[0].url} target="_blank" rel="noopener noreferrer">Visit Courtsy</TextLink>
        </Actions>
      </div>
      <div className="court-panel"><CourtGraphic /></div>
    </Feature>
  );
}
