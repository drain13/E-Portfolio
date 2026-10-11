import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, onToggleDark, name }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // highlight the link of the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const linkCls = (id) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? "bg-crimson text-white dark:bg-coral dark:text-night"
        : "hover:bg-crimson/10 dark:hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-crimson/15 bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-night/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="flex items-center gap-2" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-crimson font-display text-sm font-bold text-white dark:bg-coral dark:text-night">
            {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
          <span className="font-display text-lg font-bold text-crimson dark:text-coral">Portfolio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkCls(l.id)}>{l.label}</a>
            </li>
          ))}
          <li>
            <button onClick={onToggleDark} className="ml-2 rounded-md border border-crimson/30 px-3 py-2 text-sm dark:border-white/20" aria-pressed={dark}>
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </li>
        </ul>

        <button
          className="rounded-md border border-crimson/30 px-3 py-2 text-sm md:hidden dark:border-white/20"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="animate-pop space-y-1 border-t border-crimson/15 px-5 py-3 md:hidden dark:border-white/10">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block ${linkCls(l.id)}`}>{l.label}</a>
            </li>
          ))}
          <li>
            <button onClick={onToggleDark} className="w-full rounded-md border border-crimson/30 px-3 py-2 text-left text-sm dark:border-white/20">
              {dark ? "Switch to light mode" : "Switch to dark mode"}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
