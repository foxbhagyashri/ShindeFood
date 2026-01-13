import { Phone, MapPin, Facebook, Instagram, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-[#8B1B1F] to-[#6B1519] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Company Info - Takes 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Shinde Foods Logo" 
                className="h-14 w-auto rounded-lg bg-white p-2 shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-black">Shinde Foods</h3>
                <p className="text-xs text-white font-semibold">Premium Frozen Foods</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed text-sm">
              Premium frozen food products including momos, parathas, and vegetables. Export-grade quality with authentic taste, serving retailers, distributors, and HoReCa businesses globally.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#8B1B1F] text-white p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#8B1B1F] text-white p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#8B1B1F] text-white p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#8B1B1F] text-white p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black mb-5 text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Recipies" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Recipies
                </Link>
              </li>
              <li>
                <Link to="/foodservices" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Food Services
                </Link>
              </li>
              <li>
                <Link to="/GetProducts" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Get Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-white/90 hover:text-yellow-200 hover:translate-x-1 inline-block transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black mb-5 text-white uppercase tracking-wide">Contact Info</h3>
            <div className="space-y-4">
              {/* <div className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg shrink-0 group-hover:bg-yellow-200 transition-all duration-300">
                  <Phone className="w-4 h-4 group-hover:text-[#8B1B1F]" />
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">Call Us</p>
                  <a href="tel:+919923786079" className="text-sm font-semibold hover:text-yellow-200 transition-colors">
                    +91 9923786079
                  </a>
                </div>
              </div> */}
              
              <div className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg shrink-0 group-hover:bg-yellow-200 transition-all duration-300">
                  <Mail className="w-4 h-4 group-hover:text-[#8B1B1F]" />
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">Email Us</p>
                  <a href="mailto:info@shindefoods.com" className="text-sm font-semibold hover:text-yellow-200 transition-colors break-all">
                    info@shindefoods.com
                  </a>
                </div>
              </div>
              
              {/* <div className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg shrink-0 group-hover:bg-yellow-200 transition-all duration-300">
                  <MapPin className="w-4 h-4 group-hover:text-[#8B1B1F]" />
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">Visit Us</p>
                  <p className="text-sm leading-relaxed">
                    Pabal Futanwadi Road, Pabal,<br />
                    Shirur, Pune, Maharashtra 412403
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Location Map - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-black mb-5 text-white uppercase tracking-wide">Our Location</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-yellow-200 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d74.0!3d18.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ4JzAwLjAiTiA3NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="180"
         
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shinde Foods Location"
              ></iframe>
              <div className="bg-white/95 p-2 ">
                <p className="text-xs text-gray-900 font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8B1B1F]" />
                  Shinde Foods
                </p>
                <p className="text-xs text-gray-700 font-medium">Pabal, Shirur, Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-2 sm:mb-4"></div>

        {/* Copyright */}

          <p className="text-white/95 text-xs sm:text-sm md:text-base text-center">
           © Website Design & Developed By Fox Aircomm Pvt Ltd | All Rights Reserved.
          </p>

      </div>
    </footer>
  );
}