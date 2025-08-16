export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-foreground/70">Simple, scalable plans for teams of any size.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-sm text-foreground/70">For early-stage teams validating AI workflows.</p>
          <p className="mt-4 text-3xl font-semibold">$99<span className="text-base font-normal text-foreground/60">/mo</span></p>
          <ul className="mt-4 text-sm text-foreground/80 space-y-2">
            <li>Web + WhatsApp chatbot</li>
            <li>Basic CRM/Sheets logging</li>
            <li>Conversation summaries</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-6 shadow-[0_0_30px_theme(colors.cyan.500/0.3)]">
          <h3 className="text-xl font-semibold">Growth</h3>
          <p className="text-sm text-foreground/70">For teams scaling sales, support, and marketing.</p>
          <p className="mt-4 text-3xl font-semibold">$299<span className="text-base font-normal text-foreground/60">/mo</span></p>
          <ul className="mt-4 text-sm text-foreground/80 space-y-2">
            <li>All Starter features</li>
            <li>WhatsApp retargeting</li>
            <li>Advanced CRM integration</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-foreground/70">Need enterprise features or on-prem? Contact us.</p>
    </div>
  );
}


