import React, { useState } from 'react';
import { Search, Star, Truck, UtensilsCrossed, Headphones, ArrowRight } from 'lucide-react';
import deliveryImage from '../../assets/Productimg/Delivery.png';
import { useNavigate } from 'react-router-dom';

export default function FoodDeliveryLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page or filter products
      navigate('/products');
    }
  };

  const handleExploreProducts = () => {
    navigate('/GetProducts');
  };
  return (
    <div className="min-h-screen bg-white mt-24">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        {/* Large Yellow Blob Background */}
        <div className="absolute top-0 right-0 w-[55%] h-full">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <path
              d="M 250 50 Q 450 50 450 250 Q 450 450 250 450 Q 150 450 100 350 Q 50 250 150 150 Q 250 50 250 50"
              fill="#FDB913"
              className="animate-pulse"
              style={{ animationDuration: '8s' }}
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
        

            <h1 className="text-5xl font-semibold leading-tight">
              Premium 
              <span className="text-[#8B1B1F]">Quality</span> & <br />
              Export <span className="font-black text-[#8B1B1F]">Excellence.</span>
            </h1>

            
            {/* Explore Products Button */}
            <div>
              <button 
                onClick={handleExploreProducts}
                className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Explore Products
                <ArrowRight size={15} strokeWidth={2} />
              </button>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-red-400 border-2 border-white flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="w-12 h-12 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white font-bold">
                  C
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Trusted by Global Clients</p>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">4.9</span>
                  <span className="text-gray-500 text-sm">(International Partners)</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Get in touch for bulk orders and exports</p>
              <div className="flex gap-3">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                  <span className="text-xs font-semibold">info@shindefoods.com</span>
                </div>
                <div className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <span className="text-xs font-semibold">Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image with Floating Badges */}
          <div className="relative z-10">
            {/* Export Quality Badge */}
            <div className="absolute top-2 -left-4 bg-gradient-to-r  px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce border-4 border-white" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-7 bg-white rounded-lg flex items-center justify-center">
                <Truck className="text-[#8B1B1F]" size={25} strokeWidth={2} />
              </div>
              <span className="font-black text-[#8B1B1F]">Export Quality</span>
            </div>

            {/* FSSAI Certified Badge */}
           

            {/* Delivery Person Image */}
            <img
              src={deliveryImage}
              alt="Delivery person with pizza boxes"
              className="relative z-10 w-full h-[500px] object-contain"

            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Fresh Salad Image with Circular Border */}
          <div className="relative">
            <div className="relative">
              <div className="w-full aspect-square rounded-full border-8 border-gray-800 overflow-hidden bg-white p-4">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop"
                  alt="Fresh salad"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Decorative green leaves */}
              <div className="absolute -left-12 top-20 text-6xl">🌿</div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-800">Why Choose Shinde Foods?</h2>

            <div className="space-y-6">
              {/* Feature 1 - Commitment to Quality */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <UtensilsCrossed className="text-orange-500" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Commitment to Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our unwavering commitment to quality is embedded in every aspect of operations, from sourcing to delivery. We implement comprehensive quality management systems based on FSSAI and HACCP standards, with multi-stage inspections ensuring products are delicious, safe, and hygienic.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Export Expertise */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Truck className="text-orange-500" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Export Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We bring extensive expertise in merchant exporting with deep understanding of global logistics, documentation, and regulatory compliance. Our team ensures smooth, hassle-free international trade experiences, handling customs clearance to shipping while you focus on your core business.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Customer-Centric Approach */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Headphones className="text-orange-500" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Customer-Centric Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our customers are at the heart of everything we do. We believe our success is linked to yours, providing exceptional service built on trust, transparency, and understanding. From customized formulations to flexible delivery, we go the extra mile for long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}