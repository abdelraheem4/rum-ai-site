export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Developers</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        Build on flexible APIs for WhatsApp, SMS, Email, and more. Explore docs, SDKs, and examples.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">API Reference</h3>
          <p className="mt-2 text-sm text-foreground/70">Endpoints and schemas for all channels.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">SDKs & Postman</h3>
          <p className="mt-2 text-sm text-foreground/70">Get started in minutes with tooling.</p>
        </div>
      </div>
    </div>
  );
}


