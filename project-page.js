const presentationStyles = document.createElement('link');
presentationStyles.rel = 'stylesheet';
presentationStyles.href = '../image-presentation.css';
document.head.append(presentationStyles);

const slug = document.body.dataset.project;
const project = projects.find(item => item.slug === slug);

if (!project) {
  window.location.replace('../index.html#work');
} else {
  const aboutLink = document.querySelector('.site-header nav a[href="../index.html#about"]');
  if (aboutLink) aboutLink.href = '../about.html';
  document.title = `${project.title} | GouMang Creations`;
  const titleSizeClass = project.title.length > 24 ? ' project-title-long' : '';
  document.querySelector('#project-detail').innerHTML = `
    <section class="project-intro${titleSizeClass}">
      <p class="eyebrow">${project.label}</p>
      <h1>${project.title}</h1>
      <p class="project-materials">${project.materials}</p>
    </section>
    <section class="project-carousel" aria-label="${project.title} photo gallery">
      <div class="project-stage">
        <img id="project-image" src="../${project.images[0]}" alt="${project.captions[0]}">
        <button class="project-arrow previous" type="button" aria-label="Previous image">←</button>
        <button class="project-arrow next" type="button" aria-label="Next image">→</button>
      </div>
      <div class="project-gallery-meta"><p>${project.title}</p><p id="project-count" aria-live="polite">01 / ${String(project.images.length).padStart(2, '0')}</p></div>
      <div class="project-thumbnails" role="tablist" aria-label="Choose a project image">${project.images.map((image, index) => `<button class="project-thumb${index === 0 ? ' active' : ''}" type="button" data-index="${index}" role="tab" aria-selected="${index === 0}"><img src="../${image}" alt="View image ${index + 1}"></button>`).join('')}</div>
    </section>
    <section class="project-caption">
      <p class="project-description">${project.description}</p>
    </section>
    <a class="back-work" href="../index.html#work">← Back to selected work</a>`;

  let currentImage = 0;
  const image = document.querySelector('#project-image');
  const count = document.querySelector('#project-count');
  const thumbs = [...document.querySelectorAll('.project-thumb')];
  function showImage(index) {
    currentImage = (index + project.images.length) % project.images.length;
    image.style.opacity = '0';
    window.setTimeout(() => {
      image.src = `../${project.images[currentImage]}`;
      image.alt = project.captions[currentImage];
      count.textContent = `${String(currentImage + 1).padStart(2, '0')} / ${String(project.images.length).padStart(2, '0')}`;
      thumbs.forEach((thumb, thumbIndex) => { thumb.classList.toggle('active', thumbIndex === currentImage); thumb.setAttribute('aria-selected', thumbIndex === currentImage); });
      image.style.opacity = '1';
    }, 130);
  }
  document.querySelector('.previous').addEventListener('click', () => showImage(currentImage - 1));
  document.querySelector('.next').addEventListener('click', () => showImage(currentImage + 1));
  thumbs.forEach(thumb => thumb.addEventListener('click', () => showImage(Number(thumb.dataset.index))));
  document.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') showImage(currentImage - 1); if (event.key === 'ArrowRight') showImage(currentImage + 1); });
}
