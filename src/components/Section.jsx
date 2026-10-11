export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-bold text-crimson dark:text-coral sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
