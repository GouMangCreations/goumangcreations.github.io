const grid = document.querySelector('#project-grid');

function projectCard(project) {
  return `<article class="project" data-category="${project.category}"><a class="project-trigger" href="projects/${project.slug}.html" aria-label="View ${project.title}"><span class="project-image"><img src="${project.images[0]}" alt="${project.title}"></span><span class="project-meta"><span><span class="project-title">${project.title}</span><span class="project-label">${project.label}</span></span><span class="project-open">View project ↗</span></span></a></article>`;
}

function applyFilter(filter) {
  grid.innerHTML = projects.map(projectCard).join('');
  grid.querySelectorAll('.project').forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
  });
  document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === filter));
}

const requestedFilter = new URLSearchParams(window.location.search).get('filter');
const filter = ['furniture', 'storage', 'objects'].includes(requestedFilter) ? requestedFilter : 'all';
applyFilter(filter);

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const nextFilter = button.dataset.filter;
  history.replaceState(null, '', nextFilter === 'all' ? 'work.html' : `work.html?filter=${nextFilter}`);
  applyFilter(nextFilter);
}));
