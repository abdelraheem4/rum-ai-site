"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("Thanks! We’ll reach out shortly.");
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Something went wrong";
      setStatus(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact sales</h1>
      <p className="mt-2 text-foreground/70">
        Tell us about your use case. We’ll show how Rum AI can automate your Sales and Support.
      </p>

      <form
        action={onSubmit}
        className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm text-foreground/80">Name</label>
          <input id="name" name="name" required className="rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm text-foreground/80">Email</label>
          <input id="email" type="email" name="email" required className="rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="company" className="text-sm text-foreground/80">Company</label>
          <input id="company" name="company" className="rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm text-foreground/80">Message</label>
          <textarea id="message" name="message" rows={4} className="rounded-md border border-white/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-purple-500 px-5 py-2 text-sm font-medium text-black hover:bg-purple-400 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Contact sales"}
          </button>
          {status && <p className="text-sm text-foreground/70">{status}</p>}
        </div>
      </form>
    </div>
  );
}


