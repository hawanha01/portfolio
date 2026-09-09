"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("Please fill in all three fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:dev.hamza.010@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  };

  return (
    <form className="contact-form" onSubmit={submit} data-reveal>
      <label><span>Full name</span><input name="name" autoComplete="name" placeholder="Your name" /></label>
      <label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Role, project, or what you want to discuss" /></label>
      <div className="form-footer"><button type="submit">Send via email ↗</button><span aria-live="polite">{status}</span></div>
    </form>
  );
}
