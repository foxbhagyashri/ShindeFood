import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Utensils, Sparkles, Award, Shield, Clock, ChefHat } from 'lucide-react';
import parathaImg from '../../assets/AboutUs/Paratha2.png';

export default function ParathasDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const keyHighlights = [
    {
      icon: '🥔',
      title: 'Aloo Paratha',
      description: 'Classic spiced potato filling'
    },
    {
      icon: '🥦',
      title: 'Gobi Paratha',
      description: 'Nutritious seasoned cauliflower'
    },
    {
      icon: '🥕',
      title: 'Mix Veg & Mooli',
      description: 'Diverse vegetable options including radish'
    },
    {
      icon: '🍄',
      title: 'Innovative Variants',
      description: 'Mushroom and other creative options'
    },
    {
      icon: '🔥',
      title: 'Easy Preparation',
      description: 'Heat on tawa or microwave'
    },
    {
      icon: '🏠',
      title: 'Home-Cooked Taste',
      description: 'Traditional authentic recipe'
    }
  ];

  const features = [
    {
      icon: Utensils,
      title: 'Multiple Variants',
      description: 'Wide range of filling options'
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Ready in minutes'
    },
    {
      icon: ChefHat,
      title: 'Authentic Recipe',
      description: 'Traditional homemade taste'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Finest ingredients used'
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
                src={parathaImg}
                alt="Parathas"
                className="relative w-full h-auto object-contain rounded-3xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-[#8B1B1F] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                AUTHENTIC TASTE
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4">
                ALL AUTHENTIC VARIANTS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Frozen <span className="text-[#8B1B1F]">Parathas</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional Indian flatbreads with delicious fillings - aloo, gobhi, mix veg and more
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Aloo Paratha
                </span>
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Gobi Paratha
                </span>
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Mix Veg
                </span>
                <span className="bg-white border-2 border-[#8B1B1F] text-[#8B1B1F] px-4 py-2 rounded-lg font-semibold text-sm">
                  Mooli Paratha
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
              Parathas are a cornerstone of Indian cuisine, and Shinde Foods offers a wide and enticing range of these flaky, stuffed flatbreads. Each paratha is meticulously prepared using high-quality ingredients and traditional recipes, ensuring an authentic taste and texture that is reminiscent of home-cooked food. Pre-cooked and flash-frozen for convenience, they can be easily heated on a tawa or in a microwave. The product range includes various popular variants such as aloo (potato), gobhi (cauliflower), mooli (radish), mix veg, and even innovative options like mushroom paratha, catering to diverse taste preferences.
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
              Why Choose Our <span className="text-[#8B1B1F]">Parathas</span>
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
            Experience Authentic Indian Parathas
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
