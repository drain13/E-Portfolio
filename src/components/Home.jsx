export default function Home({ profile }) {
  const initials = profile.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <section id="home" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
      <div className="animate-rise">
        <p className="text-sm font-medium text-crimson-light dark:text-coral">{profile.title} at {profile.school}</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">
          Hi, I'm {profile.name}. Welcome to my portfolio.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80 dark:text-stone-300">{profile.tagline}</p>
        <p className="mt-3 max-w-xl text-ink/70 dark:text-stone-400">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-crimson px-5 py-3 font-medium text-white transition hover:bg-crimson-light dark:bg-coral dark:text-night">See my projects</a>
          <a href="#contact" className="rounded-md border border-crimson px-5 py-3 font-medium text-crimson transition hover:bg-crimson/10 dark:border-coral dark:text-coral dark:hover:bg-coral/10">Contact me</a>
        </div>
      </div>

      <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-coral bg-crimson font-display text-6xl font-bold text-white sm:h-64 sm:w-64">
        {profile.photo ? <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" /> : initials}
      </div>
    </section>
  );
}
