import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: var(--primary-color);
  text-align: center;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    margin: 15px auto 0;
    background-color: var(--secondary-color);
  }
`;

const ContactCard = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
  text-align: center;
`;

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 40px;
  line-height: 1.8;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--box-shadow);
    border-color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 15px;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-bg);
  color: var(--primary-color);
  border-radius: 50%;
  margin-right: 20px;
  font-size: 1.2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const InfoDetails = styled.div`
  text-align: left;
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--primary-color);
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: var(--text-color);
    font-size: 1rem;
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialSection = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid var(--light-gray);
`;

const SocialTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  
  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-bg);
    color: var(--primary-color);
    border-radius: 50%;
    transition: var(--transition);
    font-size: 1.2rem;
    text-decoration: none;
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        
        <Row>
          <Col lg={12}>
            <ContactCard>
              <ContactHeading>Get in Touch</ContactHeading>
              <ContactSubtitle>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </ContactSubtitle>
              
              <ContactInfoGrid>
                <ContactInfo>
                  <IconWrapper>
                    <i className="fas fa-envelope"></i>
                  </IconWrapper>
                  <InfoDetails>
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:ryanguzimp@gmail.com">ryanguzimp@gmail.com</a>
                    </p>
                  </InfoDetails>
                </ContactInfo>
                
                <ContactInfo>
                  <IconWrapper>
                    <i className="fas fa-phone-alt"></i>
                  </IconWrapper>
                  <InfoDetails>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+15145894949">+1 (514) 589-4949</a>
                    </p>
                  </InfoDetails>
                </ContactInfo>
                
                <ContactInfo>
                  <IconWrapper>
                    <i className="fas fa-map-marker-alt"></i>
                  </IconWrapper>
                  <InfoDetails>
                    <h4>Location</h4>
                    <p>Montreal, QC, Canada</p>
                  </InfoDetails>
                </ContactInfo>
              </ContactInfoGrid>
              
              <SocialSection>
                <SocialTitle>Connect with me</SocialTitle>
                <SocialLinks>
                  <a href="https://github.com/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/ryanguzelian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </SocialLinks>
              </SocialSection>
            </ContactCard>
          </Col>
        </Row>
      </Container>
    </ContactSection>
  );
};

export default Contact;
