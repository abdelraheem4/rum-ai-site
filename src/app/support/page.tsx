import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function SupportPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Customer Support & Ticketing</h1>
        <p className="mt-2 text-foreground/70">
          Resolve common issues instantly, route smartly, and keep support always-on.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        features={[
          { title: "AI Troubleshooting", description: "Instant answers for frequent problems." },
          { title: "Smart Ticket Routing", description: "Auto-assigns to the right team with context." },
          { title: "Proactive Resolution", description: "Resolves known issues using past data and rules." },
          { title: "Always-on Ticketing", description: "Creates tickets with AI status for tracking." },
        ]}
      />

      <CTA />
    </div>
  );
}


