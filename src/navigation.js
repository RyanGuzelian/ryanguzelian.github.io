const pages = new Set(['home', 'projects', 'about', 'resume', 'contact']);

export function readRoute(hash, projects) {
  const [page, id] = hash.replace(/^#/, '').split('/');
  if (!pages.has(page)) return { page: 'home', project: null };
  return {
    page,
    project: page === 'projects' ? projects.find(project => project.id === id) || null : null,
  };
}
