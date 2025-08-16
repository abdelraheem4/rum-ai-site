import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function SupportPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Customer Support</h1>
        <p className="mt-2 text-foreground/70">
          Provide instant, intelligent support to customers 24/7 with AI-powered solutions.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        subheading="Comprehensive support tools to enhance customer experience and reduce response times"
        features={[
          { title: "AI Troubleshooting", description: "Instant answers for frequent problems." },
          { title: "Smart Routing", description: "Directs complex issues to the right human agents." },
          { title: "Knowledge Base", description: "Integrates with your existing documentation." },
        ]}
      />

      <CTA />
    </div>
  );
}


