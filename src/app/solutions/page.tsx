export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Solutions</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        Conversational solutions for Marketing, Sales, and Customer Service across industries.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Marketing</h3>
          <p className="mt-2 text-sm text-foreground/70">Omnichannel campaigns with WhatsApp retargeting.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Sales</h3>
          <p className="mt-2 text-sm text-foreground/70">Lead qualification and automated follow-ups.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Customer service</h3>
          <p className="mt-2 text-sm text-foreground/70">AI troubleshooting and smart ticket routing.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">WhatsApp commerce</h3>
          <p className="mt-2 text-sm text-foreground/70">Drive conversions with conversational commerce.</p>
        </div>
      </div>
    </div>
  );
}


