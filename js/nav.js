/* A reusable navigation component rendered by JavaScript.
   This avoids fetch(), which may be blocked when opening HTML files locally. */
(function () {
  const pages = [
    { href: 'index.html', title: 'Home' },
    { href: 'quotes.html', title: 'Quotes' },
    { href: 'project.html', title: 'Project Ideas' },
    { href: 'machine.html', title: 'Useless Machine' }
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const mount = document.getElementById('site-nav');
  if (mount) {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `<div class="container header-inner">
      <a class="brand" href="index.html"><span class="brand-icon" aria-hidden="true">✳</span> my<span style="color:#52805e">site</span>.</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">☰</button>
      <nav class="nav-links" id="main-nav" aria-label="Main navigation">
        ${pages.map(p => `<a href="${p.href}" ${current === p.href ? 'aria-current="page"' : ''}>${p.title}</a>`).join('')}
      </nav></div>`;
    mount.appendChild(header);
    const btn = header.querySelector('.menu-toggle');
    const nav = header.querySelector('.nav-links');
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.textContent = open ? '✕' : '☰';
    });
  }
  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.innerHTML = `<footer class="footer"><div class="container footer-inner"><span>© ${new Date().getFullYear()} My First Website · A Web Technologies learning project</span><span>Made with HTML, CSS & JavaScript · <a href="project.html">Explore ideas ↗</a></span></div></footer>`;
  }
})();
