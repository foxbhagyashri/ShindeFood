import { useState } from "react";
import {
  ShoppingBag,
  UtensilsCrossed,
  Award,
  TrendingUp,
  Package,
  Factory,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import phetaLogo from "../../assets/Homeimg/Pheta.png";
import momosImg from "../../assets/AboutUs/momos2.png";
import parathaImg from "../../assets/AboutUs/Paratha2.png";
import frozenVegImg from "../../assets/AboutUs/fronzenfood1.png";

export default function CompanyIntro() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    // If a card is already open and it's not the current card being clicked, do nothing
    if (expandedCard !== null && expandedCard !== id) {
      return;
    }
    // Otherwise, toggle the card (open if closed, close if open)
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const keyDifferentiators = [
    {
      id: 1,
      title: "Merchant Exporter",
      icon: TrendingUp,
      shortDesc:
        "Global distribution network serving international markets with excellence",
      gradient: "from-[#8B1B1F] to-[#A52A2A]",
      bgGradient: "from-[#FDF2F2] to-white",
      borderColor: "border-[#FBE5E5]",
      hoverBorder: "hover:border-[#F5CCCC]",
      accentColor: "from-[#FBE5E5]/30",
      detailedInfo: {
        subtitle: "Core Business Model",
        description:
          "The core business of Shinde Foods is that of a merchant exporter, a role that involves sourcing, consolidating, and exporting a diverse range of frozen food products to international markets. Unlike a manufacturer, Shinde Foods leverages a strategic network of partner factories, each selected for its expertise in producing specific food items and its adherence to strict quality and hygiene standards. This model allows the company to offer a comprehensive product portfolio without being limited to a single production facility. As a merchant exporter, Shinde Foods acts as a crucial link between Indian food producers and global buyers, managing the complexities of international trade, including logistics, documentation, and compliance with various countries' import regulations. The company's deep understanding of both the domestic supply chain and international market demands enables it to provide a seamless and efficient service to its clients. This focus on export-oriented business positions Shinde Foods as a key player in promoting Indian food products on the global stage, catering to the growing demand for convenient, high-quality frozen foods.",
        keyPoints: [
          "Strategic network of specialized partner factories",
          "Comprehensive product portfolio without single facility limitation",
          "Crucial link between Indian producers and global buyers",
          "Expert management of international trade complexities",
          "Deep understanding of domestic supply chain and global markets",
          "Key player in promoting Indian food products globally",
        ],
      },
    },
    {
      id: 2,
      title: "Product Categories",
      icon: Package,
      shortDesc:
        "Ready-to-Cook and Ready-to-Eat solutions for modern, busy lifestyles",
      gradient: "from-[#6B1519] to-[#8B1B1F]",
      bgGradient: "from-[#FDF2F2] to-white",
      borderColor: "border-[#FBE5E5]",
      hoverBorder: "hover:border-[#F5CCCC]",
      accentColor: "from-[#FBE5E5]/30",
      detailedInfo: {
        subtitle: "Diverse Product Portfolio",
        description:
          "Shinde Foods offers a diverse and carefully curated selection of frozen food products, designed to meet the varied needs of its global B2B clientele. The product range is broadly categorized into three main segments: frozen snacks, frozen breads, and frozen vegetables. The frozen snacks category is a highlight, featuring popular items such as vegetable and chicken momos, which come in a variety of flavors and fillings to cater to different palates. This category also includes other favorites like samosas, spring rolls, and nuggets, all of which are prepared with high-quality ingredients and are ready to cook, offering convenience without compromising on taste. The frozen breads section is anchored by a wide array of parathas, available in numerous variants, from classic aloo (potato) to more innovative options like gobhi (cauliflower) and mix veg. These parathas are a testament to the company's commitment to providing authentic, ready-to-eat solutions for busy consumers. Finally, the frozen vegetables category offers a selection of essential ingredients, including sweet corn, mixed vegetables, and green peas, all of which are flash-frozen at their peak freshness to lock in nutrients and flavor. This comprehensive product portfolio ensures that Shinde Foods can serve as a one-stop shop for retailers, distributors, and HoReCa businesses looking for a reliable supplier of premium frozen foods.",
        categories: [
          {
            name: "Frozen Snacks",
            items:
              "Vegetable & chicken momos in variety of flavors, samosas, spring rolls, nuggets — all prepared with high-quality ingredients and ready to cook",
          },
          {
            name: "Frozen Breads",
            items:
              "Wide array of parathas in numerous variants — classic aloo (potato), gobhi (cauliflower), mix veg, and more innovative options providing authentic ready-to-eat solutions",
          },
          {
            name: "Frozen Vegetables",
            items:
              "Sweet corn, mixed vegetables, green peas — all flash-frozen at peak freshness to lock in nutrients and flavor",
          },
        ],
        conclusion:
          "This comprehensive product portfolio ensures that Shinde Foods can serve as a one-stop shop for retailers, distributors, and HoReCa businesses looking for a reliable supplier of premium frozen foods.",
      },
    },
    {
      id: 3,
      title: "Quality & Hygiene",
      icon: Factory,
      shortDesc:
        "Export-grade standards with multi-plant production excellence",
      gradient: "from-[#A52A2A] to-[#6B1519]",
      bgGradient: "from-[#FDF2F2] to-white",
      borderColor: "border-[#FBE5E5]",
      hoverBorder: "hover:border-[#F5CCCC]",
      accentColor: "from-[#FBE5E5]/30",
      detailedInfo: {
        subtitle: "Multi-Plant Production System & Export-Grade Standards",
        description:
          "A key differentiator for Shinde Foods is its unwavering commitment to quality-focused manufacturing and export-grade hygiene protocols that permeate every stage of production. The company does not rely on a single manufacturing facility but instead partners with a network of carefully vetted factories, each specializing in specific product categories. This multi-plant production system allows Shinde Foods to leverage the unique expertise of each partner while ensuring that all products are made to its exacting standards.",
        features: [
          {
            title: "Quality Manufacturing",
            points: [
              "Network of carefully vetted specialized factories",
              "Rigorous quality control with multi-stage inspections",
              "State-of-the-art technology and trained production teams",
              "Finest ingredients meeting highest standards of taste, texture, and safety",
            ],
          },
          {
            title: "Export-Grade Hygiene",
            points: [
              "Comprehensive hygiene protocols across all partner facilities",
              "Temperature-controlled environments with advanced air filtration",
              "Segregated processing areas for different product lines",
              "Food-grade packaging materials for quality preservation during transit",
            ],
          },
          {
            title: "Multi-Plant Advantages",
            points: [
              "Specialized expertise for each product category",
              "Flexibility and scalability for large-scale orders",
              "Mitigated production disruption risks",
              "Reliable and consistent supply chain for clients",
            ],
          },
        ],
      },
    },
  ];

  const categories = [
    {
      id: 1,
      title: "RETAIL",
      image: "/src/assets/Homeimg/image1.png",
      icon: ShoppingBag,
      description: "Premium packaged products for retail shelves",
      stats: "50+ Countries",
      badge: "GLOBAL REACH",
    },
    {
      id: 2,
      title: "FOODSERVICE",
      image: "/src/assets/Homeimg/image2.png",
      icon: UtensilsCrossed,
      description: "Bulk frozen solutions for HoReCa segment",
      stats: "1000+ Partners",
      badge: "B2B SOLUTIONS",
    },
    {
      id: 3,
      title: "EXCLUSIVE",
      image: "/src/assets/Homeimg/image3.png",
      icon: Award,
      description: "Bespoke culinary innovations",
      stats: "Premium Quality",
      badge: "SPECIALTY",
    },
  ];

  const productCategories = [
    {
      id: 1,
      name: "Momos (Veg & Non-Veg)",
      image: momosImg,
      badge: "READY IN 15 MIN",
    },
    {
      id: 2,
      name: "Parathas (All Variants)",
      image: parathaImg,
      badge: "AUTHENTIC TASTE",
    },
    {
      id: 3,
      name: "Frozen Vegetables",
      image: frozenVegImg,
      badge: "FARM FRESH",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12">
          {/* Shinde Foods Company Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-14 relative">
            {/* Logo, Text and Decorative Line in One Line */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-7">
              {/* Left Decorative Line - Hidden on mobile */}
              <div className="hidden md:flex items-center justify-center gap-0">
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
                <div className="w-2 lg:w-3 h-2 lg:h-3 bg-[#8B1B1F] rounded-full"></div>
              </div>

              {/* Logo */}
              <img
                src={phetaLogo}
                alt="Shinde Foods Logo"
                className="h-16 sm:h-20 md:h-22 lg:h-25 w-auto object-contain"
              />  

              {/* Text */}
              <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-center md:whitespace-nowrap px-2">
                <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
                  SHINDE FOODS -
                 </span>
                <span className="text-gray-700 md:ml-4 block md:inline mt-1 md:mt-0">
                   Quality You Can Trust
                </span>
              </h2>

              {/* Right Decorative Line - Hidden on mobile */}
              <div className="hidden md:flex items-center justify-center gap-0">
                <div className="w-2 lg:w-3 h-2 lg:h-3 bg-[#A52A2A] rounded-full"></div>
                <div className="w-8 lg:w-12 h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
              </div>
            </div>

            {/* Tagline Below */}
          </div>

          {/* Category Cards - Business Segments */}

          {/* Company Description */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-25">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="text-justify first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-black first-letter:text-[#8B1B1F] first-letter:mr-1 sm:first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:h-8 sm:first-letter:h-10 md:first-letter:h-12">
                Shinde Foods is a dynamic and quality-focused merchant exporter specializing in a wide range of premium frozen foods. Based in Pune, Maharashtra, the company has established itself as a reliable partner for both domestic and international buyers seeking high-quality, ready-to-eat (RTE) and ready-to-cook (RTC) food products. The company's business model is built on a robust network of partner factories, each adhering to stringent quality standards and export-grade hygiene protocols. This multi-plant production system allows Shinde Foods to offer a diverse and consistent product portfolio, ensuring a reliable supply chain for its clients. The company's commitment to excellence is evident in every aspect of its operations, from sourcing the finest raw materials to implementing rigorous quality control measures and maintaining an unbroken cold chain. Shinde Foods is dedicated to providing its customers with products that are not only delicious and convenient but also meet the highest international food safety standards, making it a trusted name in the global frozen food market.
              </p>

              {/* Key Highlights Section */}
              <div className="bg-gradient-to-r from-[#FDF2F2] to-[#FBE5E5] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-[#FBE5E5] mt-8 sm:mt-10 md:mt-12">
                <h3 className="text-xl sm:text-2xl font-black text-[#8B1B1F] mb-4 sm:mb-5 md:mb-6">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Dynamic Merchant Exporter</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Specializing in premium frozen foods with a strong network of partner factories</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Multi-Plant Production System</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Ensures diverse and consistent product portfolio with reliable supply chain</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Export-Grade Quality Standards</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Rigorous quality control, finest raw materials, and unbroken cold chain management</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">International Food Safety Standards</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Meets highest global food safety standards, trusted name in frozen food market</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">RTE & RTC Solutions</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Ready-to-Eat and Ready-to-Cook products for modern, convenient lifestyles</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-xs sm:text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1 text-sm sm:text-base">Global Reach & Trust</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">Reliable partner for domestic and international buyers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {keyDifferentiators.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                  item.bgGradient
                } border-2 ${item.borderColor} ${
                  item.hoverBorder
                } transition-all duration-500 ${
                  expandedCard !== null && expandedCard !== item.id
                    ? "opacity-40 pointer-events-none"
                    : ""
                }`}
              >
                {/* Header */}
                <div
                  onClick={() => toggleCard(item.id)}
                  className="p-4 sm:p-6 md:p-8 flex justify-between cursor-pointer"
                >
                  <div className="flex-1">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br ${
                        item.gradient
                      } transition-transform duration-300 ${
                        expandedCard === item.id ? "scale-110" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>

                    <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">{item.shortDesc}</p>
                  </div>

                  <div className="ml-2 sm:ml-3 md:ml-4 transition-transform duration-300">
                    {expandedCard === item.id ? (
                      <ChevronUp className="text-[#8B1B1F] rotate-180 w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <ChevronDown className="text-[#8B1B1F] w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                </div>

                {/* Collapsible Content */}
                <div
                  className={`px-4 sm:px-6 md:px-8 overflow-hidden transition-all duration-500 ${
                    expandedCard === item.id
                      ? "max-h-[999px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 sm:pb-6 md:pb-8 pt-3 sm:pt-4 border-t border-gray-200">
                    {/* Subtitle */}
                    <h5 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#8B1B1F]">
                      {item.detailedInfo.subtitle}
                    </h5>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4">
                      {item.detailedInfo.description}
                    </p>

                    {/* Key points */}
                    {item.detailedInfo.keyPoints && (
                      <ul className="space-y-1.5 sm:space-y-2">
                        {item.detailedInfo.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700">
                            <span className="text-orange-600 shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Categories */}
                    {item.detailedInfo.categories && (
                      <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-3">
                        {item.detailedInfo.categories.map((cat, idx) => (
                          <div
                            key={idx}
                            className="bg-white/70 p-2.5 sm:p-3 rounded-lg shadow"
                          >
                            <h6 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                              {cat.name}
                            </h6>
                            <p className="text-gray-600 text-xs sm:text-sm">{cat.items}</p>
                          </div>
                        ))}
                        <p className="font-semibold italic text-gray-800 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
                          {item.detailedInfo.conclusion}
                        </p>
                      </div>
                    )}

                    {/* Features */}
                    {item.detailedInfo.features && (
                      <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                        {item.detailedInfo.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-white/70 p-3 sm:p-4 rounded-lg shadow"
                          >
                            <h6 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base border-b-2 border-orange-600 pb-1.5 sm:pb-2">
                              {feature.title}
                            </h6>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {feature.points.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-1.5 sm:gap-2"
                                >
                                  <span className="text-orange-600 mt-0.5 sm:mt-1 shrink-0 text-xs sm:text-sm">
                                    ✓
                                  </span>
                                  <span className="text-gray-700 text-xs sm:text-sm">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Collection Section */}
        </div>
      </section>
    </div>
  );
}
