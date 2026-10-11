import { useState } from "react";
import Section from "./Section";

export default function About({ about, skills }) {
  const [selected, setSelected] = useState(null);
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-bold">Personal background</h3>
          <p className="mt-3 max-w-prose leading-relaxed text-ink/80 dark:text-stone-300">{about.background}</p>

          <h3 className="mt-8 font-display text-xl font-bold">Interests</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <button
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                aria-pressed={selected === i}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  selected === i
                    ? "border-crimson bg-crimson text-white dark:border-coral dark:bg-coral dark:text-night"
                    : "border-crimson/30 hover:border-crimson dark:border-white/20 dark:hover:border-coral"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
          {selected && <p className="animate-pop mt-3 text-sm text-ink/70 dark:text-stone-400">I really enjoy {selected.toLowerCase()}.</p>}
        </div>

        <div>
          <h3 className="font-display text-xl font-bold">Skills</h3>
          <ul className="mt-3 space-y-4">
            {skills.map((s) => (
              <li key={s.name}>
                <div className="flex justify-between text-sm"><span>{s.name}</span><span>{s.level}%</span></div>
                <div className="mt-1 h-2 rounded-full bg-crimson/15 dark:bg-white/10">
                  <div className="h-2 rounded-full bg-crimson transition-all duration-700 dark:bg-coral" style={{ width: `${s.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
