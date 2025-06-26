import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Gif from "../images/ProgrammingGif.gif";
import { Link } from "react-router-dom";

const HeroSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(to right, var(--light-bg), var(--white));
  
  @media (max-width: 768px) {
    padding: 50px 0;
    text-align: center;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  span {
    color: var(--secondary-color);
  }
`;

const HeroSubheading = styled.div`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: var(--text-color);
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 600px;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto 30px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const FeatureSection = styled.section`
  padding: 80px 0;
  background-color: var(--white);
  
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: var(--primary-color);
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    margin: 15px auto 0;
    background-color: var(--secondary-color);
  }
`;

const FeatureCard = styled.div`
  padding: 30px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: 100%;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--primary-color);
`;

const ActionButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  font-weight: 600;
  padding: 10px 25px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    margin-left: 15px;
    
    &:hover {
      color: white;
      background-color: var(--primary-color);
    }
  }
`;

const ButtonGroup = styled.div`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    ${ActionButton}.outline {
      margin-left: 0;
    }
  }
`;

function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <HeroHeading>
                {/* <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I'm ")
                      .typeString("<span>Ryan Guzelian</span>")
                      .start();
                  }}
                /> */}
                 <span>Hi, I'm Ryan Guzelian</span>
              </HeroHeading>
              <HeroSubheading>
                <Typewriter
                  options={{  delay:"20", deleteSpeed:"20", loop:true }}
                  onInit={(typewriter) => {
                    typewriter
                      // .pauseFor(1000)
                      .typeString("Software Engineering Graduate")
                      .pauseFor(1000)
                      .deleteChars(29)
                      .typeString("Full-Stack Developer")
                      .pauseFor(1000)
                      .deleteChars(21)
                      .start();
                  }}
                />
              </HeroSubheading>
              <HeroDescription>
                I'm passionate about creating efficient and elegant solutions to complex problems through code. 
                My portfolio showcases my journey and expertise in software development.
              </HeroDescription>
              <ButtonGroup>
                <ActionButton onClick={() => window.location.hash = "projects"}>View Projects</ActionButton>
                <ActionButton className="outline" onClick={() => window.location.hash = "contact"}>Get In Touch</ActionButton>
              </ButtonGroup>
            </Col>
            <Col lg={6} className="text-center">
              <HeroImage src={Gif} alt="Programming Animation" />
            </Col>
          </Row>
        </Container>
      </HeroSection>
      
      <FeatureSection>
        <Container>
          <SectionTitle>What I Do</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <i className="fas fa-code"></i>
                </FeatureIcon>
                <FeatureTitle>Web Development</FeatureTitle>
                <p>Creating responsive and user-friendly web applications using modern technologies like React.js and Node.js.</p>
              </FeatureCard>
            </Col>
            <Col md={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <i className="fas fa-mobile-alt"></i>
                </FeatureIcon>
                <FeatureTitle>App Development</FeatureTitle>
                <p>Designing intuitive mobile experiences and applications that solve real-world problems.</p>
              </FeatureCard>
            </Col>
            <Col md={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <i className="fas fa-database"></i>
                </FeatureIcon>
                <FeatureTitle>Backend Solutions</FeatureTitle>
                <p>Building robust server-side applications and database solutions using MongoDB and other technologies.</p>
              </FeatureCard>
            </Col>
          </Row>
        </Container>
      </FeatureSection>
    </>
  );
}

export default Home;
