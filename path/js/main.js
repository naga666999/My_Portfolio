/* =========================================================
   CYBERPUNK PORTFOLIO - FULL UPDATED main.js
   Includes:
   - Video speed control
   - Typing effects
   - Projects / Skills / Education rendering
   - Loader fade
   - Smooth scroll
   - ⭐ Animated Nebula Fluid Cursor (WebGL)
========================================================= */

/* =========================================================
   0. VIDEO SPEED CONTROL
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  if (video) {
    video.playbackRate = 0.5; // SLOW MOTION video
  }
});

/* =========================================================
   1. STARFIELD (Optional, works even with video)
========================================================= */
const canvas = document.getElementById("starfield");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let stars = [];

  function initStars() {
    stars = [];
    for (let i = 0; i < 350; i++) {
      stars.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        size: Math.random() * 2,
        speed: Math.random() * 0.6 + 0.2,
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = "#00eaff";

    stars.forEach((s) => {
      ctx.globalAlpha = Math.random();
      ctx.fillRect(s.x, s.y, s.size, s.size);
      s.y += s.speed;

      if (s.y > innerHeight) {
        s.x = Math.random() * innerWidth;
        s.y = 0;
      }
    });

    requestAnimationFrame(drawStars);
  }

  initStars();
  drawStars();

  addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    initStars();
  });
}

/* =========================================================
   2. LOADER FADE OUT
========================================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => (loader.style.display = "none"), 350);
  }, 600);
});

/* =========================================================
   3. TYPING EFFECT (ROLE)
========================================================= */
const typingRole = document.querySelector(".typing-role");
if (typingRole) {
  const roles = [
    "Full Stack Java Developer",
    "Java Programmer",
    "Web Developer",
  ];

  let i = 0,
    j = 0,
    deleting = false;

  function type() {
    typingRole.textContent = roles[i].substring(0, j);

    if (!deleting && j < roles[i].length) {
      j++;
    } else if (deleting && j > 0) {
      j--;
    } else {
      deleting = !deleting;
      if (!deleting) i = (i + 1) % roles.length;
    }

    setTimeout(type, deleting ? 60 : 100);
  }

  type();
}

/* =========================================================
   4. TYPING EFFECT (CODE EDITOR)
========================================================= */
const typingCode = document.getElementById("typingCode");
if (typingCode) {
  const codeText = `
class Developer {
  constructor() {
    this.name = "Bathala Nagaraju";
    this.role = "Full Stack Java Developer";
  }

  build() {
    return "UI/UX Web applications...";
  }
}

const dev = new Developer();
console.log(dev.build());
`;

  let idx = 0;
  function typeCode() {
    if (idx < codeText.length) {
      typingCode.textContent += codeText.charAt(idx);
      idx++;
      setTimeout(typeCode, 15);
    }
  }

  typeCode();
}

/* =========================================================
   5. RENDER PROJECTS (with tech badges)
========================================================= */
function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.description}</p>

            <div class="tech-badges">
                ${p.tech.map((t) => `<span class="badge">${t}</span>`).join("")}
            </div>

            ${
              p.link !== "#"
                ? `<a class="btn" href="${p.link}" target="_blank">View Project</a>`
                : ""
            }
            ${
              p.link !== "#"
                ? `<a class="btn" href="${p.link}" target="_blank">Source Code</a>`
                : ""
            }
        `;

    container.appendChild(card);
  });
}

/* =========================================================
   6. LOAD EDUCATION
========================================================= */
function loadEducation() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  education.forEach((e) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
            <h3 class="timeline-title">${e.degree}</h3>
            <p class="timeline-subtitle">${e.institute} — ${e.duration}</p>
            <p>${e.score}</p>
        `;

    timeline.appendChild(item);
  });
}

/* =========================================================
   7. LOAD SKILLS
========================================================= */
function loadSkills() {
  const grid = document.getElementById("skills-container");
  if (!grid) return;

  skills.forEach((s) => {
    const box = document.createElement("div");
    box.className = "skill-box";
    box.textContent = s;
    grid.appendChild(box);
  });
}

/* =========================================================
   8. LOAD CONTACT
========================================================= */
function loadContact() {
  const c = contact;
  const area = document.getElementById("contact-details");

  if (!area) return;

  area.innerHTML = `
        <p>Email: <a href="mailto:${c.email}">${c.email}</a></p>
        <p>Phone: ${c.phone}</p>
        <p>GitHub: <a href="${c.github}" target="_blank">${c.github}</a></p>
        <p>LinkedIn: <a href="${c.linkedin}" target="_blank">${c.linkedin}</a></p>
        <p>Location: ${c.location}</p>
    `;
}

/* =========================================================
   9. SMOOTH SCROLL
========================================================= */
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =========================================================
   10. INITIAL LOAD
========================================================= */
loadProjects();
loadEducation();
loadSkills();
loadContact();

/* =========================================================
CURSOR
========================================================= */
const bubbleCanvas = document.getElementById("bubble-cursor");
const bctx = bubbleCanvas.getContext("2d");

function resizeBubbleCanvas() {
  bubbleCanvas.width = innerWidth;
  bubbleCanvas.height = innerHeight;
}
resizeBubbleCanvas();
window.addEventListener("resize", resizeBubbleCanvas);

let mouse = { x: -9999, y: -9999 };
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

/* Bubble Particles */
class Bubble {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 20 + 10;
    this.alpha = 1;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.color = `hsla(${Math.random() * 360}, 100%, 70%, ${this.alpha})`;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.01;
    this.size *= 0.97;
    this.color = this.color.replace(/[\d\.]+\)$/g, `${this.alpha})`);
  }

  draw() {
    bctx.beginPath();
    bctx.fillStyle = this.color;
    bctx.shadowColor = this.color;
    bctx.shadowBlur = 15;
    bctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    bctx.fill();
  }
}

let bubbles = [];

function animateBubbles() {
  bctx.clearRect(0, 0, bubbleCanvas.width, bubbleCanvas.height);

  bubbles.push(new Bubble());

  bubbles.forEach((bubble, i) => {
    bubble.update();
    bubble.draw();

    if (bubble.alpha <= 0 || bubble.size < 1) {
      bubbles.splice(i, 1);
    }
  });

  requestAnimationFrame(animateBubbles);
}

animateBubbles();
