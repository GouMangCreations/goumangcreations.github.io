const dropdowns = document.querySelectorAll('.nav-dropdown');

dropdowns.forEach(dropdown => {
  let closeTimer;

  dropdown.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    window.clearTimeout(closeTimer);
    dropdowns.forEach(other => {
      if (other !== dropdown) other.open = false;
    });
    dropdown.open = true;
  });

  dropdown.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') {
      closeTimer = window.setTimeout(() => {
        dropdown.open = false;
      }, 220);
    }
  });

  dropdown.addEventListener('toggle', () => {
    if (!dropdown.open) return;
    dropdowns.forEach(other => {
      if (other !== dropdown) other.open = false;
    });
  });
});
