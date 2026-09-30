import React from 'react';
import styled from 'styled-components';
import { experience, education, skills } from '../data/profile';
import { Container, Page, PageTitle, Intro, SectionHeading, TextLink, Prose } from '../components/UI';

const AboutPage = styled(Page)`
  .bio { display: grid; grid-template-columns: 1.3fr 1fr; gap: 72px; margin: 32px 0 72px; }
  .bio-note { color: var(--secondary); }
  .about-section { border-top: 1px solid var(--line); padding-top: 40px; margin-top: 64px; }
  .about-section > h2 { margin-bottom: 36px; }
  .entry { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; padding: 30px 0; border-top: 1px solid var(--line); }
  .entry:first-child { border-top: 0; padding-top: 0; }
  .entry h3 { font-size: 25px; line-height: 1.2; margin-bottom: 10px; }
  .entry h4 { font-size: 22px; line-height: 1.3; margin-bottom: 14px; }
  .entry time, .entry .dates { font-size: 16px; color: var(--secondary); }
  .entry ul { margin: 0; padding-left: 20px; color: var(--secondary); }
  .entry li + li { margin-top: 10px; }
  .degree-note { color: var(--secondary); margin-top: 6px; }
  .skill-list { display: grid; grid-template-columns: 1fr 1fr; gap: 28px 64px; margin: 0; }
  .skill-list dt { font-weight: 600; margin-bottom: 8px; }
  .skill-list dd { margin: 0; color: var(--secondary); }
  .languages { margin-top: 36px; color: var(--secondary); }
  @media (max-width: 700px) {
    .bio { grid-template-columns: 1fr; gap: 24px; margin-bottom: 44px; }
    .entry { grid-template-columns: 1fr; gap: 16px; }
    .skill-list { grid-template-columns: 1fr; }
  }
`;
export default function About() {
  return (
    <AboutPage><Container>
      <PageTitle tabIndex={-1}>About</PageTitle>
      <Intro>I’m Ryan, a software developer in Montreal working across backend systems, product interfaces, and test infrastructure.</Intro>
      <div className="bio">
        <Prose><p>At Genetec, I build public APIs in Go and the React tools around them. My earlier work spans .NET services, mobile test automation, and applications used in manufacturing.</p><p>Outside that work, I independently designed, built, and deployed Courtsy. It brought the product and engineering sides together: a booking platform, a CRM, and the authorization that keeps tenants separate.</p></Prose>
        <div className="bio-note"><p>Software engineering at Concordia.<br />Cybersecurity at McGill.</p><TextLink href="#resume">Read my resume</TextLink></div>
      </div>
      <section className="about-section">
        <SectionHeading>Experience</SectionHeading>
        <div>{experience.map(item => <article className="entry" key={item.company + item.role}>
          <div><h3>{item.company}</h3><p className="dates">{item.dates}</p></div>
          <div><h4>{item.role}</h4><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div>
        </article>)}</div>
      </section>
      <section className="about-section">
        <SectionHeading>Education</SectionHeading>
        <div>{education.map(item => <article className="entry" key={item.school}>
          <div><h3>{item.school}</h3><p className="dates">{item.dates}</p></div>
          <div><h4>{item.degree}</h4>{item.note && <p className="degree-note">{item.note}</p>}</div>
        </article>)}</div>
      </section>
      <section className="about-section">
        <SectionHeading>Tools I work with</SectionHeading>
        <dl className="skill-list">{skills.map(([name, tools]) => <div key={name}><dt>{name}</dt><dd>{tools}</dd></div>)}</dl>
        <p className="languages">Fluent in English, French, Arabic, and Armenian.</p>
      </section>
    </Container></AboutPage>
  );
}
