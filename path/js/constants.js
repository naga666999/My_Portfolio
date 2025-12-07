/* =========================================================
   PORTFOLIO DATA - BATHALA NAGARAJU
   This file stores all dynamic content for the website.
========================================================= */

const heroData = {
  name: "Bathala Nagaraju",
  role: "Full Stack Java Developer",
  intro:
    "Hi, I'm Naga Raju — a passionate learner and aspiring developer who loves building simple and useful projects.",
  resume: "assets/BathalaNagaraju.pdf",
};

/* ========================== PROJECTS ========================== */

const projects = [
  {
    title: "Deep Fake Detection System",
    description:
      "A CNN-based deep learning model that detects manipulated face-swap videos with 85% accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    image: "images/deepfake.png",
    link: "https://github.com/naga666999/FinalyearProject_Deepfake_Detection_system_using_DeepLearning",
  },
  {
    title: "E-commerce Product Page",
    description:
      "A modern and responsive product display interface featuring an interactive image gallery, product details, quantity selector, and add-to-cart functionality. Built with HTML, CSS, and JavaScript for seamless user interaction across all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/ecommerce.png",
    link: "https://github.com/naga666999/Ecommerce/",
  },
];

/* ========================== EDUCATION ========================== */

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "K.S.R.M College of Engineering, Kadapa",
    duration: "2021 – 2025",
    score: "CGPA: 7.04 / 10",
  },
  {
    degree: "Senior Secondary (XII)",
    institute: "Narayana Junior College, Kadapa",
    duration: "2021",
    score: "81.1%",
  },
  {
    degree: "Secondary School (X)",
    institute: "B.G.V.P E.M High School, Kadapa",
    duration: "2019",
    score: "CGPA: 8.3 / 10",
  },
];

/* ========================== SKILLS ========================== */

const skills = [
  "Core Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "Git",
  "VS Code",
  "Microsoft Word",
  "Microsoft Excel",
  "Logical Thinking",
  "Communication",
  "Teamwork",
];

/* ========================== CONTACT DETAILS ========================== */

const contact = {
  email: "bathalanagaraju96@gmail.com",
  phone: "6304879760",
  github: "https://github.com/naga666999",
  linkedin: "https://linkedin.com/in/naga-raju-081942280",
  location: "Kadapa, Andhra Pradesh, India",
};

/* Cursor */
const nebCursor = document.getElementById("nebula-cursor");
let x = 0,
  y = 0;

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

function animateNebula() {
  nebCursor.style.left = `${x}px`;
  nebCursor.style.top = `${y}px`;
  requestAnimationFrame(animateNebula);
}

animateNebula();
