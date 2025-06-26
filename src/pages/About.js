import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 40px;
  margin-bottom: 40px;
`;

const AboutHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
  margin-bottom: 30px;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 500;
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 10px;
  margin-bottom: 20px;
  
  .progress-bar {
    background-color: var(--secondary-color);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  margin-top: 50px;
  padding: 0 150px; /* Further increased to accommodate wider content boxes */
  max-width: 1200px; /* Limit maximum width for better readability on large screens */
  margin-left: auto;
  margin-right: auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--light-gray);
    
    @media (max-width: 768px) {
      left: 30px; /* Moved closer to edge on mobile */
    }
  }
  
  @media (max-width: 992px) {
    padding: 0 100px; /* Mid-size adjustment */
  }
  
  @media (max-width: 768px) {
    padding: 0 15px 0 50px; /* More balanced padding */
    margin-left: 0;
    width: 100%; /* Use full width on mobile */
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 60px;
  display: flex;
  justify-content: ${props => props.position === 'right' ? 'flex-end' : 'flex-start'};
  min-height: 120px; /* Minimum height for consistent spacing */
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 992px) {
    /* Adjust for medium screens */
    min-height: 110px;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    min-height: auto; /* Allow natural height on mobile */
    margin-bottom: 30px; /* Better spacing between items on mobile */
    padding-bottom: 10px;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: 65%; /* Increased from 45% to make boxes wider */
  padding: 25px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  @media (max-width: 768px) {
    width: calc(100% - 60px); /* Adjusted for better fit on mobile */
    margin-left: 60px;
    padding: 15px;
  }    
  &:before {
    content: '';
    position: absolute;
    top: 30px; /* Aligned to match the center of the year text */
    width: 12px;
    height: 12px;
    background-color: var(--primary-color);
    border-radius: 50%;
    z-index: 2;
    
    ${props => props.position === 'left' ? `
      right: -68px;
      @media (max-width: 768px) {
        left: -40px;
        right: auto;
        top: 50%; /* Center vertically on mobile */
        transform: translateY(-50%);
      }
    ` : `
      left: -68px;
      @media (max-width: 768px) {
        left: -40px;
        top: 50%; /* Center vertically on mobile */
        transform: translateY(-50%);
      }
    `}
  }
  &:after {
    content: '';
    position: absolute;
    top: 35px; /* Center of the horizontal line aligned with dot's center */
    height: 2px;
    background-color: var(--light-gray);
    z-index: 1;
    
    ${props => props.position === 'left' ? `
      right: -60px;
      width: 60px; /* Keep consistent width */
      @media (max-width: 768px) {
        left: -32px;
        width: 32px;
        right: auto;
        top: 50%; /* Center vertically on mobile */
      }
    ` : `
      left: -60px;
      width: 60px; /* Keep consistent width */
      @media (max-width: 768px) {
        left: -32px;
        width: 32px;
        top: 50%; /* Center vertically on mobile */
      }
    `}
  }
`;

