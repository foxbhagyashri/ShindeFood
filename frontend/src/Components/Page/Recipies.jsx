import React, { useState } from 'react';
import { 
  Shield, Award, Factory, Truck, Globe, Package, 
  FileText, ThermometerSnowflake, Leaf, Users, TrendingUp, 
  Star, Settings, Target, Eye, ClipboardCheck, Container,
  Sparkles, Zap, Heart, BadgeCheck, Box, Layers, Map, MapPin
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import phetaLogo from '../../assets/Homeimg/Pheta.png';
import momosImg from '../../assets/Homeimg/momos.png';
import parathaImg from '../../assets/Homeimg/Paratha.png';
import frozenVegImg from '../../assets/Homeimg/FrozenFood.png';
import worldMap from '../../assets/Map.png';

export default function Quality() {
  const [activeTab, setActiveTab] = useState('quality');

  const qualityStandards = [
    {
      icon: Globe,
      title: 'Export Quality Standards',
      description: 'Unwavering adherence to stringent export quality standards ensuring products meet the highest levels of safety, consistency, and taste for international clients.',
      highlights: ['Comprehensive quality management system', 'Global food safety regulations compliance', 'Partner factory network standardization', 'End-to-end quality control']
    },
    {
      icon: Shield,
      title: 'FSSAI Compliance',
      description: 'Full commitment to Food Safety and Standards Authority of India regulations, ensuring all products meet prescribed standards for additives, contaminants, and labeling requirements.',
      highlights: ['FSSAI guidelines adherence', 'Food additives standards', 'Contaminants monitoring', 'Comprehensive labeling compliance']
    },
    {
      icon: Target,
      title: 'HACCP Principles',
      description: 'Hazard Analysis and Critical Control Points deeply integrated into manufacturing processes, providing systematic and preventive approach to food safety at every production stage.',
      highlights: ['Hazard identification at all stages', 'Critical Control Points (CCPs)', 'Preventive food safety measures', 'Trained production teams']
    },
    {
      icon: Award,
      title: 'ISO Certifications',
      description: 'Actively pursuing ISO 9001 and ISO 22000 certifications demonstrating commitment to quality management, food safety, and continuous improvement in all operational processes.',
      highlights: ['ISO 9001 quality management', 'ISO 22000 food safety', 'International standards compliance', 'Continuous improvement framework']
    }
  ];

  const qualityProcess = [
    {
      icon: ClipboardCheck,
      title: 'Raw Material Inspection',
      description: 'Critical first stage examining all incoming raw materials for freshness, purity, and compliance with specifications through visual checks and laboratory testing.',
      features: ['Freshness verification', 'Purity testing', 'Microbiological testing', 'Pesticide residue analysis']
    },
    {
      icon: Settings,
      title: 'In-Process Quality Checks',
      description: 'Continuous monitoring at critical control points throughout production, tracking key parameters including temperature, pH levels, and moisture content in real-time.',
      features: ['Real-time monitoring', 'Temperature control', 'pH testing', 'Moisture content analysis']
    },
    {
      icon: Eye,
      title: 'Pre-Dispatch Inspection (PDI)',
      description: 'Final comprehensive inspection before dispatch, including visual packaging checks and laboratory testing to ensure all quality and safety standards are met.',
      features: ['Visual inspection', 'Packaging verification', 'Laboratory testing', 'Sensory evaluation']
    }
  ];

  const coldChainFeatures = [
    {
      icon: ThermometerSnowflake,
      title: 'Temperature-Controlled Storage',
      description: 'Large-capacity blast freezers maintaining consistent -18°C or below with advanced monitoring',
      badge: '-18°C'
    },
    {
      icon: Truck,
      title: 'Refrigerated Transportation',
      description: 'Refrigerated vehicle fleet with GPS tracking ensuring optimal temperature throughout transit',
      badge: '24/7'
    },
    {
      icon: Zap,
      title: 'SCADA-Based Automation',
      description: 'SCADA system enabling real-time control and temperature monitoring for frozen-food production.',
      badge: 'Live'
    }
  ];

  const packagingOptions = [
    {
      icon: Package,
      title: 'Food-Grade Materials',
      description: 'High-quality plastic films, laminates, and cartons sourced from certified suppliers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'Modified Atmosphere Packaging',
      description: 'Extended shelf life technology using nitrogen and carbon dioxide gas mixture',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Packaging',
      description: 'Recyclable biodegradable materials sourced from sustainable renewable resources',
      color: 'from-green-500 to-green-600'
    }
  ];

  const exportCountries = [
    { name: 'USA', code: 'US', description: 'North American market leader', position: 'top-[35%] left-[15%]' },
    { name: 'Canada', code: 'CA', description: 'Premium frozen foods hub', position: 'top-[25%] left-[18%]' },
    { name: 'UK', code: 'GB', description: 'European market presence', position: 'top-[25%] left-[48%]' },
    { name: 'Australia', code: 'AU', description: 'Asia-Pacific expansion', position: 'top-[70%] left-[78%]' },
    { name: 'Dubai', code: 'AE', description: 'Middle East gateway', position: 'top-[40%] left-[58%]' },
    { name: 'Singapore', code: 'SG', description: 'Southeast Asian hub', position: 'top-[55%] left-[72%]' }
  ];

  const exportCapabilities = [
    {
      icon: FileText,
      title: 'International Trade Experience',
      description: 'Extensive expertise in export documentation, customs clearance, and international logistics with deep understanding of import regulations.',
      features: ['Export documentation', 'Customs clearance', 'Global logistics', 'Regulatory compliance']
    },
    {
      icon: BadgeCheck,
      title: 'Global Food Safety Compliance',
      description: 'Full compliance with FDA (USA), EFSA (EU), and other regulatory bodies, ensuring products meet international safety standards.',
      features: ['FDA compliance', 'EFSA standards', 'Health certificates', 'Origin certificates']
    },
    {
      icon: Container,
      title: 'Efficient Logistics',
      description: 'Dedicated logistics team managing all export operations with reliable partners ensuring safe and timely delivery.',
      features: ['Timely dispatch', 'Safe transportation', 'Real-time tracking', 'Cost-effective solutions']
    }
  ];

  const packagingSolutions = [
    {
      icon: Box,
      title: 'Retail Packaging',
      description: 'Attractive consumer-friendly packaging with high-quality graphics and clear product information designed to stand out on shelves.',
      formats: ['Bags', 'Boxes', 'Trays', 'Custom designs']
    },
    {
      icon: Layers,
      title: 'HoReCa (Bulk) Packaging',
      description: 'Large-size bulk packaging designed for efficiency and convenience in commercial kitchen environments.',
      formats: ['Bulk bags', 'Industrial boxes', 'Large containers', 'Cost-effective solutions']
    },
    {
      icon: Sparkles,
      title: 'Customized Packaging',
      description: 'Tailored packaging solutions in terms of size, material, and design, including private label options.',
      formats: ['Custom sizes', 'Private labels', 'Unique designs', 'Brand integration']
    }
  ];

  const privateLabelServices = [
    {
      icon: Heart,
      title: 'Customized Product Formulation',
      description: 'Work with our food technologists to develop unique recipes tailored to your target market and brand positioning.',
      benefits: ['Unique recipes', 'Market-specific formulation', 'Expert support', 'Commercial viability']
    },
    {
      icon: Star,
      title: 'Branding & Packaging Design',
      description: 'Complete branding services with professional graphic design creating visually appealing and impactful packaging.',
      benefits: ['Brand identity', 'Graphic design', 'Shelf appeal', 'Market differentiation']
    },
    {
      icon: Users,
      title: 'End-to-End Support',
      description: 'Dedicated account manager providing personalized support from concept development to final product delivery.',
      benefits: ['Single point of contact', 'Full process support', 'Expert guidance', 'Launch assistance']
    }
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }} className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden mt-15">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8B1B1F]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-25 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B1B1F]/10 to-[#A52A2A]/10 px-6 py-3 rounded-full border border-[#8B1B1F]/20">
                <Award className="w-5 h-5 text-[#8B1B1F]" />
                <span className="text-[#8B1B1F] font-black text-sm uppercase tracking-wider">World-Class Standards</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  <span className="text-gray-900">Manufacturing</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#8B1B1F] bg-clip-text text-transparent">Quality & Exports</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Premium frozen foods with uncompromising quality standards delivered worldwide
                </p>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('quality')}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                    activeTab === 'quality'
                      ? 'bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white shadow-xl shadow-[#8B1B1F]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Quality Standards
                </button>
                <button
                  onClick={() => setActiveTab('exports')}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                    activeTab === 'exports'
                      ? 'bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white shadow-xl shadow-[#8B1B1F]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Global Exports
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#8B1B1F] mb-1">15+</div>
                  <div className="text-sm text-gray-600 font-semibold">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#8B1B1F] mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#8B1B1F] mb-1">24/7</div>
                  <div className="text-sm text-gray-600 font-semibold">Monitoring</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={frozenVegImg} 
                  alt="Quality Products" 
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Floating Badges */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#8B1B1F]" />
                    <span className="font-black text-gray-900">ISO Certified</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-green-600" />
                    <span className="font-black text-gray-900">HACCP Compliant</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {activeTab === 'quality' ? (
        <>
          {/* Quality Standards Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
             
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Our <span className="bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] bg-clip-text text-transparent">Quality Standards</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Excellence through internationally recognized quality management systems
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#8B1B1F]/20 group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <standard.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">{standard.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      {standard.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 shrink-0" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Multi-Stage Quality Control */}
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">

                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Multi-Stage <span className="bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] bg-clip-text text-transparent">Quality Control</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Rigorous inspection process from raw materials to final dispatch
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {qualityProcess.map((process, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#8B1B1F]/30 hover:-translate-y-2">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform">
                        <process.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-blackReal-Time Monitoring text-gray-900 mb-3 text-center">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-center">
                        {process.description}
                      </p>
                      <div className="space-y-2">
                        {process.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#8B1B1F] rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {index < qualityProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-1 bg-[#8B1B1F]"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Quality Features */}
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#8B1B1F]/5 to-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-12 h-12 text-[#8B1B1F]" strokeWidth={2.5} />
                    <h3 className="text-2xl font-black text-gray-900">Trained Production Teams</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our highly trained and experienced production teams are our greatest asset. Regular training on food safety, HACCP principles, and standard operating procedures ensures consistent quality and a culture of accountability.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500/5 to-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <Factory className="w-12 h-12 text-[#8B1B1F]" strokeWidth={2.5} />
                    <h3 className="text-2xl font-black text-gray-900">State-of-the-Art Facilities</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Modern machinery, temperature-controlled environments, advanced air filtration systems, and on-site quality control laboratories equipped with latest testing equipment ensure efficiency, consistency, and safety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cold Chain Management */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
                
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Advanced <span className="bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] bg-clip-text text-transparent">Cold Chain Management</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Maintaining product integrity from factory to customer doorstep
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {coldChainFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#8B1B1F]/5 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 border-[#8B1B1F]/20 hover:border-[#8B1B1F]/40 group">
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] text-white font-black px-4 py-2 rounded-full text-sm">
                      {feature.badge}
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hygienic Packaging */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
               
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Hygienic <span className="bg-gradient-to-r from-[#8B1B1F] to-green-600 bg-clip-text text-transparent">Packaging Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Safe, effective, and environmentally responsible packaging
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {packagingOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-300 group hover:-translate-y-2">
                    <div className={`w-20 h-20 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">{option.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Global Reach Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
                
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Our <span className="bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] bg-clip-text text-transparent">Global Reach</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Serving premium frozen foods to discerning markets worldwide
                </p>
              </div>

              {/* World Map Visual with Interactive Markers */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 mb-12 border-2 border-gray-100">
                <div className="relative">
                  {/* Map Background */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src={worldMap} 
                      alt="Global Presence Map" 
                      className="w-full h-100 opacity-90"
                    />
                    
                    {/* Country Markers */}
                    {exportCountries.map((country, index) => (
                      <div 
                        key={index} 
                        className={`absolute ${country.position} group cursor-pointer`}
                      >
                        {/* Animated Pulse */}
                        <div className="absolute inset-0 bg-[#8B1B1F] rounded-lg animate-ping opacity-75 w-15 h-10"></div>
                        
                        {/* Marker Box with Icon */}
                        <div className="relative bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-lg shadow-lg px-3 py-2 transform group-hover:scale-110 transition-all duration-300 border-2 border-white flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-white" strokeWidth={2.5} />
                          <span className="text-white font-black text-sm">{country.code}</span>
                        </div>
                        
                        {/* Tooltip Card */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                          <div className="bg-white rounded-xl shadow-2xl p-4 min-w-[200px] border-2 border-[#8B1B1F]/20">
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <MapPin className="w-6 h-6 text-[#8B1B1F]" />
                                <span className="font-black text-gray-900 text-lg">{country.name}</span>
                              </div>
                              <div className="text-sm text-gray-600">{country.description}</div>
                            </div>
                            {/* Arrow */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-[#8B1B1F]/20 transform rotate-45"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {exportCountries.map((country, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all">
                        <span className="font-bold text-[#8B1B1F] text-sm">{country.code}</span>
                        <span className="font-semibold text-gray-900 text-sm">{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Market Presence */}
              <div className="bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-black mb-6 text-center">International Market Presence</h3>
                <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  Shinde Foods' international market presence is a reflection of its commitment to quality, reliability, and customer satisfaction. We have built a strong reputation in our target export countries by consistently delivering products that meet the highest standards of taste, safety, and quality.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-4xl font-black mb-2">15+</div>
                    <div className="text-sm">Countries Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-4xl font-black mb-2">100+</div>
                    <div className="text-sm">International Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-4xl font-black mb-2">5★</div>
                    <div className="text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Export Capabilities */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
                
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Export <span className="bg-gradient-to-r from-[#8B1B1F] to-blue-600 bg-clip-text text-transparent">Capabilities</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive expertise in international trade and logistics
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {exportCapabilities.map((capability, index) => (
                  <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#8B1B1F]/30 group hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packaging Solutions */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
               
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Packaging <span className="bg-gradient-to-r from-purple-600 to-[#8B1B1F] bg-clip-text text-transparent">Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Flexible packaging options for retail and commercial clients
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {packagingSolutions.map((solution, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-300 group hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {solution.formats.map((format, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Private Label Services */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-16">
                
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Private Label <span className="bg-gradient-to-r from-[#8B1B1F] to-yellow-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Complete support for building your own brand
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {privateLabelServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#8B1B1F]/30 group hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* MOQ Section */}
              <div className="bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-3xl p-12 text-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-black mb-4">Minimum Order Quantities (MOQ)</h3>
                    <p className="text-lg leading-relaxed mb-6">
                      At Shinde Foods, we understand that our clients have different needs and requirements. We offer flexible minimum order quantities (MOQs) designed to be accessible to businesses of all sizes, from small retailers to large distributors.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 shrink-0" />
                        <span className="font-semibold">Flexible MOQ for different products</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 shrink-0" />
                        <span className="font-semibold">Customized MOQ options available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 shrink-0" />
                        <span className="font-semibold">Tailored solutions for B2B clients</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 shrink-0" />
                        <span className="font-semibold">Flexible delivery schedules</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-4xl font-black mb-2">Scalable</div>
                      <div className="text-lg">Business Solutions</div>
                    </div>
                    <p className="text-center">
                      We can work with you to develop a customized supply chain solution designed to meet your specific needs, providing a seamless and hassle-free experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section
      <section className="py-20 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Experience world-class quality and reliable global export services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-[#8B1B1F] rounded-2xl font-black text-lg shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-white/50">
              Request a Quote
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur text-white rounded-2xl font-black text-lg shadow-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white hover:scale-110">
              Download Catalog
            </button>
          </div>
        </div>
      </section> */}

    </div>
  );
}
