// ✏️ EDIT THIS FILE: replace every placeholder with your own information.
export const profile = {
  name: "Adrian Mabuti",
  title: "BS Information Technology Student",
  school: "Cavite State University - Tanza Campus",
  tagline: "I build clean, useful web apps and I'm learning something new every semester.",
  intro:
    "I'm an IT student who enjoys turning ideas into working software. This portfolio shows my projects, background, and the skills I've built so far.",
  email: "adrianjovie.mabuti@cvsu.edu.ph",
  location: "Cavite, Philippines",
  socials: [
    { label: "GitHub", href: "https://github.com/drain13"},
    { label: "Facebook", href: "https://facebook.com/drianmbt" },
  ],
  photo: "image/AJ.jpg", 
};

export const about = {
  background:
    "I grew up in Cavite and discovered programming through school projects. Since then I've been building small apps, and helping classmates debug their code. I like work that is practical and easy to use.",
  interests: ["Web development", "UI design", "Basketball", "Gaming", "Puzzles"],
};

export const skills = [
  { name: "JavaScript", level: 45 },
  { name: "ReactJS", level: 70 },
  { name: "Tailwind CSS", level: 65 },
  { name: "HTML & CSS", level: 90 },
  { name: "Git & GitHub", level: 80 },
  { name: "Python", level: 75 },
];

export const projects = [
  {
    id: 1,
    title: "Shoe Store Project",
    category: "Web",
    image: "image/image3.png",
    summary: "A website for shoe brands and products to look at.",
    details:
      "Built with HTML, CSS, and JavaScript where users can order, pre-order and check for an items size, variants and price.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/DevDomingoJohn/KIXO",
  },
  {
    id: 2,
    title: "To-Do-List Website",
    category: "Web",
    image: "image/image1.png",
    summary: "A simple web for students, and other users to track their goals and specific tasks.",
    details:
      "Lets users add tasks to do, see whats done and not yet done.",
    tech: ["ReactJS", "Tailwind CSS"],
    link: "https://github.com/drain13/To-Do-List",
  },
  {
    id: 3,
    title: "Clothing Store",
    category: "Web",
    image: "image/image.png",
    summary: "A responsive clothing apparel.",
    details:
      "Users can order, select and see sizes with guide inside the website and also contact the company itself.",
    tech: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "Simple Online Calculator",
    category: "Web",
    image: "image/image2.png",
    summary: "A simple calculator.",
    details:
      "A simple online calculator with users guide on how to use it..",
    tech: ["ReactJS", "TailwindCSS"],
    link: "https://github.com/drain13/CalculatorLab1",
  },
];

export const education = [
  { school: "Cavite State University", degree: "BS Information Technology", years: "2024 – Present"},
  { school: "Tanza National Trade School", degree: "TVL Strand - Computer Programming", years: "2021 – 2023", note: "With Honors" },
];

export const experience = [
  { role: "Debugging Competition", org: "CvSU - TANZA", years: "TechFusion 2026", note: "Solved a problem on a blocks of codes." },
  
];
