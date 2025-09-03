'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Star, MessageCircle, Zap, Shield } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: "Transform Your Business with",
      titleHighlight: "AI-Powered Solutions",
      subtitle: "Automate conversations, boost engagement, and drive growth with our intelligent AI Business platform.",
      cta: "Get Started",
      bgGradient: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      title: "AI That Understands",
      titleHighlight: "Your Business",
      subtitle: "AI understand your business, Intelligent chatbots that learn from every interaction, providing personalized customer experiences at scale.",
      cta: "Get Started",
      bgGradient: "from-purple-600 via-pink-600 to-orange-600"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Grid pattern overlay - properly organized */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated background elements - properly layered */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content container - highest z-index */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Current Slide Only - FIXED: No more overlapping */}
        <div className="relative">
          <div className="transition-opacity duration-1000">
            {/* Main heading - FIXED: Consistent sizing across all slides */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              <div className="block mb-4">{slides[currentSlide].title}</div>
              <div className={`block bg-gradient-to-r ${slides[currentSlide].bgGradient} bg-clip-text text-transparent`}>
                {slides[currentSlide].titleHighlight}
              </div>
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-4xl text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Social proof - moved above trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400 mb-8">
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
        </div>

        {/* Trust indicators - moved below checkmarks */}
        <div className="flex items-center justify-center gap-6 mb-12 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-700 bg-slate-800" />
              ))}
            </div>
            <span>Trusted by 10,000+ companies</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 rating</span>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements - properly positioned */}
      <div className="absolute bottom-20 left-10 hidden lg:block z-10">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-4">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-20" />
        </div>
      </div>

      <div className="absolute top-20 right-10 hidden lg:block z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-3">
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl opacity-20" />
        </div>
      </div>
    </section>
  );
}


