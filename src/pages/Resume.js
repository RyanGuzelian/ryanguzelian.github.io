import React from 'react';
import styled from 'styled-components';
import { Container, Page, PageTitle, Intro, Actions, PrimaryLink, TextLink } from '../components/UI';

const ResumePage = styled(Page)`
  .resume-actions { margin: 28px 0 20px; }
  .updated { font-size: 16px; color: var(--secondary); }
  .preview { margin-top: 40px; }
  .preview a { display: block; max-width: 960px; }
  .preview img { width: 100%; border: 1px solid var(--line); background: var(--white); }
  .preview-note { color: var(--secondary); font-size: 16px; margin-top: 16px; }

`;
export default function Resume() {
  const resumeUrl = process.env.PUBLIC_URL + '/Ryan%20Guzelian%20Resume.pdf';
  return (
    <ResumePage><Container>
      <PageTitle tabIndex={-1}>Resume</PageTitle>
      <Intro>My experience, education, and technical background in one place.</Intro>
      <Actions className="resume-actions">
        <PrimaryLink href={resumeUrl} download="Ryan Guzelian Resume.pdf">Download resume</PrimaryLink>
        <TextLink href={resumeUrl} target="_blank" rel="noopener noreferrer">Open PDF</TextLink>
      </Actions>
      <p className="updated">Updated September 2026 · PDF</p>
      <div className="preview">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open full resume PDF"><img src={process.env.PUBLIC_URL + '/resume-preview.png'} alt="Preview of Ryan Guzelian’s one-page resume. Open or download the PDF for the full document." /></a>
        <p className="preview-note">Select the preview to open the full PDF, or download a copy above.</p>
      </div>
    </Container></ResumePage>
  );
}
