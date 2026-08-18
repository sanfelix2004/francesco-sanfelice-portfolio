/* =====================================================
   CYBER-ENGINE — app.js
   Particles + 3D grid · Boot sequence · 3D tilt ·
   Magnetic buttons + SFX · Radar · Interactive console
   ===================================================== */

'use strict';

const PROFILE = {
  name: 'Francesco Sanfelice di Bagnoli',
  role: 'Junior Software Engineer | Backend & Cloud Systems (Java / Spring / AWS) | AI & Distributed Systems Enthusiast',
  email: 'sanfelicefrancesco004@gmail.com',
  location: 'Giovinazzo (Bari), Italia',
  english: 'B2 certificato Cambridge',
};

/* =====================================================
   1. BACKGROUND — particelle connesse + griglia 3D prospettica
   ===================================================== */
(function backgroundEngine() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  const mouse = { x: -9999, y: -9999 };

  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(120, Math.floor((W * H) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
      hue: Math.random() < 0.7 ? '0,242,254' : '155,77,255',
    }));
  }

  let gridOffset = 0;

  function drawGrid() {
    // Perspective floor grid at the bottom of the viewport
    const horizon = H * 0.62;
    const gridH = H - horizon;
    ctx.save();
    ctx.strokeStyle = 'rgba(0,242,254,0.05)';
    ctx.lineWidth = 1;

    // horizontal lines, denser near the horizon (perspective)
    gridOffset = (gridOffset + 0.0022) % 1;
    for (let i = 0; i <= 14; i++) {
      const t = (i / 14 + gridOffset) % 1;
      const y = horizon + Math.pow(t, 2.2) * gridH;
      const alpha = 0.02 + t * 0.07;
      ctx.strokeStyle = `rgba(0,242,254,${alpha})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    // radial vertical lines converging to the center of the horizon
    const cx = W / 2;
    for (let i = -12; i <= 12; i++) {
      ctx.strokeStyle = 'rgba(127,0,255,0.035)';
      ctx.beginPath();
      ctx.moveTo(cx, horizon);
      ctx.lineTo(cx + i * (W / 12), H);
      ctx.stroke();
    }
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();

    const LINK = 130;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // gentle repulsion from cursor
      const dxm = p.x - mouse.x;
      const dym = p.y - mouse.y;
      const dm = Math.hypot(dxm, dym);
      if (dm < 120 && dm > 0.1) {
        p.x += (dxm / dm) * 0.6;
        p.y += (dym / dm) * 0.6;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},0.75)`;
      ctx.shadowColor = `rgba(${p.hue},0.9)`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,242,254,${(1 - d / LINK) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  resize();
  tick();
})();

/* =====================================================
   2. HERO — boot sequence terminal
   ===================================================== */
(function bootSequence() {
  const el = document.getElementById('boot-terminal');
  const lines = [
    { t: '<span class="t-dim">$</span> <span class="t-key">./init_profile.sh --user=fsanfelice</span>', d: 300 },
    { t: '<span class="t-ok">[ OK ]</span> Kernel loaded ............ <span class="t-key">cyber-engine v2026.08</span>', d: 350 },
    { t: '<span class="t-ok">[ OK ]</span> Identity verified ........ <span class="t-violet">Francesco Sanfelice di Bagnoli</span>', d: 380 },
    { t: '<span class="t-ok">[ OK ]</span> Role mounted ............. Junior Software Engineer', d: 340 },
    { t: '<span class="t-dim">$</span> <span class="t-key">systemctl status backend-core</span>', d: 420 },
    { t: '<span class="t-ok">● active</span> java-spring-microservices <span class="t-dim">(Spring Boot · Cloud · JPA · Security)</span>', d: 300 },
    { t: '<span class="t-ok">● active</span> aws-stack <span class="t-dim">(SQS · SNS · DynamoDB · Parameter Store)</span>', d: 300 },
    { t: '<span class="t-ok">● active</span> redis-cache · dynamodb-tables · openapi-3.0', d: 320 },
    { t: '<span class="t-dim">$</span> <span class="t-key">deploy --target=mediaset-infinity --tenant=ITA,ESP</span>', d: 460 },
    { t: '<span class="t-ok">[ OK ]</span> OTT high-traffic pipeline .... <span class="t-key">STREAMING</span>', d: 340 },
    { t: '<span class="t-warn">[ i ]</span>  AI & Distributed Systems modules: <span class="t-violet">LEARNING MODE ∞</span>', d: 380 },
    { t: '<span class="t-dim">$</span> <span class="t-key">status</span>', d: 400 },
    { t: '<span class="t-ok">>>> AVAILABLE FOR HIGH-IMPACT ROLES_</span>', d: 300 },
  ];

  let i = 0;
  function next() {
    if (i >= lines.length) {
      // loop: restart after a pause
      setTimeout(() => { el.innerHTML = ''; i = 0; next(); }, 9000);
      return;
    }
    const div = document.createElement('div');
    div.innerHTML = lines[i].t;
    div.style.opacity = '0';
    div.style.transition = 'opacity .25s ease';
    el.appendChild(div);
    requestAnimationFrame(() => (div.style.opacity = '1'));
    el.scrollTop = el.scrollHeight;
    setTimeout(next, lines[i].d);
    i++;
  }
  next();
})();

/* =====================================================
   3. SCROLL REVEAL + metriche animate
   ===================================================== */
(function revealEngine() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.metric-value[data-count]').forEach(animateCount);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1200;
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
})();

