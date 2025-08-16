import Link from "next/link";
import { ArrowRight, MessageCircle, Smartphone, Mail, Phone, Video, Users, Shield, Zap, Globe, Database, Lock, BarChart3 } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  metaTag: string;
  icon: React.ReactNode;
  href: string;
  category: string;
}

const products: Product[] = [
  // Conversational modules
  {
    id: "experiences",
    title: "Experiences",
    description: "Build engaging customer journeys",
    metaTag: "Conversational",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/experiences",
    category: "conversational"
  },
  {
    id: "moments",
    title: "Moments",
    description: "Capture customer interactions",
    metaTag: "Conversational",
    icon: <Zap className="w-6 h-6" />,
    href: "/products/moments",
    category: "conversational"
  },
  {
    id: "conversations",
    title: "Conversations",
    description: "Manage multi-channel chats",
    metaTag: "Conversational",
    icon: <Users className="w-6 h-6" />,
    href: "/products/conversations",
    category: "conversational"
  },
  {
    id: "answers",
    title: "Answers",
    description: "AI-powered customer support",
    metaTag: "Conversational",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/answers",
    category: "conversational"
  },
  {
    id: "people",
    title: "People",
    description: "Customer identity management",
    metaTag: "Conversational",
    icon: <Users className="w-6 h-6" />,
    href: "/products/people",
    category: "conversational"
  },
  {
    id: "ai-hub",
    title: "AI Hub",
    description: "Centralized AI capabilities",
    metaTag: "Conversational",
    icon: <Zap className="w-6 h-6" />,
    href: "/products/ai-hub",
    category: "conversational"
  },

  // Programmable Channels
  {
    id: "sms",
    title: "SMS",
    description: "Global SMS messaging",
    metaTag: "API",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/sms",
    category: "channels"
  },
  {
    id: "rcs",
    title: "RCS",
    description: "Rich Communication Services",
    metaTag: "API",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/rcs",
    category: "channels"
  },
  {
    id: "email",
    title: "Email",
    description: "Transactional & marketing emails",
    metaTag: "API",
    icon: <Mail className="w-6 h-6" />,
    href: "/products/email",
    category: "channels"
  },
  {
    id: "mms",
    title: "MMS",
    description: "Multimedia messaging",
    metaTag: "API",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/mms",
    category: "channels"
  },
  {
    id: "voice",
    title: "Voice",
    description: "Voice calls & IVR",
    metaTag: "API",
    icon: <Phone className="w-6 h-6" />,
    href: "/products/voice",
    category: "channels"
  },
  {
    id: "live-chat",
    title: "Live Chat",
    description: "Real-time chat support",
    metaTag: "Cloud",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/live-chat",
    category: "channels"
  },
  {
    id: "video",
    title: "Video",
    description: "Video calling & streaming",
    metaTag: "API",
    icon: <Video className="w-6 h-6" />,
    href: "/products/video",
    category: "channels"
  },
  {
    id: "in-app",
    title: "In-App",
    description: "Mobile app messaging",
    metaTag: "SDK",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/in-app",
    category: "channels"
  },
  {
    id: "push",
    title: "Mobile Push",
    description: "Push notifications",
    metaTag: "SDK",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/push",
    category: "channels"
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Business messaging",
    metaTag: "API",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/whatsapp",
    category: "channels"
  },
  {
    id: "viber",
    title: "Viber",
    description: "Viber Business messages",
    metaTag: "API",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/viber",
    category: "channels"
  },
  {
    id: "messenger",
    title: "Messenger",
    description: "Facebook Messenger",
    metaTag: "API",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/messenger",
    category: "channels"
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Instagram Direct messages",
    metaTag: "API",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/instagram",
    category: "channels"
  },
  {
    id: "telegram",
    title: "Telegram",
    description: "Telegram Bot API",
    metaTag: "API",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "/products/telegram",
    category: "channels"
  },

  // Platform functionality
  {
    id: "signals",
    title: "Signals",
    description: "Customer engagement analytics",
    metaTag: "Platform",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "/products/signals",
    category: "platform"
  },
  {
    id: "cpaas-x",
    title: "CPaaS X",
    description: "Next-gen communications platform",
    metaTag: "Platform",
    icon: <Globe className="w-6 h-6" />,
    href: "/products/cpaas-x",
    category: "platform"
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "Secure user verification",
    metaTag: "Security",
    icon: <Shield className="w-6 h-6" />,
    href: "/products/authentication",
    category: "platform"
  },
  {
    id: "mobile-identity",
    title: "Mobile Identity",
    description: "Mobile number verification",
    metaTag: "Security",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/products/mobile-identity",
    category: "platform"
  },
  {
    id: "number-lookup",
    title: "Number Lookup",
    description: "Phone number intelligence",
    metaTag: "API",
    icon: <Database className="w-6 h-6" />,
    href: "/products/number-lookup",
    category: "platform"
  },
  {
    id: "numbers",
    title: "Numbers & 10DLC",
    description: "Phone number management",
    metaTag: "Platform",
    icon: <Phone className="w-6 h-6" />,
    href: "/products/numbers",
    category: "platform"
  },
];

const categories = [
  { id: "conversational", name: "Conversational modules", description: "Build AI-powered customer experiences" },
  { id: "channels", name: "Programmable Channels", description: "Integrate messaging across all channels" },
  { id: "platform", name: "Platform functionality", description: "Core platform features and APIs" },
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete product suite
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to build, scale, and optimize customer engagement across every channel.
          </p>
        </div>

        {/* Product Categories */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter(product => product.category === category.id)
                .map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                      <div className="text-slate-600 group-hover:text-slate-800">
                        {product.icon}
                      </div>
                    </div>

                    {/* Meta Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {product.metaTag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Explore Link */}
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors"
          >
            View all products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
