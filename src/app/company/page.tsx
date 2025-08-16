export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Company</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        Our story, leadership, values, and global presence. Join us in building the conversational future.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Our story</h3>
          <p className="mt-2 text-sm text-foreground/70">Why we’re building Rum AI and what’s next.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Careers</h3>
          <p className="mt-2 text-sm text-foreground/70">Help us shape the future of conversational AI.</p>
        </div>
      </div>
    </div>
  );
}


