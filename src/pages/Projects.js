import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import projectsData from "../data/projects";

const ProjectsSection = styled.section`
  padding: 60px 0;
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

const FiltersContainer = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 20px;
  margin-bottom: 30px;
`;

const FilterNav = styled(Nav)`
  .nav-link {
    color: var(--text-color);
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 500;
    margin-right: 10px;
    
    &.active {
      background-color: var(--primary-color);
      color: white;
    }
    
    &:hover:not(.active) {
      background-color: var(--light-gray);
    }
  }
`;

const SearchInput = styled(InputGroup)`
  max-width: 300px;

  .form-control {
    border-radius: 20px 0 0 20px;
    border: 1px solid var(--light-gray);
    padding: 0.5rem 1rem;
    
    &:focus {
      box-shadow: none;
      border-color: var(--primary-color);
    }
  }
  
  .input-group-text {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
    border-radius: 0 20px 20px 0;
  }
`;

const CardGrid = styled(Row)`
  margin-bottom: 30px;
`;

/**
 * Projects Component
 * 
 * Displays a list of projects with filtering options
 * and detailed view functionality
 */
function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // Apply filters whenever filter or search term changes
  useEffect(() => {
    let results = projectsData;
    
    // Apply status filter
    if (filter === "in-progress") {
      results = results.filter(project => project.status === "in-progress");
    } else if (filter === "completed") {
      results = results.filter(project => project.status === "completed");
    } else if (filter === "featured") {
      results = results.filter(project => project.featured);
    }
    
    // Apply search filter if there's a search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.shortDescription.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(results);
  }, [filter, searchTerm]);
  
  // Handle viewing project details
  const handleViewDetails = (projectId) => {
    const project = projectsData.find(proj => proj.id === projectId);
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };
  
  // Handle going back to project list
  const handleBack = () => {
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };
  
  // Separate featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  
  return (
    <ProjectsSection>
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        
        {/* If a project is selected, show its details */}
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBack} />
        ) : (
          <>
            {/* Filter and search controls */}
            <FiltersContainer>
              <Row className="align-items-center">
                <Col md={7} className="mb-3 mb-md-0">
                  <FilterNav variant="pills">
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "all"}
                        onClick={() => setFilter("all")}
                      >
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "featured"}
                        onClick={() => setFilter("featured")}
                      >
                        Featured
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "in-progress"}
                        onClick={() => setFilter("in-progress")}
                      >
                        In Progress
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        active={filter === "completed"}
                        onClick={() => setFilter("completed")}
                      >
                        Completed
                      </Nav.Link>
                    </Nav.Item>
                  </FilterNav>
                </Col>
                <Col md={5}>
                  <SearchInput>
                    <Form.Control 
                      placeholder="Search projects..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <InputGroup.Text>
                      <i className="fas fa-search"></i>
                    </InputGroup.Text>
                  </SearchInput>
                </Col>
              </Row>
            </FiltersContainer>
            
            {/* Featured Projects Section (Only shown when filter is "all" or "featured" AND no search is active) */}
            {(filter === "all" || filter === "featured") && featuredProjects.length > 0 && searchTerm.trim() === "" && (
              <>
                <h3 className="mb-4">Featured Projects</h3>
                <CardGrid>
                  {featuredProjects.map((project) => (
                    <Col lg={6} md={12} className="mb-4" key={project.id}>
                      <ProjectCard 
                        project={project} 
                        onViewDetails={handleViewDetails} 
                        featured={true} 
                      />
                    </Col>
                  ))}
                </CardGrid>
              </>
            )}
            
            {/* All Projects Section */}
            {filter !== "featured" && (
              <>
                <h3 className="mb-4">
                  {filter === "all" ? "All Projects" : 
                   filter === "in-progress" ? "In Progress Projects" : 
                   "Completed Projects"}
                </h3>
                <CardGrid>
                  {filteredProjects.map((project) => (
                    <Col lg={4} md={6} className="mb-4" key={project.id}>
                      <ProjectCard 
                        project={project} 
                        onViewDetails={handleViewDetails} 
                      />
                    </Col>
                  ))}
                </CardGrid>
                
                {/* Show message when no projects match the filters */}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-5">
                    <h4>No projects found matching your criteria.</h4>
                    <p>Try adjusting your filters or search terms.</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
