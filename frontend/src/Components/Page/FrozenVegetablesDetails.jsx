import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, Sparkles, Award, Shield, Clock, Apple } from 'lucide-react';
import frozenVegImg from '../../assets/AboutUs/fronzenfood1.png';

export default function FrozenVegetablesDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const keyHighlights = [
    {
      icon: '🌽',
      title: 'Sweet Corn',
      description: 'Frozen at peak sweetness for crisp texture'
    },
    {
      icon: '🥗',
      title: 'Mixed Vegetables',
      description: 'Nutritious blend of carrots, peas, corn, beans'
    },
    {
      icon: '🫛',
      title: 'Green Peas',
      description: 'Versatile ingredient for various cuisines'
    },
    {
      icon: '❄️',
      title: 'IQF Technology',
      description: 'Preserves color, flavor, and nutrition'
    },
    {
      icon: '🚜',
      title: 'Trusted Farms',
      description: 'Sourced with rigorous quality checks'
    },
    {
      icon: '📦',
      title: 'Long Shelf Life',
      description: 'Food-grade packaging for convenience'
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Farm Fresh',
      description: 'Sourced from premium farms'
    },
    {
      icon: Clock,
      title: 'Year-Round',
      description: 'Available all seasons'
    },
    {
      icon: Apple,
      title: 'Nutrient Rich',
      description: 'Vitamins and minerals preserved'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Export-grade standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#8B1B1F] font-semibold hover:text-[#A52A2A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1B1F]/10 to-[#A52A2A]/10 rounded-3xl blur-3xl"></div>
              <img
                src={frozenVegImg}
                alt="Frozen Vegetables"
                className="relative w-full h-auto object-contain rounded-3xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-[#8B1B1F] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                FARM FRESH
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
                PREMIUM QUALITY
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Frozen <span className="text-[#8B1B1F]">Vegetables</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Flash-frozen vegetables retaining peak freshness, nutrients and natural flavors
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Sweet Corn
                </span>
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Mix Vegetables
                </span>
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Green Peas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#8B1B1F]" />
              Product Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The frozen vegetables category is a key offering from Shinde Foods, providing a range of essential, high-quality ingredients that are a staple in kitchens worldwide. All vegetables are processed using the latest IQF (Individual Quick Freezing) technology, preserving their natural color, flavor, and nutritional value. Sourced from trusted farms with rigorous quality checks, they are packaged in convenient, food-grade bags for both home cooks and professional chefs. The product line includes sweet corn, a blend of mixed vegetables (typically carrots, peas, beans, and corn), and green peas, all of which are frozen at their peak freshness to ensure maximum taste and nutrient retention.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Key <span className="text-[#8B1B1F]">Highlights</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FDF2F2] to-white border-2 border-[#FBE5E5] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-[#FDF2F2] to-white rounded-3xl p-8 sm:p-10 md:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Why Choose Our <span className="text-[#8B1B1F]">Frozen Vegetables</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-2xl mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Get Fresh, Nutritious Frozen Vegetables
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to place your order or learn more about our products
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#8B1B1F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