/* =====================================================
   4. 3D TILT con intensità luminosa (bento + card timeline)
   ===================================================== */
(function tiltEngine() {
  const MAX_TILT = 7;
  document.querySelectorAll('.tilt').forEach((card) => {
    const glow = card.dataset.glow || '#00f2fe';
    card.style.setProperty('--glow', glow);
    const inner = card.querySelector('.bento-inner') || card;

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * MAX_TILT;
      const ry = (px - 0.5) * MAX_TILT;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
      inner.style.setProperty('--mx', `${px * 100}%`);
      inner.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
})();

/* =====================================================
   5. MAGNETIC BUTTONS + micro-suoni (WebAudio)
   ===================================================== */
(function magneticEngine() {
  let audioCtx = null;
  function blip(freq, dur = 0.06, gain = 0.03) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(gain, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      osc.connect(g).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (_) { /* audio not available: visual feedback only */ }
  }

  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => (btn.style.transform = 'translate(0,0)'));
    btn.addEventListener('mouseenter', () => btn.hasAttribute('data-sfx') && blip(680, 0.04, 0.015));
    btn.addEventListener('click', () => {
      btn.classList.remove('sfx-flash');
      void btn.offsetWidth; // restart animation
      btn.classList.add('sfx-flash');
      if (btn.hasAttribute('data-sfx')) blip(440, 0.09, 0.035);
    });
  });
})();

/* =====================================================
   6. RADAR — competenze cloud/infra
   ===================================================== */
