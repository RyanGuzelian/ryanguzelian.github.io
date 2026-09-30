import React from 'react';
import styled from 'styled-components';
import { Container, Page, PageTitle, Intro, TextLink } from '../components/UI';

const ContactPage = styled(Page)`
  .contact-email { font-family: var(--display); font-size: clamp(29px, 5.5vw, 72px); line-height: 1.2; margin: 36px 0 56px; overflow-wrap: anywhere; }
  .contact-email a { color: var(--cobalt); text-decoration-thickness: 2px; }
  .contact-details { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; padding-top: 36px; border-top: 1px solid var(--line); }
  h2 { font-family: var(--body); font-size: 22px; margin-bottom: 16px; }
  .location { color: var(--secondary); }
  .social-links { display: flex; flex-wrap: wrap; gap: 24px; }
  @media (max-width: 700px) { .contact-details { grid-template-columns: 1fr; gap: 30px; } }
`;
export default function Contact() {
  return (
    <ContactPage><Container>
      <PageTitle tabIndex={-1}>Let’s talk.</PageTitle>
      <Intro>For engineering opportunities, product conversations, or a question about my work, email is the best place to start.</Intro>
      <p className="contact-email"><a href="mailto:ryanguzimp@gmail.com">ryanguzimp@gmail.com</a></p>
      <div className="contact-details">
        <section><h2>Based in</h2><p className="location">Montreal, Quebec<br />Canada</p></section>
        <section><h2>Phone</h2><TextLink href="tel:+15145894949">+1 (514) 589-4949</TextLink></section>
        <section><h2>Elsewhere</h2><div className="social-links">
          <TextLink href="https://github.com/ryanguzelian" target="_blank" rel="noopener noreferrer">GitHub</TextLink>
          <TextLink href="https://linkedin.com/in/ryanguzelian" target="_blank" rel="noopener noreferrer">LinkedIn</TextLink>
        </div></section>
      </div>
    </Container></ContactPage>
  );
}
