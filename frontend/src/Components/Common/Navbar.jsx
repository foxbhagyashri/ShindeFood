import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-[#FDF2F2]/70 via-[#FBE5E5]/70 to-[#FDF2F2]/70 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center h-14 sm:h-16">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              {/* Logo Image */}
              <div className="p-1 sm:p-2 transition-shadow duration-300">
                <img 
                  src={logo}
                  alt="Shinde Food Logo" 
                  className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto rounded-md"
                />
              </div>
              {/* Company Name */}
             
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
            <Link
              to="/"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              Home
            </Link>

            <Link
              to="/About"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              About Us
            </Link>

            <Link
              to="/Recipies"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              Recipies
            </Link>

            <Link
              to="/foodservices"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              Food Services
            </Link>

            <Link
              to="/GetProducts"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              Get Products
            </Link>

            <Link
              to="/contact"
              className="px-2 lg:px-3 py-2 rounded-lg text-sm lg:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-bold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#8B1B1F] p-1.5 sm:p-2 rounded-lg hover:bg-white transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 sm:px-4 pt-2 pb-3 sm:pb-4 space-y-1.5 sm:space-y-2 bg-white/95 backdrop-blur-sm border-t border-[#FBE5E5]">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            About
          </Link>
          <Link
            to="/Recipies"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Recipies
          </Link>
          <Link
            to="/foodservices"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Food Services
          </Link>
          <Link
            to="/GetProducts"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Get Products
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-sm sm:text-base text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
