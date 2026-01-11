(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobile.style.display = isOpen ? 'none' : 'block';
      mobile.setAttribute('aria-hidden', String(isOpen));
    });

    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobile.style.display = 'none';
        mobile.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Screenshots carousel (only if elements exist)
  const img = document.getElementById('shotImg');
  const caption = document.getElementById('shotCaption');
  const dots = document.getElementById('shotDots');
  const prev = document.getElementById('prevShot');
  const next = document.getElementById('nextShot');

  if (img && caption && dots && prev && next) {
    const shots = [
      { src: 'assets/networth.png', caption: 'Total net worth and asset allocation at a glance.' },
      { src: 'assets/accounts.png', caption: 'Assets by category with a clean breakdown.' },
      { src: 'assets/cashflow.png', caption: 'Income and expenses with allocation and visibility.' },
      { src: 'assets/retirement.png', caption: 'Retirement projection with runway and tuning modes.' }
    ];

    let idx = 0;

    function renderDots() {
      dots.innerHTML = '';
      shots.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === idx ? ' active' : '');
        d.setAttribute('aria-label', 'Go to screenshot ' + (i + 1));
        d.addEventListener('click', () => { idx = i; render(); });
        dots.appendChild(d);
      });
    }

    function render() {
      img.src = shots[idx].src;
      caption.textContent = shots[idx].caption;
      renderDots();
    }

    prev.addEventListener('click', () => {
      idx = (idx - 1 + shots.length) % shots.length;
      render();
    });

    next.addEventListener('click', () => {
      idx = (idx + 1) % shots.length;
      render();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prev.click();
      if (e.key === 'ArrowRight') next.click();
    });

    render();
  }
})();
