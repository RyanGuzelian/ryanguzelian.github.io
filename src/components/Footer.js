import React from 'react';
import styled from 'styled-components';
import { Container } from './UI';

const Wrapper = styled.footer`
  .footer-inner {
    border-top: 1px solid var(--line); padding: 28px 0 34px;
    display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;
    font-size: 16px; color: var(--secondary);
  }
  .footer-links { display: flex; flex-wrap: wrap; gap: 24px; }
  a { min-height: 44px; display: inline-flex; align-items: center; }
  .credit { display: flex; align-items: center; }
`;
export default function Footer() {
  return (
    <Wrapper>
      <Container><div className="footer-inner">
        <p className="credit">© {new Date().getFullYear()} Ryan Guzelian · Montreal</p>
        <div className="footer-links">
          <a href="mailto:ryanguzimp@gmail.com">Email</a>
          <a href="https://github.com/ryanguzelian" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ryanguzelian" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div></Container>
    </Wrapper>
  );
}