const TimelineYear = styled.div`
  position: absolute;
  top: 24px; /* Vertically center with the dots */
  font-weight: 700;
  color: var(--primary-color);
  width: 180px; /* Width to fit longer date ranges */
  text-align: ${props => props.position === 'left' ? 'left' : 'right'};
  z-index: 3;
  line-height: 1;
  display: flex;
  align-items: center;
  height: 24px; /* Exact height helps with vertical alignment */
  white-space: nowrap; /* Prevent dates from wrapping to next line */
  
  ${props => props.position === 'left' ? `
    right: -280px; /* Positioned to prevent overlap with dots */
    justify-content: flex-start;
    @media (max-width: 768px) {
      position: relative;
      left: auto;
      right: auto;
      top: 0;
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
      justify-content: flex-start;
      font-size: 0.9rem;
    }
  ` : `
    left: -280px; /* Positioned to prevent overlap with dots */
    justify-content: flex-end;
    @media (max-width: 768px) {
      position: relative;
      left: auto;
      right: auto;
      top: 0;
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
      justify-content: flex-start;
      font-size: 0.9rem;
    }
  `}
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 15px; /* Space between the date and title */
  margin-bottom: 10px;
  color: var(--primary-color);
  clear: both; /* Ensures the title starts on a new line after the date */
  
  @media (max-width: 768px) {
    margin-top: 5px; /* Less space needed on mobile since date is above */
    font-size: 1.1rem;
  }
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 15px;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;

const About = () => {
  const skills = [
    { name: "JavaScript", percent: 90 },
    { name: "React.js", percent: 85 },
    { name: "Node.js", percent: 80 },
    { name: "Java", percent: 75 },
    { name: "MongoDB", percent: 70 },
    { name: "Docker", percent: 65 },
  ];  const education = [
    {
      year: "2025 - 2026",
      title: "Graduate Certificate in Cybersecurity",
      institution: "McGill University",
      description: "BoilerPlate",
      position: "left"
    },
    {
      year: "2022 - 2025",
      title: "Bachelor in Software Engineering",
      institution: "Concordia University",
      description: "Completed a bachelor's degree in Software Engineering with a focus on full-stack development.",
      position: "right"
    },
    {
      year: "2019 - 2021",
      title: "CEGEP Degree in Computer Science and Mathematics",
      institution: "College Name",
      description: "Completed a CEGEP degree in computer science and mathematics",
      position: "left"
    }
  ];
  const experience = [
    {
      year: "May 2024 - Dec. 2024",
      title: "C# Development Intern",
      company: "Dormakaba",
      description: "Developed API calls in a microservice architecture using .NET. Assisted in bug fixes in Angular frontend applications.",
      position: "left"
    },
    {
      year: "May 2023 - Aug. 2023",
      title: "Programmer Analyst Intern",
      company: "Pratt and Whitney Canada",
      description: "Assisted the team in its digital transformation initiative that was implemented through the whole company.",
      position: "right"
    },
    {
      year: "Sep. 2022 - Dec. 2023",
      title: "Full Stack Developer Intern",
      company: "CAE",
      description: "Assisted in full-stack development tasks using React.JS, .NET and SQL. Participated in code reviews and testing.",
      position: "left"
    }
  ];

  return (
    <AboutSection>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <Row>
          <Col lg={12}>
            <AboutContent>
              <AboutHeading>Who I Am</AboutHeading>
              <AboutText>
                Hello! I'm Ryan Guzelian, a passionate Software Engineering Graduate and Web Developer. 
                I'm dedicated to creating efficient and elegant solutions to complex problems through code. 
                My journey in programming started when I was in CEGEP, and since then, I've been constantly 
                learning and improving my skills.
              </AboutText>
              <AboutText>
                I specialize in full-stack web development using modern technologies like React.js, Node.js, and 
                .NET. I'm also experienced in Java programming and have worked with various frameworks and tools. 
                I'm passionate about creating intuitive user experiences and writing clean, maintainable code.
              </AboutText>
              <AboutText>
                When I'm not coding, I enjoy exploring new technologies and solving algorithmic problems.
                I'm always looking for new challenges and opportunities to grow as a developer.
              </AboutText>
            </AboutContent>
          </Col>
        </Row>
          <Row>
          <Col lg={12} className="mb-4">
            <AboutContent>
              <AboutHeading>Education</AboutHeading>
              <TimelineContainer>
                {education.map((item, index) => (
                  <TimelineItem key={index} position={item.position}>
                    <TimelineContent position={item.position}>
                      <TimelineYear position={item.position}>{item.year}</TimelineYear>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineSubtitle>{item.institution}</TimelineSubtitle>
                      <p>{item.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineContainer>
            </AboutContent>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12} className="mb-4">
            <AboutContent>
              <AboutHeading>Professional Experience</AboutHeading>
              <TimelineContainer>
                {experience.map((item, index) => (
                  <TimelineItem key={index} position={item.position}>
                    <TimelineContent position={item.position}>
                      <TimelineYear position={item.position}>{item.year}</TimelineYear>
                      <TimelineTitle>{item.title}</TimelineTitle>
                      <TimelineSubtitle>{item.company}</TimelineSubtitle>
                      <p>{item.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </TimelineContainer>
            </AboutContent>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12}>
            <AboutContent>
              <AboutHeading>Skills</AboutHeading>
              <SkillsContainer>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <SkillName>
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </SkillName>
                    <StyledProgressBar now={skill.percent} />
                  </div>
                ))}
              </SkillsContainer>
            </AboutContent>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
