"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { connect } from "@/lib/content";

/**
 * Segmented contact hub — one form, intent-routed.
 * Wired for Netlify Forms (works on static hosting, no backend code):
 *   data-netlify + hidden form-name + honeypot.
 * Clicking a channel card pre-selects the reason dropdown.
 */
export default function Connect() {
  const [reason, setReason] = useState("sponsorship");

  return (
    <section id="connect" className="border-t border-line bg-carbon-2 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-4">{connect.eyebrow}</p>
          <h2 className="font-display text-5xl sm:text-7xl">{connect.heading}</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">{connect.sub}</p>
        </Reveal>

        {/* Intent cards — set the reason */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {connect.channels.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => {
                  setReason(c.key);
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`h-full w-full rounded-2xl border p-5 text-left transition-colors ${
                  reason === c.key
                    ? "border-accent bg-carbon-3"
                    : "border-line bg-carbon hover:border-bone/40"
                }`}
              >
                <h3 className="font-semibold text-bone">{c.title}</h3>
                <p className="mt-2 text-sm leading-snug text-muted">{c.body}</p>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mt-10 grid gap-4 rounded-3xl border border-line bg-carbon p-6 sm:p-10"
          >
            {/* Netlify plumbing */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" />
              <Field name="email" label="Email" type="email" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="reason" className="text-sm text-muted">
                I&apos;m reaching out about
              </label>
              <select
                id="reason"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="rounded-xl border border-line bg-carbon-2 px-4 py-3 text-bone outline-none focus:border-accent"
              >
                {connect.channels.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-xl border border-line bg-carbon-2 px-4 py-3 text-bone outline-none focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="btn-ignite mt-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="rounded-xl border border-line bg-carbon-2 px-4 py-3 text-bone outline-none focus:border-accent"
      />
    </div>
  );
}
