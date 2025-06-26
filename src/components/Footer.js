import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const FooterWrapper = styled.footer`
  background-color: var(--white);
  padding: 30px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 50px;
`;

const FooterHeading = styled.h5`
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: var(--text-color);
  display: block;
  margin-bottom: 8px;
  cursor: pointer;
  
  &:hover {
    color: var(--secondary-color);
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--light-gray);
  color: #777;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-gray);
    color: var(--text-color);
    transition: var(--transition);
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
`;

const Footer = ({ changePage }) => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={4} sm={6} className="mb-4">
            <FooterHeading>Ryan Guzelian</FooterHeading>
            <p>Software Engineering Student passionate about creating elegant solutions to complex problems.</p>
            <SocialLinks>
              <a href="https://github.com/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:ryanguzimp@gmail.com" aria-label="Email">
                <i className="far fa-envelope"></i>
              </a>
            </SocialLinks>
          </Col>
            <Col md={2} sm={6} className="mb-4">
            <FooterHeading>Navigation</FooterHeading>
            <FooterLink onClick={() => changePage("home")}>Home</FooterLink>
            <FooterLink onClick={() => changePage("projects")}>Projects</FooterLink>
            <FooterLink onClick={() => changePage("about")}>About</FooterLink>
            <FooterLink onClick={() => changePage("resume")}>Resume</FooterLink>
            <FooterLink onClick={() => changePage("contact")}>Contact</FooterLink>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <FooterHeading>Technologies</FooterHeading>
            <FooterLink href="#">React.js</FooterLink>
            <FooterLink href="#">Node.js</FooterLink>
            <FooterLink href="#">Java</FooterLink>
            <FooterLink href="#">MongoDB</FooterLink>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <FooterHeading>Contact</FooterHeading>
            <p>Feel free to reach out if you have any questions or would like to collaborate.</p>
            <FooterLink href="mailto:ryanguzimp@gmail.com">ryanguzimp@gmail.com</FooterLink>
          </Col>
        </Row>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Ryan Guzelian. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
