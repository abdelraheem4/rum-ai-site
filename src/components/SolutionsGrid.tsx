import Link from "next/link";
import { ArrowRight, Building2, ShoppingCart, Phone, Heart, Truck, Shield, Users, Globe, Zap, MessageCircle, BarChart3 } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  category: string;
}

const solutions: Solution[] = [
  // Business segments
  {
    id: "sales",
    title: "Sales",
    description: "Optimize conversion with intelligent automation and follow-ups",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "/solutions/sales",
    category: "business"
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Always-on brand presence with measurable re-engagement",
    icon: <Zap className="w-6 h-6" />,
    href: "/solutions/marketing",
    category: "business"
  },
  {
    id: "customer-service",
    title: "Customer Service",
    description: "Provide efficient support on the most popular channels",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/solutions/customer-service",
    category: "business"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Drive sales with personalized shopping experiences",
    icon: <ShoppingCart className="w-6 h-6" />,
    href: "/solutions/ecommerce",
    category: "business"
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Scalable solutions for large organizations",
    icon: <Building2 className="w-6 h-6" />,
    href: "/solutions/enterprise",
    category: "business"
  },

  // Industry verticals
  {
    id: "finance",
    title: "Finance",
    description: "Secure, compliant messaging for financial services",
    icon: <Shield className="w-6 h-6" />,
    href: "/solutions/finance",
    category: "industry"
  },
  {
    id: "retail",
    title: "Retail & eCommerce",
    description: "Omnichannel customer engagement for retail",
    icon: <ShoppingCart className="w-6 h-6" />,
    href: "/solutions/retail",
    category: "industry"
  },
  {
    id: "telecoms",
    title: "Telecoms",
    description: "Network infrastructure and connectivity solutions",
    icon: <Phone className="w-6 h-6" />,
    href: "/solutions/telecoms",
    category: "industry"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Patient communication and care coordination",
    icon: <Heart className="w-6 h-6" />,
    href: "/solutions/healthcare",
    category: "industry"
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Logistics and passenger communication",
    icon: <Truck className="w-6 h-6" />,
    href: "/solutions/transportation",
    category: "industry"
  },
  {
    id: "government",
    title: "Government",
    description: "Public sector communication and services",
    icon: <Building2 className="w-6 h-6" />,
    href: "/solutions/government",
    category: "industry"
  },
  {
    id: "education",
    title: "Education",
    description: "Student and parent communication platform",
    icon: <Users className="w-6 h-6" />,
    href: "/solutions/education",
    category: "industry"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Guest experience and booking management",
    icon: <Globe className="w-6 h-6" />,
    href: "/solutions/hospitality",
    category: "industry"
  },
];

const categories = [
  { id: "business", name: "Business segments", description: "Solutions tailored to your business needs" },
  { id: "industry", name: "Industry verticals", description: "Specialized solutions for your industry" },
];

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Solutions for every business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From startups to enterprises, we have solutions designed to meet your specific needs and industry requirements.
          </p>
        </div>

        {/* Solutions Categories */}
        {categories.map((category) => (
          <div key={category.id} className="mb-20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {category.name}
              </h3>
              <p className="text-slate-600">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions
                .filter(solution => solution.category === category.id)
                .map((solution) => (
                  <Link
                    key={solution.id}
                    href={solution.href}
                    className="group bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors shadow-sm">
                      <div className="text-blue-600 group-hover:text-blue-700">
                        {solution.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Explore Link */}
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Explore all solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
