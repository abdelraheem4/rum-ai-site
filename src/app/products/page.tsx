export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Products</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        Conversational modules, engagement journeys, contact center, chatbot platform, customer data platform, and programmable channels.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Experiences</h3>
          <p className="mt-2 text-sm text-foreground/70">Orchestrate conversational experiences end-to-end.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Moments</h3>
          <p className="mt-2 text-sm text-foreground/70">Customer engagement and automation.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Conversations</h3>
          <p className="mt-2 text-sm text-foreground/70">Cloud contact center powered by AI.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-semibold">Answers</h3>
          <p className="mt-2 text-sm text-foreground/70">Chatbot building and runtime platform.</p>
        </div>
      </div>
    </div>
  );
}


