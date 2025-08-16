import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function MarketingPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Marketing Engagement</h1>
        <p className="mt-2 text-foreground/70">
          Build brand awareness and re-engage prospects across WhatsApp with measurable results.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        features={[
          { title: "Brand Introductions", description: "On-brand messaging at the right moment in-chat." },
          { title: "WhatsApp Retargeting", description: "Personalized re-engagement to boost conversions." },
          { title: "Conversion Tracking", description: "Track outcomes and campaign ROI end-to-end." },
        ]}
      />

      <CTA />
    </div>
  );
}


