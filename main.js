const base = new URL('..', document.currentScript.src).href;

fetch(base + 'header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  });

document.addEventListener('click', e => {
  const dropdown = document.getElementById('projects-dropdown');
  if (!dropdown) return;

  const trigger = e.target.closest('.dropdown-trigger');
  if (trigger) {
    const open = dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', open);
  } else if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});