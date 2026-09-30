import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import ProjectFeature from '../components/ProjectFeature';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from '../components/ProjectDetail';
import projects from '../data/projects';
import { Container, Page, PageTitle, Intro, SectionHeading } from '../components/UI';

const Work = styled(Page)`
  .work-intro { margin-bottom: 48px; }
  .filters {
    display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
    gap: 24px; padding: 28px 0; margin: 36px 0 48px; border-bottom: 1px solid var(--line);
  }
  .filter-buttons { display: flex; flex-wrap: wrap; gap: 12px 22px; }
  button { background: none; color: var(--secondary); padding: 7px 0; border: 0; min-height: 44px; }
  button[aria-pressed="true"] { color: var(--navy); text-decoration: underline; text-decoration-color: var(--cobalt); text-underline-offset: 8px; }
  button:hover { color: var(--cobalt); }
  .search-field { display: flex; flex-direction: column; gap: 5px; font-size: 16px; }
  input { background: transparent; border: 0; border-bottom: 1px solid var(--secondary); border-radius: 0; padding: 8px 0; width: 260px; color: var(--navy); }
  .archive-title { margin: 56px 0 32px; }
  .project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px 48px; }
  .empty { padding: 30px 0 70px; }
  .empty button { text-decoration: underline; color: var(--cobalt); margin-top: 12px; }
  @media (max-width: 700px) {
    .project-grid { grid-template-columns: 1fr; gap: 44px; }
    .filters { margin-bottom: 32px; }
    .search-field, input { width: 100%; }
  }
`;
export default function Projects({ selectedProject }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const results = useMemo(() => projects.filter(project => {
    const matchesFilter = filter === 'all' || (filter === 'featured' ? project.featured : project.status === filter);
    const query = search.trim().toLowerCase();
    const matchesSearch = [project.title, project.shortDescription, ...project.tags].join(' ').toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  }), [filter, search]);
  if (selectedProject) return <ProjectDetail project={selectedProject} />;
  const featured = results.find(project => project.id === 'courtsy');
  const otherProjects = results.filter(project => project.id !== 'courtsy');
  return (
    <Work><Container>
      <div className="work-intro"><PageTitle tabIndex={-1}>Work</PageTitle><Intro>Independent products, mobile applications, and earlier experiments. A closer look at what I’ve built.</Intro></div>
      <div className="filters">
        <div className="filter-buttons" role="group" aria-label="Filter projects">
          {[['all', 'All'], ['featured', 'Featured'], ['completed', 'Completed'], ['in-progress', 'In progress']].map(([value, label]) => (
            <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </div>
        <label className="search-field">Search projects<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Name or technology" /></label>
      </div>
      <div aria-live="polite">
        {featured && <ProjectFeature project={featured} />}
        {otherProjects.length > 0 && <>
          <SectionHeading className="archive-title">{filter === 'all' && !search.trim() ? 'More work' : 'Projects'}</SectionHeading>
          <div className="project-grid">{otherProjects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
        </>}
        {results.length === 0 && <div className="empty"><p>No projects match your search.</p><button type="button" onClick={() => { setSearch(''); setFilter('all'); }}>Clear filters</button></div>}
      </div>
    </Container></Work>
  );
}
