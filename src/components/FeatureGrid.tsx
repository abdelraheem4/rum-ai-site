import { ArrowRight, Sparkles, Zap, Shield, Globe, Users, BarChart3, Target, TrendingUp, CheckCircle } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

interface FeatureGridProps {
  heading: string;
  subheading: string;
  features: Feature[];
  variant?: "default" | "highlighted";
}

const iconMap: Record<string, React.ReactNode> = {
  "Sales": <Target className="w-6 h-6" />,
  "Marketing": <TrendingUp className="w-6 h-6" />,
  "Customer service": <Users className="w-6 h-6" />,
  "WhatsApp automation": <Globe className="w-6 h-6" />,
  "Store locator": <BarChart3 className="w-6 h-6" />,
  "Order tracking": <CheckCircle className="w-6 h-6" />,
  "SMS & RCS": <Zap className="w-6 h-6" />,
  "WhatsApp": <Globe className="w-6 h-6" />,
  "Email & Push": <Sparkles className="w-6 h-6" />,
  "AI-based troubleshooting": <Sparkles className="w-6 h-6" />,
  "Smart routing": <Shield className="w-6 h-6" />,
  "Conversation summaries": <BarChart3 className="w-6 h-6" />,
  "Cost efficiency": <TrendingUp className="w-6 h-6" />,
  "Scalability": <Zap className="w-6 h-6" />,
  "Increased revenue": <Target className="w-6 h-6" />,
  "Actionable insights": <BarChart3 className="w-6 h-6" />,
};

const colorMap: Record<string, string> = {
  "Sales": "from-blue-500 to-cyan-500",
  "Marketing": "from-purple-500 to-pink-500",
  "Customer service": "from-green-500 to-emerald-500",
  "WhatsApp automation": "from-green-500 to-teal-500",
  "Store locator": "from-orange-500 to-red-500",
  "Order tracking": "from-indigo-500 to-blue-500",
  "SMS & RCS": "from-blue-500 to-indigo-500",
  "WhatsApp": "from-green-500 to-emerald-500",
  "Email & Push": "from-purple-500 to-violet-500",
  "AI-based troubleshooting": "from-cyan-500 to-blue-500",
  "Smart routing": "from-emerald-500 to-green-500",
  "Conversation summaries": "from-violet-500 to-purple-500",
  "Cost efficiency": "from-green-500 to-emerald-500",
  "Scalability": "from-blue-500 to-cyan-500",
  "Increased revenue": "from-orange-500 to-yellow-500",
  "Actionable insights": "from-indigo-500 to-purple-500",
};

export default function FeatureGrid({ heading, subheading, features, variant = "default" }: FeatureGridProps) {
  return (
    <section className={`py-20 ${variant === "highlighted" ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${variant === "highlighted" ? "text-white" : "text-slate-900"}`}>
            {heading}
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${variant === "highlighted" ? "text-slate-300" : "text-slate-600"}`}>
            {subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const icon = feature.icon || iconMap[feature.title] || <Sparkles className="w-6 h-6" />;
            const colors = feature.color || colorMap[feature.title] || "from-blue-500 to-purple-500";
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  variant === "highlighted" 
                    ? "bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/50" 
                    : "bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colors} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-4 ${variant === "highlighted" ? "text-white" : "text-slate-900"}`}>
                  {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${variant === "highlighted" ? "text-slate-300" : "text-slate-600"}`}>
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className={`absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                  variant === "highlighted" ? "text-slate-400" : "text-slate-400"
                }`}>
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors} opacity-20`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
            variant === "highlighted"
              ? "bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl"
              : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
          }`}>
            Explore all features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}


