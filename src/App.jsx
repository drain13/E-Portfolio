import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { profile, about, skills, projects, education, experience } from "./data";

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("theme") === "dark"; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} name={profile.name} />
      <main>
        <Home profile={profile} />
        <About about={about} skills={skills} />
        <Projects projects={projects} />
        <Resume profile={profile} education={education} experience={experience} skills={skills} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-crimson/15 py-6 text-center text-sm text-ink/60 dark:border-white/10 dark:text-stone-400">
        © {new Date().getFullYear()} {profile.name}. Built with ReactJS and Tailwind CSS.
      </footer>
    </>
  );
}