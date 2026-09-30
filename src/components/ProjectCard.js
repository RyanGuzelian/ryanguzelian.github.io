import React from 'react';
import styled from 'styled-components';
import { TextLink, Stack } from './UI';

const Article = styled.article`
  min-width: 0;
  .project-image {
    aspect-ratio: 16 / 10; margin-bottom: 24px; overflow: hidden; background: var(--white);
  }
  img { width: 100%; height: 100%; object-fit: contain; object-position: center; }
  h3 { font-size: clamp(24px, 2.3vw, 30px); margin-bottom: 14px; line-height: 1.2; }
  .description { color: var(--secondary); max-width: 580px; }
  .status { color: var(--secondary); font-size: 15px; margin: 10px 0; }
`;
export default function ProjectCard({ project }) {
  return (
    <Article>
      {project.image && <div className="project-image">
        <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      </div>}
      <h3>{project.title}</h3>
      <p className="description">{project.shortDescription}</p>
      {project.status === 'in-progress' && <p className="status">In progress</p>}
      <Stack>{project.tags.slice(0, 4).join(', ')}</Stack>
      <TextLink href={`#projects/${project.id}`} aria-label={`View project: ${project.title}`}>View project</TextLink>
    </Article>
  );
}
