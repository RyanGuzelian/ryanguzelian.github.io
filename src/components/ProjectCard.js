import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 100%;
  border: none;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    height: 220px;
    object-fit: cover;
    transition: var(--transition);
  }
  
  &:hover .card-img-top {
    transform: scale(1.05);
  }
  
  .card-img-overlay {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: var(--transition);
    
    &:hover {
      opacity: 1;
    }
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-color);
`;

const CardText = styled(Card.Text)`
  color: var(--text-color);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.25rem;
`;

const StyledBadge = styled(Badge).attrs(() => ({
  bg: null,
  pill: true
}))`
  && {
    background-color: var(--light-bg) !important;
    color: var(--primary-color) !important;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    border: 1px solid var(--light-gray);
  }
  
  &.featured {
    background-color: var(--primary-color) !important;
    color: white !important;
    border: none;
  }
    &.in-progress {
    background-color: var(--primary-color) !important;
    color: white !important;
    opacity: 0.85;
    border: none;
  }
  
  &.completed {
    background-color: var(--primary-color) !important;
    color: white !important;
    opacity: 0.7;
    border: none;
  }
`;

const CardFooter = styled(Card.Footer)`
  background-color: var(--white);
  border-top: 1px solid var(--light-gray);
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLink = styled(Button)`
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  
  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    opacity: 0.9;
  }
  
  &.outline {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    margin-right: 0.5rem;
    
    &:hover {
      background-color: var(--primary-color);
      color: white;
      opacity: 1;
    }
  }
`;

/**
 * ProjectCard Component
 * 
 * Displays a project in a card format with image, title, description, tags, status, and links
 * 
 * @param {Object} project - The project data object
 * @param {Function} onViewDetails - Function to call when "View Details" is clicked
 * @param {boolean} featured - Whether to show this card in a featured (larger) format
 */
function ProjectCard({ project, onViewDetails, featured = false }) {
  const { id, title, shortDescription, image, status, tags, links = [] } = project;
  
  // Find GitHub and live links if they exist
  const githubLink = links.find(link => link.type === "github")?.url;
  const liveLink = links.find(link => link.type === "live")?.url;

  return (
    <StyledCard className={featured ? "featured-card" : ""}>
      <div className="position-relative overflow-hidden">
        <Card.Img variant="top" src={image} alt={title} />
      </div>
      
      <Card.Body>
        <CardTitle>{title}</CardTitle>
          <TagsContainer>
          <StyledBadge 
            className={status === "in-progress" ? "in-progress" : "completed"}
          >
            {status === "in-progress" ? "In Progress" : "Completed"}
          </StyledBadge>
            {featured && <StyledBadge className="featured">Featured</StyledBadge>}
          
          {tags.slice(0, 3).map((tag, index) => (
            <StyledBadge key={index}>{tag}</StyledBadge>
          ))}
        </TagsContainer>
        
        <CardText>{shortDescription}</CardText>
      </Card.Body>
      
      <CardFooter>
        <div>
          {githubLink && (
            <CardLink 
              className="outline" 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              size="sm"
            >
              <i className="fab fa-github mr-1"></i> GitHub
            </CardLink>
          )}
          
          {liveLink && (
            <CardLink 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              size="sm"
            >
              <i className="fas fa-external-link-alt mr-1"></i> Live Demo
            </CardLink>
          )}
        </div>
        
        <CardLink 
          variant="primary" 
          onClick={() => onViewDetails(id)}
          size="sm"
        >
          View Details
        </CardLink>
      </CardFooter>
    </StyledCard>
  );
}

export default ProjectCard;