(function radar() {
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 130, cy = 130, R = 92;
  const axes = [
    { label: 'AWS', v: 0.85 },
    { label: 'REDIS', v: 0.8 },
    { label: 'SQL/NoSQL', v: 0.82 },
    { label: 'DOCKER', v: 0.7 },
    { label: 'LINUX', v: 0.88 },
  ];
  let sweep = 0;

  function pt(i, radius) {
    const ang = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
    return [cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius];
  }

  function draw() {
    ctx.clearRect(0, 0, 260, 260);

    // rings
    for (let ring = 1; ring <= 4; ring++) {
      ctx.beginPath();
      for (let i = 0; i <= axes.length; i++) {
        const [x, y] = pt(i % axes.length, (R * ring) / 4);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(127,0,255,0.18)';
      ctx.stroke();
    }
    // spokes + labels
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    axes.forEach((a, i) => {
      const [x, y] = pt(i, R);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(127,0,255,0.22)';
      ctx.stroke();
      const [lx, ly] = pt(i, R + 16);
      ctx.fillStyle = 'rgba(179,102,255,0.85)';
      ctx.fillText(a.label, lx, ly + 3);
    });
    // data polygon
    ctx.beginPath();
    axes.forEach((a, i) => {
      const [x, y] = pt(i, R * a.v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,242,254,0.12)';
    ctx.strokeStyle = 'rgba(0,242,254,0.8)';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
    axes.forEach((a, i) => {
      const [x, y] = pt(i, R * a.v);
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00f2fe';
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    // rotating sweep
    sweep += 0.015;
    const grad = ctx.createConicGradient
      ? ctx.createConicGradient(sweep, cx, cy)
      : null;
    if (grad) {
      grad.addColorStop(0, 'rgba(0,242,254,0.22)');
      grad.addColorStop(0.12, 'rgba(0,242,254,0)');
      grad.addColorStop(1, 'rgba(0,242,254,0)');
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* =====================================================
   7. DOWNLOAD CV — PDF ufficiale
   ===================================================== */
const CV_FILE = 'assets/SanfelicediBagnoliFrancesco-CV-ITA.pdf';

function downloadCV() {
  const a = document.createElement('a');
  a.href = CV_FILE;
  a.download = 'SanfelicediBagnoliFrancesco-CV-ITA.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
document.getElementById('hero-download-cv').addEventListener('click', downloadCV);
document.getElementById('footer-download-cv').addEventListener('click', downloadCV);

/* =====================================================
   8. CONSOLE INTERATTIVA
   ===================================================== */
(function consoleEngine() {
  const output = document.getElementById('console-output');
  const input = document.getElementById('console-input');
  const body = document.getElementById('console-body');
  const history = [];
  let histIdx = -1;

  const COMMANDS = {
    help: () => [
      '<span class="c-cyan">COMANDI DISPONIBILI</span>',
      '  <span class="c-ok">help</span>         → mostra questa lista',
      '  <span class="c-ok">whoami</span>       → identità e ruolo',
      '  <span class="c-ok">skills</span>       → tech stack completo',
      '  <span class="c-ok">experience</span>   → mission log professionale',
      '  <span class="c-ok">education</span>    → percorso accademico',
      '  <span class="c-ok">certs</span>        → certificazioni',
      '  <span class="c-ok">contact</span>      → canali di contatto',
      '  <span class="c-ok">download-cv</span>  → scarica il CV',
      '  <span class="c-ok">clear</span>        → pulisce il terminale',
    ],
    whoami: () => [
      `<span class="c-violet">${PROFILE.name}</span>`,
      `<span class="c-dim">${PROFILE.role}</span>`,
      `<span class="c-dim">Base: ${PROFILE.location} · EN ${PROFILE.english}</span>`,
    ],
    skills: () => [
      '<span class="c-cyan">[BACKEND & CORE]</span>     Java · Spring Boot · Spring Cloud · Spring Data JPA · Spring Security · C · C++ · Python · OpenAPI 3.0/REST · Maven',
      '<span class="c-violet">[CLOUD & INFRA]</span>     AWS (SQS · SNS · DynamoDB · Parameter Store) · Redis · PostgreSQL · SQL & NoSQL · Docker · Linux (Ubuntu/Kali)',
      '<span class="c-cyan">[FRONTEND & MOBILE]</span> JavaScript · TypeScript · HTML5/CSS3 · Angular · React · Flutter & Dart',
      '<span class="c-violet">[TOOLS]</span>             Git/GitHub · Postman · Swagger · JIRA/Confluence · CVP · ThePlatform (MPX)',
    ],
    experience: () => [
      '<span class="c-ok">● MISSION ACTIVE</span> — Software Engineer @ <span class="c-cyan">Fincons Group</span> (Bari) [01/04/2025 – Attuale]',
      '  > Microservizi backend Java/Spring per Mediaset Infinity (OTT) — Tenant ITA & ESP',
      '  > API RESTful: versionamento & docs con OpenAPI 3.0 / Swagger',
      '  > Bug-fixing in scenari distribuiti high-traffic · testing con Swagger & curl',
      '  <span class="c-dim">Stack: Java · Spring · Redis · DynamoDB · AWS SQS/SNS/Parameter Store · MPX · CVP</span>',
    ],
    education: () => [
      '<span class="c-cyan">▸ Laurea Triennale</span> — Ingegneria Informatica e dell\'Automazione · Politecnico di Bari [2023 – In corso]',
      '  <span class="c-dim">Algoritmi & strutture dati in Java · multithreading · pattern architetturali · Matlab</span>',
      '<span class="c-violet">▸ Diploma</span> — Informatica e Telecomunicazioni · IISS Volta De Gemmis, Bitonto [2018 – 2023] — <span class="c-ok">100/100 con Lode</span>',
      '  <span class="c-dim">Reti TCP/IP · routing · sicurezza · Linux · C/C++ · Web dev</span>',
    ],
    certs: () => [
      '<span class="c-ok">✔</span> Cambridge English B2',
      '<span class="c-ok">✔</span> Cisco CCNA: Programming Essentials in C++',
      '<span class="c-ok">✔</span> Cisco Introduction to Cybersecurity',
      '<span class="c-ok">✔</span> Cisco NDG Linux Unhatched',
      '<span class="c-ok">✔</span> Cisco Introduction to Packet Tracer',
    ],
    contact: () => [
      `<span class="c-cyan">EMAIL</span>    → <a class="underline text-white hover:text-neon-cyan" href="mailto:${PROFILE.email}">${PROFILE.email}</a>`,
      `<span class="c-cyan">LOCATION</span> → ${PROFILE.location}`,
      '<span class="c-ok">>>> Canale sicuro stabilito. In attesa di trasmissione…</span>',
    ],
    'download-cv': () => {
      downloadCV();
      return ['<span class="c-ok">[ OK ]</span> Trasferimento CV avviato → SanfelicediBagnoliFrancesco-CV-ITA.pdf'];
    },
    clear: () => {
      output.innerHTML = '';
      return null;
    },
    sudo: () => ['<span class="c-err">[ DENIED ]</span> Nice try. I permessi di root si guadagnano con una offer letter.'],
  };

  function print(lines) {
    for (const l of lines) {
      const div = document.createElement('div');
      div.innerHTML = l;
      output.appendChild(div);
    }
  }

  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    print([`<span class="c-prompt">guest@sanfelice.dev:~$</span> <span class="c-cmd">${raw.replace(/</g, '&lt;')}</span>`]);
    if (cmd === '') { /* empty line */ }
    else if (COMMANDS[cmd]) {
      const res = COMMANDS[cmd]();
      if (res) print(res);
    } else {
      print([`<span class="c-err">command not found:</span> ${cmd.replace(/</g, '&lt;')} — digita <span class="c-ok">help</span>`]);
    }
    body.scrollTop = body.scrollHeight;
  }

  // greeting
  print([
    '<span class="c-dim">Cyber-Engine Console v2026.08 — canale guest inizializzato.</span>',
    'Benvenuto. Digita <span class="c-ok">help</span> per esplorare il profilo.',
    '&nbsp;',
  ]);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      if (val.trim()) { history.push(val); }
      histIdx = history.length;
      run(val);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; input.value = history[histIdx] || ''; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx]; }
      else { histIdx = history.length; input.value = ''; }
    }
  });

  // focus on click anywhere in the terminal, fake block cursor follows text
  body.addEventListener('click', () => input.focus());
  const cursor = document.getElementById('console-cursor');
  const meas = document.createElement('span');
  meas.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font:13px "JetBrains Mono",monospace;';
  document.body.appendChild(meas);
  function syncCursor() {
    meas.textContent = input.value;
    cursor.style.left = Math.min(meas.offsetWidth, input.offsetWidth - 8) + 'px';
  }
  input.addEventListener('input', syncCursor);
  ['keydown', 'keyup', 'focus'].forEach((ev) => input.addEventListener(ev, () => setTimeout(syncCursor, 0)));
})();

/* =====================================================
   9. Lucide icons init
   ===================================================== */
lucide.createIcons();
