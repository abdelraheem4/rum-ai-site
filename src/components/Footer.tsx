import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'AI Chatbot', href: '/products/chatbot' },
        { name: 'Smart Learning AI', href: '/products/smart-learning' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Customer Support', href: '/solutions/support' },
        { name: 'Marketing & Sales', href: '/solutions/marketing' },
        { name: 'E-commerce', href: '/solutions/ecommerce' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'Careers', href: 'mailto:careers@rumai.agency' },
        { name: 'Contact', href: 'mailto:info@rumai.agency' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: 'mailto:support@rumai.agency' }
      ]
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3 relative">
                <Image
                  src="/logo.png"
                  alt="RUM AI Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold">RUM AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your business with AI-powered chatbot and WhatsApp Business solutions. Automate conversations, boost engagement, and drive growth.
            </p>

          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RUM AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


