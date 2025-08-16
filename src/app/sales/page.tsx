import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export default function SalesPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Sales Enablement</h1>
        <p className="mt-2 text-foreground/70">
          Use Rum AI to qualify leads, recommend products, and move deals forward automatically.
        </p>
      </section>

      <FeatureGrid
        heading="Features"
        features={[
          { title: "Smart Qualification", description: "Scores and prioritizes leads with conversational prompts." },
          { title: "CRM Sync", description: "Logs chats to HubSpot, Salesforce, or Google Sheets automatically." },
          { title: "AI Recommendations", description: "Suggests best-fit products and next actions." },
          { title: "Follow-up Automation", description: "Keeps momentum with timely nudges and reminders." },
          { title: "Summaries", description: "Conversation recaps for quick context and handoff." },
          { title: "Insights", description: "Extracts key intel to guide sales strategy." },
        ]}
      />

      <CTA />
    </div>
  );
}


