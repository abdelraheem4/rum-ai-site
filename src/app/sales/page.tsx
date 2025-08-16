import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function SalesPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Sales Automation</h1>
        <p className="mt-2 text-foreground/70">
          Automate lead qualification, follow-ups, and sales processes to close more deals.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        subheading="Intelligent sales tools to streamline your pipeline and boost revenue"
        features={[
          { title: "Smart Qualification", description: "Scores and prioritizes leads with conversational prompts." },
          { title: "Automated Follow-ups", description: "Never let a lead go cold with intelligent reminders." },
          { title: "Pipeline Integration", description: "Sync with your CRM for seamless sales management." },
        ]}
      />

      <CTA />
    </div>
  );
}


