'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 relative">
                <Image
                  src="/Rum.AI.png"
                  alt="RUM AI Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">RUM AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      WhatsApp Business API
                    </Link>
                    <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Chatbot
                    </Link>
                    <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Analytics Dashboard
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isSolutionsOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Customer Support
                    </Link>
                    <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Marketing & Sales
                    </Link>
                    <Link href="/solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      E-commerce
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/developers" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Developers
              </Link>
              <Link href="/company" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Company
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact us
            </Link>
            <Link href="/try-free" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
              Try for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Solutions
            </Link>
            <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/developers" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Developers
            </Link>
            <Link href="/company" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Company
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
              Contact us
            </Link>
            <Link href="/try-free" className="block px-3 py-2 text-base font-medium text-blue-600">
              Try for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


