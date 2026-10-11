import { useState } from "react";
import Section from "./Section";

export default function Projects({ projects }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => { setFilter(c); setOpenId(null); }}
            aria-pressed={filter === c}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              filter === c ? "bg-crimson text-white dark:bg-coral dark:text-night" : "border border-crimson/30 hover:bg-crimson/10 dark:border-white/20 dark:hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {shown.length === 0 && <p className="mt-6">No projects in this category yet.</p>}

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {shown.map((p) => {
          const open = openId === p.id;
          return (
            <article key={p.id} className="animate-pop overflow-hidden rounded-lg border border-crimson/20 bg-white dark:border-white/10 dark:bg-white/5">
              {p.image ? (
                <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
              ) : (
                <div className="flex h-40 items-center justify-center bg-crimson font-display text-3xl font-bold text-white/90">{p.title}</div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <span className="rounded bg-coral/20 px-2 py-0.5 text-xs font-medium text-crimson dark:text-coral">{p.category}</span>
                </div>
                <p className="mt-2 text-sm text-ink/75 dark:text-stone-400">{p.summary}</p>

                {open && (
                  <div className="animate-pop mt-4 space-y-3 border-t border-crimson/15 pt-4 text-sm dark:border-white/10">
                    <p>{p.details}</p>
                    <p className="font-medium">Built with: <span className="font-normal">{p.tech.join(", ")}</span></p>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="inline-block font-medium text-crimson underline dark:text-coral">View project</a>
                    )}
                  </div>
                )}

                <button onClick={() => setOpenId(open ? null : p.id)} aria-expanded={open} className="mt-4 text-sm font-medium text-crimson underline dark:text-coral">
                  {open ? "Show less" : "View more"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
