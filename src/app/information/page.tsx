import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function InformationPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Customer Information & Convenience</h1>
        <p className="mt-2 text-foreground/70">
          Give customers instant answers like store locations, order status, and more.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        features={[
          { title: "Store Locator", description: "Shares nearest store details via location APIs." },
          { title: "Order Tracking", description: "Pulls live status from your order systems via API." },
          { title: "Humanized Conversations", description: "NLP that feels natural and builds trust." },
        ]}
      />

      <CTA />
    </div>
  );
}


