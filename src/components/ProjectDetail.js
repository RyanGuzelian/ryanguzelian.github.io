import React from 'react';
import styled from 'styled-components';
import CourtGraphic from './CourtGraphic';
import { Container, Page, PageTitle, Intro, Actions, PrimaryLink, TextLink, Stack, Prose } from './UI';

const Detail = styled(Page)`
  .back { margin-bottom: 28px; }
  .detail-intro { max-width: 850px; }
  .detail-visual { margin: 48px 0; }
  figure.detail-visual { aspect-ratio: 16 / 10; max-height: 600px; overflow: hidden; background: var(--white); }
  .detail-visual img { width: 100%; height: 100%; object-fit: contain; object-position: center; }
  .detail-visual.court { padding: 40px; color: var(--mist); background: var(--cobalt); }
  .detail-visual.court svg { width: min(100%, 880px); margin: 0 auto; }
  .detail-body { max-width: none; }
  @media (max-width: 700px) {
    .detail-visual.court { padding: 20px 8px; }
  }
`;
export default function ProjectDetail({ project }) {
  const sections = [
    ['The problem', project.problem],
    ['My contribution', project.contribution],
    ['Technical decisions', project.technicalDetails],
    ['Outcome', project.outcome],
  ].filter(([, content]) => content);
  return (
    <Detail><Container>
      <TextLink className="back" href="#projects">Back to work</TextLink>
      <div className="detail-intro">
        <PageTitle tabIndex={-1}>{project.title}</PageTitle>
        <Intro>{project.fullDescription}</Intro>
        <Stack>{project.tags.join(', ')}{project.status === 'in-progress' ? ' — In progress' : ''}</Stack>
        <Actions>{(project.links || []).map(link => (
          <PrimaryLink key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label || (link.type === 'github' ? 'View source code' : 'Open live project')}
          </PrimaryLink>
        ))}</Actions>
      </div>
      {project.id === 'courtsy' ? (
        <div className="detail-visual court"><CourtGraphic /></div>
      ) : project.image && (
        <figure className="detail-visual"><img src={project.image} alt={`${project.title} project preview`} /></figure>
      )}
      {sections.length > 0 && <Prose className="detail-body">
        {sections.map(([title, content]) => <section key={title}><h2>{title}</h2><p>{content}</p></section>)}
      </Prose>}
    </Container></Detail>
  );
}
