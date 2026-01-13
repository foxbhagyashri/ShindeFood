import React from 'react';
import { ShoppingBag, Target, Heart, Award, Shield, Factory, TrendingUp, Users, Star, Leaf, Globe, Package, Truck } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import phetaLogo from '../../assets/Homeimg/Pheta.png';
import momosImg from '../../assets/AboutUs/momos2.png';
import parathaImg from '../../assets/AboutUs/Paratha2.png';
import samosaImg from '../../assets/AboutUs/samosa.png';
import frenchFriesImg from '../../assets/AboutUs/frenchfries.png';
import cokeImg from '../../assets/AboutUs/coke.png';
import paatiesImg from '../../assets/AboutUs/paaties.png';
import productImg from '../../assets/AboutUs/productimg.png';
import timelineImg from '../../assets/AboutUs/timeline.png';
function AboutUs() {
  const coreValues = [
    {
      icon: Award,
      title: "Quality First",
      description: "Unwavering commitment to export-grade standards with multi-stage inspection processes",
      color: "from-[#8B1B1F] to-[#A52A2A]"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparent and ethical dealings fostering trust and mutual respect",
      color: "from-[#6B1519] to-[#8B1B1F]"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Flexible solutions and customized packaging for client success",
      color: "from-[#A52A2A] to-[#6B1519]"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously expanding product range and improving processes",
      color: "from-[#8B1B1F] to-[#B83B3F]"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality, timely deliveries, and professional service",
      color: "from-[#6B1519] to-[#A52A2A]"
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Sustainable practices and eco-friendly packaging options",
      color: "from-[#A52A2A] to-[#8B1B1F]"
    }
  ];

  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      description: "Established as Proprietorship Firm in Pune, Maharashtra on December 15, 1990"
    },
    {
      year: "2000s",
      title: "Product Expansion",
      description: "Strategic shift to diverse frozen foods including momos, parathas, and vegetables"
    },
    {
      year: "2010s",
      title: "Multi-Plant System",
      description: "Developed robust multi-plant production system for scalability and consistency"
    },
    {
      year: "Present",
      title: "Global Presence",
      description: "Recognized merchant exporter with growing international presence and private label services"
    }
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "1000+", label: "Business Partners" },
    { icon: Package, value: "100+", label: "Product Variants" },
    { icon: Star, value: "100%", label: "Quality Guaranteed" }
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }} className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-14 md:py-17 bg-gradient-to-br from-[#FDF2F2] via-white to-[#FBE5E5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mt-16 sm:mt-18 md:mt-20 lg:mt-10">
          <div className="text-center mb-0">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-2">
              <img src={phetaLogo} alt="Shinde Foods Logo" className="h-14 sm:h-16 md:h-30 lg:h-33 w-auto object-contain" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-4">
              About <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">Shinde Foods</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A dynamic merchant exporter specializing in premium quality frozen foods, serving domestic and international markets since 1990
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-2xl sm:text-2xl md:text-3xl font-black text-[#8B1B1F] mb-1.5 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Company <span className="text-[#8B1B1F]">Overview</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6 mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
              <div className="w-3 h-3 bg-[#8B1B1F] rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
              <div className="w-3 h-3 bg-[#A52A2A] rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start mb-12 sm:mb-16 md:mb-20 lg:mb-25">
            {/* Left - Text Content */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6">Eat Healthy – Pure Taste, Better Nutrition</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p className="text-justify">
                  Shinde Foods brings you clean, tasty, and nutritious frozen foods made with <span className="font-bold text-[#8B1B1F]">real ingredients</span>. Established in Pune, Maharashtra on <span className="font-bold text-[#8B1B1F]">December 15, 1990</span>, we specialize in premium quality <span className="font-bold">Ready-to-Eat (RTE)</span> and <span className="font-bold">Ready-to-Cook (RTC)</span> products that combine authentic taste with modern nutrition.
                </p>
                <p className="text-justify">
                  Our commitment to healthy eating means <span className="font-bold text-[#8B1B1F]">no maida, no added colours, and no shortcuts</span>—just honest food for everyday life. From whole-wheat momos steamed to perfection, to baked samosas with 40% less oil, every product is crafted with care to bring you restaurant-quality taste with home-style purity.
                </p>
                <p className="text-justify">
                  As a merchant exporter with export-grade hygiene standards, we serve both domestic and international markets through our robust multi-plant production system. Whether for retail consumers or the HoReCa sector, our diverse range of frozen foods ensures convenience without compromising on quality, taste, or nutritional value.
                </p>
                
                {/* Healthy Product Highlights */}
                <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-green-100">
                    <h4 className="font-black text-[#8B1B1F] mb-1.5 sm:mb-2 text-sm sm:text-base">🥟 Healthy Momos</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Whole-wheat • Steamed • No preservatives</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-orange-100">
                    <h4 className="font-black text-[#8B1B1F] mb-1.5 sm:mb-2 text-sm sm:text-base">🥙 Baked Samosa</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Millet+Oats • 40% less oil • Crispy</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-yellow-100">
                    <h4 className="font-black text-[#8B1B1F] mb-1.5 sm:mb-2 text-sm sm:text-base">🫓 Soft Parathas</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Whole-wheat • High fibre • No maida</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-red-100">
                    <h4 className="font-black text-[#8B1B1F] mb-1.5 sm:mb-2 text-sm sm:text-base">🍛 Ready Gravies</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Clean label • Low sodium • Home-style</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Product Gallery (6 Images) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0 lg:pt-20">
              <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={momosImg} alt="Frozen Momos" className="w-full h-32 sm:h-36 md:h-40 lg:h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 text-white">
                    <p className="font-black text-xs sm:text-sm">Momos</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-4">
                <img src={parathaImg} alt="Frozen Parathas" className="w-full h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-black text-sm">Parathas</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={samosaImg} alt="Frozen Samosa" className="w-full h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-black text-sm">Samosas</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-4">
                <img src={frenchFriesImg} alt="French Fries" className="w-full h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-black text-sm">French Fries</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={paatiesImg} alt="Patties" className="w-full h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-black text-sm">Patties</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mt-4">
                <img src={cokeImg} alt="Special Fries" className="w-full h-45 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-black text-sm">Special Fries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Portfolio */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
             <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our Product<span className="text-[rgb(139,27,31)]">  Portfolio</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-6 mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
              <div className="w-3 h-3 bg-[#8B1B1F] rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
              <div className="w-3 h-3 bg-[#A52A2A] rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
            </div>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              {/* Left - Product Image */}
              <div className="relative group">
                <img 
                  src={productImg} 
                  alt="Product Portfolio" 
                  className="w-full h-70 object-contain rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right - Description */}
              <div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Our product portfolio is a testament to our deep understanding of market trends and consumer preferences. We offer a comprehensive selection of frozen foods, including popular items like <span className="font-bold text-[#8B1B1F]">Frozen Veg Momos, Frozen Chicken Momos</span>, a variety of <span className="font-bold text-[#8B1B1F]">Parathas, Samosas, Spring Rolls, and Nuggets</span>, alongside essential frozen vegetables such as <span className="font-bold text-[#8B1B1F]">Sweet Corn, Mixed Vegetables, and Green Peas</span>.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Quality Ingredients</h4>
                <p className="text-gray-600 text-sm">Meticulous attention from raw material selection to final packaging</p>
              </div>
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Global Standards</h4>
                <p className="text-gray-600 text-sm">Export-grade hygiene and quality-focused manufacturing</p>
              </div>
              <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 rounded-xl border border-[#FBE5E5]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A52A2A] to-[#6B1519] rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900 mb-2">Reliable Partner</h4>
                <p className="text-gray-600 text-sm">Strategic partner dedicated to client business success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                To be a leading provider of premium, export-quality frozen foods that combine authentic taste with unparalleled convenience. We are dedicated to sourcing and delivering products that meet the highest international standards of food safety and hygiene, ensuring the complete satisfaction of our B2B clients and their end consumers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Build long-lasting partnerships through reliable service</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Address unique needs of retail and HoReCa sectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Foster culture of culinary excellence globally</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                To establish Shinde Foods as a globally recognized and trusted brand in the frozen food export industry. We aspire to be the preferred partner for international buyers seeking a diverse and premium range of Indian frozen food products, setting new benchmarks for excellence in the sector.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Continuously innovate product offerings</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Expand global reach with sustainable practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Drive growth of Indian culinary traditions worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Our Core <span className="text-[#8B1B1F]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Values that guide our every decision and action in delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#8B1B1F]"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-full mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-[#8B1B1F] transition-colors">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#8B1B1F]">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Three decades of excellence, innovation, and commitment to quality frozen foods
            </p>
          </div>

          {/* Story Introduction */}
          <div className="bg-gradient-to-br from-[#FDF2F2] to-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5] mb-16">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Founding and History</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-justify">
                Shinde Foods was founded in Pune, Maharashtra, on <span className="font-bold text-[#8B1B1F]">December 15, 1990</span>, as a Proprietorship Firm with a clear vision to bridge the gap between India's rich culinary heritage and the global demand for high-quality, convenient food products. The company was established with the primary activity of manufacturing and exporting a variety of food products.
              </p>
              <p className="text-justify">
                From its inception, the founders recognized the immense potential of the frozen food market and the growing need for reliable merchant exporters who could guarantee quality and consistency. The strategic location in Pune, a major industrial and logistics hub in Maharashtra, provided the ideal foundation for building a business focused on both domestic distribution and international trade.
              </p>
              <p className="text-justify">
                The company's journey has been marked by a steadfast commitment to its core principles of quality, hygiene, and customer satisfaction. By leveraging a multi-plant production system, Shinde Foods was able to offer a diverse and resilient product line, mitigating risks associated with single-source manufacturing.
              </p>
            </div>
          </div>

          {/* Corporate Milestones Timeline */}
          <div className="relative  p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            

            {/* Title */}
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Our <span className="text-[#A52A2A]">Milestones</span>
              </h2>
            </div>

            {/* Desktop Timeline - Horizontal Shields */}
            <div className="hidden lg:block relative z-10">
              {/* Connection Line */}
              <div className="absolute bottom-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#5B8FA3] via-[#6B9B5F] via-[#A67C52] via-[#5B8FA3] to-[#8B5BA3]"></div>
              
              <div className="grid grid-cols-5 gap-4 pb-24">
                {/* Foundation */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    {/* Shield Shape */}
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Established as a Proprietorship Firm in Pune, Maharashtra on December 15, 1990.
                      </p>
                    </div>
                    
                    {/* Bottom Icon Circle */}
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <span className="text-2xl">🏢</span>
                    </div>

                    {/* Year Label */}
                    <div className="text-3xl font-black text-[#5B8FA3]">1990</div>
                  </div>
                </div>

                {/* Product Expansion */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Product Expansion</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Strategic shift to diverse frozen foods including momos, parathas, and vegetables.
                      </p>
                    </div>
                    
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <span className="text-2xl">📈</span>
                    </div>

                    <div className="text-3xl font-black text-[#6B9B5F]">2000s</div>
                  </div>
                </div>

                {/* Multi-Plant System */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Multi-Plant System</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Developed a robust multi-plant production system for scalability and consistency.
                      </p>
                    </div>
                    
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <span className="text-2xl">🏭</span>
                    </div>

                    <div className="text-3xl font-black text-[#A67C52]">2010s</div>
                  </div>
                </div>

                {/* Global Presence */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Global Presence</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Recognized merchant exporter with growing international presence and private label services.
                      </p>
                    </div>
                    
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>

                    <div className="text-3xl font-black text-[#5B8FA3]">Present</div>
                  </div>
                </div>

                {/* Future */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Future</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Future growth and innovation.
                      </p>
                    </div>
                    
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>

                    <div className="text-3xl font-black text-[#8B5BA3]">Future</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Timeline - 2 Columns */}
            <div className="hidden md:block lg:hidden relative z-10 pb-24">
              <div className="grid grid-cols-2 gap-8 mb-16">
                {/* Foundation */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Established as a Proprietorship Firm in Pune, Maharashtra on December 15, 1990.
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div className="text-xl font-black text-[#5B8FA3]">1990</div>
                  </div>
                </div>

                {/* Product Expansion */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Product Expansion</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Strategic shift to diverse frozen foods including momos, parathas, and vegetables.
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div className="text-xl font-black text-[#6B9B5F]">2000s</div>
                  </div>
                </div>

                {/* Multi-Plant System */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Multi-Plant System</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Developed a robust multi-plant production system for scalability and consistency.
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <div className="text-xl font-black text-[#A67C52]">2010s</div>
                  </div>
                </div>

                {/* Global Presence */}
                <div className="group relative">
                  <div className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-72 flex flex-col mb-4">
                      <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Global Presence</h4>
                      <p className="text-white text-sm leading-relaxed text-center">
                        Recognized merchant exporter with growing international presence and private label services.
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div className="text-xl font-black text-[#5B8FA3]">Present</div>
                  </div>
                </div>
              </div>

              {/* Future - Centered */}
              <div className="group relative">
                <div className="max-w-sm mx-auto flex flex-col items-center">
                  <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 h-72 flex flex-col mb-4">
                    <h4 className="text-white font-black text-xl mb-3 text-center border-b-2 border-white pb-2">Future</h4>
                    <p className="text-white text-sm leading-relaxed text-center">
                      Future growth and innovation.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="text-3xl font-black text-[#8B5BA3]">Future</div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden relative z-10 space-y-16">
              {/* Foundation */}
              <div className="group relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                    <div className="text-3xl font-black text-white/80 mb-2 text-center">1990</div>
                    <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Foundation</h4>
                    <p className="text-white text-xs leading-relaxed text-center">
                      Established as a Proprietorship Firm in Pune, Maharashtra on December 15, 1990.
                    </p>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl">
                    <span className="text-xl">🏢</span>
                  </div>
                </div>
              </div>

              {/* Product Expansion */}
              <div className="group relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-b from-[#6B9B5F] to-[#5A8A4F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                    <div className="text-3xl font-black text-white/80 mb-2 text-center">2000s</div>
                    <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Product Expansion</h4>
                    <p className="text-white text-xs leading-relaxed text-center">
                      Strategic shift to diverse frozen foods including momos, parathas, and vegetables.
                    </p>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#6B9B5F] flex items-center justify-center shadow-xl">
                    <span className="text-xl">📈</span>
                  </div>
                </div>
              </div>

              {/* Multi-Plant System */}
              <div className="group relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-b from-[#A67C52] to-[#8F6B42] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                    <div className="text-3xl font-black text-white/80 mb-2 text-center">2010s</div>
                    <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Multi-Plant System</h4>
                    <p className="text-white text-xs leading-relaxed text-center">
                      Developed a robust multi-plant production system for scalability and consistency.
                    </p>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#A67C52] flex items-center justify-center shadow-xl">
                    <span className="text-xl">🏭</span>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div className="group relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-b from-[#5B8FA3] to-[#4A7C8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 transform group-hover:scale-105 transition-all duration-300 h-64 flex flex-col">
                    <div className="text-3xl font-black text-white/80 mb-2 text-center">Present</div>
                    <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Global Presence</h4>
                    <p className="text-white text-xs leading-relaxed text-center">
                      Recognized merchant exporter with growing international presence and private label services.
                    </p>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#5B8FA3] flex items-center justify-center shadow-xl">
                    <span className="text-xl">🌍</span>
                  </div>
                </div>
              </div>

              {/* Future */}
              <div className="group relative">
                <div className="relative">
                  <div className="relative bg-gradient-to-b from-[#8B5BA3] to-[#724A8F] rounded-t-3xl rounded-b-full border-4 border-white shadow-2xl p-6 pb-10 group-hover:scale-105  h-64 flex flex-col">
                    <h4 className="text-white font-black text-lg mb-3 text-center border-b-2 border-white pb-2">Future</h4>
                    <p className="text-white text-xs leading-relaxed text-center">
                      Future growth and innovation.
                    </p>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#8B5BA3] flex items-center justify-center shadow-xl">
                    <span className="text-xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-[#8B1B1F]">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals driving excellence at every level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Leadership */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Leadership Profiles</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                The leadership at Shinde Foods is composed of experienced professionals with wealth of knowledge from food processing, export, and logistics industries. The team's expertise in merchant exporting is evident in our robust supply chain and ability to meet diverse global clientele needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Strategic vision and operational excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Expertise in international food safety standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Customer-centric philosophy and innovation</span>
                </li>
              </ul>
            </div>

            {/* Production Teams */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#FBE5E5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B1519] to-[#8B1B1F] rounded-full flex items-center justify-center shadow-lg">
                  <Factory className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-gray-900">Production Teams</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                Our highly skilled production teams comprise trained food technologists, quality control inspectors, and production supervisors. They bring deep understanding of food processing techniques and safety protocols to every manufacturing stage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Multi-stage inspection process expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">HACCP and GMP compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#8B1B1F] mt-1 shrink-0" />
                  <span className="text-gray-700">Continuous training on latest advancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
}

export default AboutUs; 