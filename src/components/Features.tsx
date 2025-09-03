import Link from 'next/link';
import { ArrowRight, Bot, MessageCircle, Zap, Shield, Globe, Brain } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Powered Conversations",
    description: "Natural language processing for human-like interactions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Multi-Channel Support",
    description: "chatbot works seamlessly on your app, website, and every channel your customers use.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Responses",
    description: "24/7 automated customer support and engagement",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Deployment",
    description: "Scale across multiple languages and regions",
    color: "from-indigo-500 to-blue-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful AI Chatbot Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to build intelligent, engaging conversational agents
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-12 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
