import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Download, Phone, Mail } from 'lucide-react';
import image1 from '../../assets/Homeimg/2148694347.png';
import image2 from '../../assets/Homeimg/pavbhaji.png';
import image3 from '../../assets/Homeimg/82963.jpg';
import image4 from '../../assets/Homeimg/image4.jpg';
import image5 from '../../assets/Homeimg/dalmakhni.png';
import image6 from '../../assets/Homeimg/image6.png';
import image7 from '../../assets/Homeimg/springrolltwo.jpg';
import image8 from '../../assets/Homeimg/pouch-two.jpg';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image8
    },
    {
      id: 2,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image1
    },
    {
      id: 3,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image2
    },
    {
      id: 4,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image3
    },
    {
      id: 5,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image4
    },
    {
      id: 6,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image5
    },
    {
      id: 7,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image6
    },
    {
      id: 8,
      title: "Premium Frozen Foods for",
      highlight: "Export and HoReCa",
      subtitle: "Quality You Can Trust, Taste You Can't Resist",
      description: "Shinde Foods – Quality You Can Trust",
      image: image7
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-100'
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                imageRendering: "high-quality"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
            </div>


            {/* Content */}
            <div className="relative h-full flex items-center mt-4 sm:mt-6 md:mt-7">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
    <div className="max-w-3xl">

      {/* Subtitle */}
      <div className={`transform transition-all duration-700 delay-200 ${
        index === currentSlide ? 'translate-y-0' : 'translate-y-10'
      }`}>
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8B1B1F] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
          SHINDE FOODS
        </span>
      </div>

      {/* Title */}
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-7 leading-tight transform transition-all duration-700 delay-300 ${
        index === currentSlide ? 'translate-y-0' : 'translate-y-10'
      }`}>
        {slide.title}
        <br />
        <span className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#20bf0f] to-[#0fb54a] bg-clip-text text-transparent drop-shadow-lg">
          {slide.highlight}
        </span>
      </h1>

      {/* Subtitle text */}
      <p className={`text-lg sm:text-xl md:text-2xl text-[#FBE5E5] font-semibold mb-3 sm:mb-4 transform transition-all duration-700 delay-400 ${
        index === currentSlide ? 'translate-y-0' : 'translate-y-10'
      }`}>
        {slide.subtitle}
      </p>

      {/* Description */}
      <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-5 sm:mb-6 md:mb-8 transform transition-all duration-700 delay-500 ${
        index === currentSlide ? 'translate-y-0' : 'translate-y-10'
      }`}>
        {slide.description}
      </p>

      {/* CTA Buttons */}
      <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transform transition-all duration-700 delay-600 ${
        index === currentSlide ? 'translate-y-0' : 'translate-y-10'
      }`}>
        <a
          href="/catalogue.pdf"
          download
          className="flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#8B1B1F] hover:bg-[#6B1519] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#A52A2A]/50 cursor-pointer"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download Catalogue
        </a>

        <button
          onClick={() => navigate('/contact')}
          className="flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#0d6802] hover:bg-[#188407] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#20bf0f]/50 cursor-pointer"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          Contact for Bulk Order
        </button>
      </div>

    </div>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'w-8 sm:w-10 md:w-12 h-2.5 sm:h-3 bg-[#8B1B1F]'
              : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-20 sm:top-22 md:top-24 right-4 sm:right-6 md:right-8 bg-black/50 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}