import { useState } from "react";
import Section from "./Section";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export default function Contact({ profile }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues((v) => ({ ...v, [name]: value }));
    setSent(false);
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Demo only: no server. Opens the visitor's email app with the message filled in.
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio%20message&body=${body}`;
      setSent(true);
      setValues(empty);
    }
  };

  const field = "mt-1 w-full rounded-md border bg-white px-3 py-2 dark:bg-white/5";
  const border = (k) => (errors[k] ? "border-red-600" : "border-crimson/30 dark:border-white/20");

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p>Have a question or an opportunity? Send a message and I'll reply by email.</p>
          <p><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><span className="font-medium">Location:</span> {profile.location}</p>
          <ul className="flex flex-wrap gap-3 pt-2">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="rounded-md border border-crimson/30 px-4 py-2 text-sm hover:bg-crimson/10 dark:border-white/20 dark:hover:bg-white/10">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4">
          {[
            { k: "name", label: "Name", type: "text" },
            { k: "email", label: "Email", type: "email" },
          ].map(({ k, label, type }) => (
            <div key={k}>
              <label htmlFor={k} className="text-sm font-medium">{label}</label>
              <input id={k} name={k} type={type} value={values[k]} onChange={onChange} aria-invalid={!!errors[k]} className={`${field} ${border(k)}`} />
              {errors[k] && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} aria-invalid={!!errors.message} className={`${field} ${border("message")}`} />
            {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>
          <button type="submit" className="rounded-md bg-crimson px-5 py-3 font-medium text-white transition hover:bg-crimson-light dark:bg-coral dark:text-night">Send message</button>
          {sent && <p role="status" className="animate-pop text-sm font-medium text-crimson dark:text-coral">Message ready. Your email app should open to send it.</p>}
        </form>
      </div>
    </Section>
  );
}
