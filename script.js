const grid = document.querySelector('#project-grid');

function projectCard(project) {
  return `<article class="project" data-category="${project.category}"><a class="project-trigger" href="projects/${project.slug}.html" aria-label="View ${project.title}"><span class="project-image"><img src="${project.images[0]}" alt="${project.title}"></span><span class="project-meta"><span><span class="project-title">${project.title}</span><span class="project-label">${project.label}</span></span><span class="project-open">View project ↗</span></span></a></article>`;
}

function renderProjects(filter = 'all') {
  grid.innerHTML = projects.map(projectCard).join('');
  grid.querySelectorAll('.project').forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
  });
}

renderProjects();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  renderProjects(button.dataset.filter);
}));

const heroSlides = projects.map(project => ({ image: project.images[0], title: project.title }));
const heroImage = document.querySelector('#hero-slide');
const heroCaption = document.querySelector('#hero-caption');
const heroCount = document.querySelector('#hero-count');
let currentSlide = 0;

function showHeroSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[currentSlide];
  heroImage.style.opacity = '0';
  window.setTimeout(() => {
    heroImage.src = slide.image;
    heroImage.alt = slide.title;
    heroCaption.textContent = slide.title;
    heroCount.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`;
    heroImage.style.opacity = '1';
  }, 180);
}

document.querySelector('#hero-previous').addEventListener('click', () => showHeroSlide(currentSlide - 1));
document.querySelector('#hero-next').addEventListener('click', () => showHeroSlide(currentSlide + 1));
window.setInterval(() => showHeroSlide(currentSlide + 1), 5000);
