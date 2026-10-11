import { useState } from "react";
import Section from "./Section";

export default function Resume({ profile, education, experience, skills }) {
  const [tab, setTab] = useState("education");
  const tabs = ["education", "experience", "skills"];

  
  const downloadCV = () => {
    const lines = [
      profile.name, profile.title, `${profile.email} | ${profile.location}`, "",
      "EDUCATION", ...education.map((e) => `- ${e.degree}, ${e.school} (${e.years})`), "",
      "EXPERIENCE", ...experience.map((e) => `- ${e.role}, ${e.org} (${e.years}): ${e.note}`), "",
      "SKILLS", skills.map((s) => s.name).join(", "),
    ];
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, "_")}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Section id="resume" title="Resume / CV">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition ${
                tab === t ? "bg-crimson text-white dark:bg-coral dark:text-night" : "border border-crimson/30 hover:bg-crimson/10 dark:border-white/20 dark:hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button onClick={downloadCV} className="rounded-md border border-crimson px-4 py-2 text-sm font-medium text-crimson transition hover:bg-crimson/10 dark:border-coral dark:text-coral dark:hover:bg-coral/10">
          Download CV
        </button>
      </div>

      <div key={tab} className="animate-pop mt-6" role="tabpanel">
        {tab === "education" && (
          <ul className="space-y-5 border-l-2 border-coral pl-5">
            {education.map((e) => (
              <li key={e.degree + e.school}>
                <p className="font-display text-lg font-bold">{e.degree}</p>
                <p className="text-sm">{e.school} · {e.years}</p>
                <p className="text-sm text-ink/70 dark:text-stone-400">{e.note}</p>
              </li>
            ))}
          </ul>
        )}
        {tab === "experience" && (
          <ul className="space-y-5 border-l-2 border-coral pl-5">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="font-display text-lg font-bold">{e.role}</p>
                <p className="text-sm">{e.org} · {e.years}</p>
                <p className="text-sm text-ink/70 dark:text-stone-400">{e.note}</p>
              </li>
            ))}
          </ul>
        )}
        {tab === "skills" && (
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s.name} className="rounded-full border border-crimson/30 px-4 py-1.5 text-sm dark:border-white/20">{s.name}</li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
