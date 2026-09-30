import React from 'react';
import styled from 'styled-components';
import CourtGraphic from '../components/CourtGraphic';
import ProjectFeature from '../components/ProjectFeature';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { Container, SectionHeading, Actions, PrimaryLink, TextLink } from '../components/UI';

const Hero = styled.section`
  padding: 64px 0 96px;
  .hero-grid { display: grid; grid-template-columns: 1.45fr 1fr; gap: 48px; align-items: center; }
  h1 { font-size: clamp(88px, 10.8vw, 154px); line-height: .9; letter-spacing: -.025em; }
  .hero-copy > p { max-width: 570px; margin: 32px 0; font-size: 23px; color: var(--secondary); }
  .hero-art { min-width: 0; align-self: stretch; display: flex; flex-direction: column; justify-content: center; }
  .art-field {
    position: relative; overflow: hidden; height: 390px; background: var(--cobalt);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
    color: var(--mist);
  }
  .art-field svg { position: absolute; width: 660px; max-width: none; top: 98px; left: 56px; transform: rotate(-18deg); }
  figcaption { margin-top: 22px; padding-left: 20px; color: var(--secondary); font-size: 16px; }
  figcaption a { font-weight: 600; color: var(--navy); }
  @media (max-width: 900px) {
    .hero-grid { gap: 28px; grid-template-columns: 1.2fr 1fr; }
    h1 { font-size: 100px; }
    .art-field { height: 330px; }
    .art-field svg { width: 500px; top: 100px; left: 35px; }
  }
  @media (max-width: 700px) {
    padding: 36px 0 56px;
    .hero-grid { grid-template-columns: 1fr; gap: 38px; }
    h1 { font-size: clamp(80px, 17vw, 116px); }
    .hero-copy > p { font-size: 21px; margin: 26px 0; }
    .art-field { height: 230px; }
    .art-field svg { width: 520px; top: 36px; left: 32px; }
    figcaption { padding-left: 0; }
  }
`;
const WorkSection = styled.section`
  padding: 56px 0 84px; border-top: 1px solid var(--line);
  .section-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; margin-bottom: 48px; flex-wrap: wrap; }
  .other-work { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; margin-top: 64px; }
  @media (max-width: 700px) {
    padding: 40px 0 56px;
    .section-head { margin-bottom: 32px; }
    .other-work { grid-template-columns: 1fr; gap: 44px; margin-top: 44px; }
  }
`;
const Experience = styled.section`
  padding: 68px 0 76px; background: var(--white);
  .experience-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: 80px; }
  .experience-role { font-size: 27px; line-height: 1.2; margin-bottom: 18px; }
  .experience-copy { color: var(--secondary); }
  .experience-copy + .experience-copy { margin-top: 20px; }
  .experience-link { margin-top: 24px; }
  .contact-note { margin-top: 54px; padding-top: 28px; border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; gap: 16px 32px; align-items: center; }
  @media (max-width: 700px) {
    padding: 44px 0; .experience-grid { grid-template-columns: 1fr; gap: 28px; }
  }
`;
export default function Home() {
  return (
    <>
      <Hero><Container><div className="hero-grid">
        <div className="hero-copy">
          <h1 tabIndex={-1}>Software<br />built with<br />care.</h1>
          <p>Software developer in Montreal. Building public APIs in Go at Genetec, and Courtsy, a booking platform for sports facilities.</p>
          <Actions><PrimaryLink href="#projects">Explore my work</PrimaryLink><TextLink href="#resume">Resume</TextLink></Actions>
        </div>
        <figure className="hero-art">
          <div className="art-field"><CourtGraphic /></div>
          <figcaption>A place to play. A product to build.<br /><a href="#projects/courtsy">Meet Courtsy</a></figcaption>
        </figure>
      </div></Container></Hero>
      <WorkSection><Container>
        <div className="section-head"><SectionHeading>Selected work</SectionHeading><TextLink href="#projects">View all work</TextLink></div>
        <ProjectFeature project={projects[0]} headingLevel="h3" />
        <div className="other-work">{projects.filter(project => ['medca', 'attendance'].includes(project.id)).map(project => <ProjectCard project={project} key={project.id} />)}</div>
      </Container></WorkSection>
      <Experience><Container>
        <div className="experience-grid">
          <SectionHeading>Currently at<br />Genetec.</SectionHeading>
          <div>
            <h3 className="experience-role">Software Developer, Go</h3>
            <p className="experience-copy">I’m building an API gateway that exposes internal Security Center SaaS services as public APIs, with a React interface to configure and inspect published endpoints.</p>
            <p className="experience-copy">Before that, I built the mobile test infrastructure and automated 15+ core user flows. Parallel execution cut suite runtime by 60%.</p>
            <TextLink className="experience-link" href="#about">More about my experience</TextLink>
          </div>
        </div>
        <div className="contact-note"><p>Have an engineering opportunity in mind?</p><TextLink href="mailto:ryanguzimp@gmail.com">ryanguzimp@gmail.com</TextLink></div>
      </Container></Experience>
    </>
  );
}
