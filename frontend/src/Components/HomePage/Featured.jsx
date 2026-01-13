import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Shield, Award, Sparkles, Package, UtensilsCrossed, Apple, ArrowRight } from 'lucide-react';
import momosImg from '../../assets/Homeimg/momos.png';
import parathaImg from '../../assets/Homeimg/Paratha.png';
import frozenVegetableImg from '../../assets/Homeimg/19315-removebg-preview.png';
import samosaimg from '../../assets/Homeimg/punjabi-samosa.png';
import dalimg from '../../assets/Homeimg/Generated_Image_December_15__2025_-_4_33PM-removebg-preview.png';
import readygravy from '../../assets/Homeimg/32001-removebg-preview.png';


// Data Structure for the Product Categories
const productCategories = [
  {
    id: 1,
    name: "Momos",
    subtitle: "Healthy Momos. Real Taste.",
    icon: Package,
    image: momosImg,
    badge: "READY IN 15 MIN",
    description: "Whole-wheat momos,Steamed, not fried",
    gradient: "from-[#8B1B1F] to-[#A52A2A]"
  },
  {
    id: 2,
    name: "Paratha",
    subtitle: " Everyday nutrition, simple taste.",
    icon: UtensilsCrossed,
    image: parathaImg,
    badge: "AUTHENTIC TASTE",
    description: "Made with fresh vegetable purée, Soft texture, no maida",
    gradient: "from-[#6B1519] to-[#8B1B1F]"
  },
  {
    id: 3,
    name: "Frozen Vegetables",
    subtitle: "Premium Quality",
    icon: Apple,
    image: frozenVegetableImg,
    badge: "FARM FRESH",
    description: "Flash-frozen vegetables retaining peak freshness, nutrients and natural flavors",
    gradient: "from-[#A52A2A] to-[#6B1519]"
  },
  {
    id: 4,
    name: "Samosa",
    subtitle: "Crisp taste, low oil.",
    icon: Apple,
    image: samosaimg,
    badge: "FARM FRESH",
    description: "Baked samosa (not fried),40% less oil",
    gradient: "from-[#A52A2A] to-[#6B1519]"
  },
  {
    id: 5,
    name: "Ready Gravies",
    subtitle: "Home-style, slow-cooked gravies",
    icon: Apple,
    image: readygravy,
    badge: "FARM FRESH",
    description: "Tomato & spice base,No artificial colours",
    gradient: "from-[#A52A2A] to-[#6B1519]"
  },
  {
    id: 6,
    name: "Varieties",
    subtitle: "Pure taste. Clean cooking.",
    icon: Apple,
    image: dalimg,
    badge: "FARM FRESH",
    description: "Butter Masala,Palak Curry,Dal Makhani",
    gradient: "from-[#A52A2A] to-[#6B1519]"
  },
];

// Feature icons
const features = [
  { icon: Leaf, label: "100% Vegetarian Options", color: "text-green-600" },
  { icon: Shield, label: "Export Grade Quality", color: "text-[#A52A2A]" },
  { icon: Award, label: "Premium Standards", color: "text-[#8B1B1F]" },
  { icon: Sparkles, label: "Hygienically Processed", color: "text-[#B83B3F]" },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleExploreClick = (productName) => {
    if (productName === "Momos") {
      navigate('/momos-details');
    } else if (productName === "Parathas") {
      navigate('/parathas-details');
    } else if (productName === "Frozen Vegetables") {
      navigate('/frozen-vegetables-details');
    }
  };

  return (
    <div className="bg-white py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 tracking-tight">
            <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
              Product Category
            </span>

          </h2>

          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
            <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
            <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#8B1B1F] rounded-full"></div>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
            <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#A52A2A] rounded-full"></div>
            <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-18">
          {productCategories.map((product, index) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-[#FDF2F2] p-0.5 sm:p-1 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">

                {/* Inner Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">

                  {/* Icon Container */}
                  <div className="relative h-56 sm:h-64 md:h-72 flex items-center justify-center bg-gradient-to-br from-[#FDF2F2] to-white overflow-hidden">

                    {/* Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-all duration-500"
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="inline-block bg-[#8B1B1F] text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-[#A52A2A]/20 to-transparent rounded-br-full"></div>
                    <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-tl from-[#6B1519]/20 to-transparent rounded-tl-full"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5 md:p-6 text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-1 text-gray-900 group-hover:text-[#8B1B1F] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[#A52A2A] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2 sm:mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* Explore More Button */}
                    <button
                      onClick={() => handleExploreClick(product.name)}
                      className="mt-3 sm:mt-4 flex items-center justify-center font-bold transition-colors cursor-pointer w-full bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105"
                    >
                      <span className="text-sm">Explore More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="bg-gradient-to-r from-[#FDF2F2] via-[#FBE5E5] to-[#FDF2F2] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="bg-white rounded-full p-2.5 sm:p-3 md:p-4 shadow-md">
                  <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${feature.color}`} strokeWidth={2.5} />
                </div>
                <p className="text-gray-800 font-bold text-xs sm:text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;