import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ResumeSection = styled.section`
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

const ResumeContent = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 40px;
  margin-bottom: 40px;
`;

const ResumePreview = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 30px;
  border: 1px solid var(--light-gray);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const DownloadButton = styled(Button)`
  background-color: var(--primary-color);
  border: none;
  padding: 10px 25px;
  font-weight: 600;
  margin-top: 20px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    opacity: 0.9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  i {
    margin-right: 8px;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 20px;
  font-style: italic;
  color: #777;
`;

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const resumeUrl = process.env.PUBLIC_URL + "/Ryan Guzelian Resume.pdf";
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ryan Guzelian Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleIframeLoad = () => {
    setLoading(false);
  };
  
  return (
    <ResumeSection>
      <Container>
        <SectionTitle>My Resume</SectionTitle>
        <Row className="justify-content-center">
          <Col lg={10}>
            <ResumeContent>
              <h3 style={{ marginBottom: '20px' }}>Professional Experience & Skills</h3>
              <p>
                Below is a preview of my resume. You can download the PDF version using the button below.
                This document contains detailed information about my professional experience, education, 
                skills, and projects.
              </p>
              
              {loading && <p className="text-center">Loading resume preview...</p>}
              
              <ResumePreview>
                <iframe 
                  title="Resume Preview"
                  src={`${resumeUrl}#toolbar=0&navpanes=0`}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  onLoad={handleIframeLoad}
                />
              </ResumePreview>
              
              <div className="text-center">
                <DownloadButton onClick={handleDownload}>
                  <i className="fas fa-download"></i>
                  Download Resume
                </DownloadButton>
                <Message>
                  This resume was last updated in August 2025.
                </Message>
              </div>
            </ResumeContent>
          </Col>
        </Row>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
