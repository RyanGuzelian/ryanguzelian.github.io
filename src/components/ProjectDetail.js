import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import styled from 'styled-components';

const DetailContainer = styled(Container)`
  padding: 60px 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const ProjectDescription = styled.div`
  margin-bottom: 30px;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const ProjectSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--primary-color);
  padding-bottom: 10px;
  border-bottom: 2px solid var(--light-gray);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledBadge = styled(Badge)`
  && {
    background-color: var(--light-bg);
    color: var(--primary-color);
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid var(--light-gray);
  }
  
  &.status {
    background-color: var(--primary-color);
    color: white;
    opacity: ${props => props.status === 'in-progress' ? '0.85' : '0.7'};
    border: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const BackButton = styled(Button)`
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 10px 25px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const LinkButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: 10px 25px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    opacity: 0.9;
  }
  
  i {
    margin-right: 8px;
  }
`;

/**
 * ProjectDetail Component
 * 
 * Displays detailed information about a specific project
 * 
 * @param {Object} project - The project data object
 * @param {Function} onBack - Function to call when "Back" button is clicked
 */
function ProjectDetail({ project, onBack }) {
  if (!project) return null;
  
  const { 
    title, 
    fullDescription, 
    image, 
    status, 
    tags, 
    links = [],
    technicalDetails,
    challenges
  } = project;
  
  // Find GitHub and live links if they exist
  const githubLink = links.find(link => link.type === "github")?.url;
  const liveLink = links.find(link => link.type === "live")?.url;
  
  return (
    <DetailContainer>
      <Row>
        <Col lg={12} className="mb-4">
          <BackButton onClick={onBack}>
            <i className="fas fa-arrow-left mr-2"></i> Back to Projects
          </BackButton>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col lg={7} className="mb-4">
          <ProjectTitle>{title}</ProjectTitle>
            <TagsContainer>
            <StyledBadge 
              className="status"
              status={status}
            >
              {status === "in-progress" ? "In Progress" : "Completed"}
            </StyledBadge>
              {tags.map((tag, index) => (
              <StyledBadge key={index}>{tag}</StyledBadge>
            ))}
          </TagsContainer>
          
          <ProjectDescription>
            {fullDescription}
          </ProjectDescription>
          
          <ButtonContainer>
            {githubLink && (
              <LinkButton href={githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View on GitHub
              </LinkButton>
            )}
            
            {liveLink && (
              <LinkButton href={liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </LinkButton>
            )}
          </ButtonContainer>
        </Col>
        
        <Col lg={5}>
          <ProjectImage src={image} alt={title} />
        </Col>
      </Row>
      
      {technicalDetails && (
        <Row>
          <Col lg={12}>
            <ProjectSection>
              <SectionTitle>Technical Details</SectionTitle>
              <p>{technicalDetails}</p>
            </ProjectSection>
          </Col>
        </Row>
      )}
      
      {challenges && (
        <Row>
          <Col lg={12}>
            <ProjectSection>
              <SectionTitle>Challenges & Solutions</SectionTitle>
              <p>{challenges}</p>
            </ProjectSection>
          </Col>
        </Row>
      )}
    </DetailContainer>
  );
}

export default ProjectDetail;
