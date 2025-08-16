import Link from 'next/link';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function WhatsAppSolution() {
  const benefits = [
    'Automated customer support 24/7',
    'Multi-language support',
    'Integration with CRM systems',
    'Advanced analytics and reporting',
    'Compliance with WhatsApp policies',
    'Scalable for any business size'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-whatsapp-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-whatsapp-500 font-semibold text-lg">WhatsApp Business</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Transform Customer Communication with WhatsApp Business Solutions
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Leverage the world's most popular messaging platform to connect with your customers. 
              Our AI-powered solutions help you automate responses, provide instant support, and 
              drive engagement across all your business channels.
            </p>
            
            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-whatsapp-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/demo" className="btn-primary inline-flex items-center justify-center">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-whatsapp-500 to-green-600 rounded-2xl p-8 text-white text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
              <p className="text-white/90 mb-6">
                Join thousands of businesses already using our WhatsApp Business solutions
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
