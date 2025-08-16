import { Users, MessageCircle, Globe, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Active Users',
      description: 'Businesses trust our platform'
    },
    {
      icon: MessageCircle,
      number: '1M+',
      label: 'Messages Sent',
      description: 'Every day across the globe'
    },
    {
      icon: Globe,
      number: '150+',
      label: 'Countries',
      description: 'Global coverage and support'
    },
    {
      icon: Zap,
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform powers conversations for companies of all sizes, from startups to enterprise organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-whatsapp-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
