const base = new URL('..', document.currentScript.src).href;

fetch(base + 'header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;

    const dropdown = document.getElementById('projects-dropdown');
    if (!dropdown) return;
    const trigger = dropdown.querySelector('.dropdown-trigger');

  });
