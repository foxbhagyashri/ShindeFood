import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2, Clock, MessageSquare } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Contactus() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact/send', formData);
      
      if (response.data.success) {
        toast.success(response.data.message, {
          duration: 5000,
          icon: '✅',
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        error.response?.data?.message || 'Failed to send message. Please try again.',
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@shindefoods.com",
      subDetails: "Official correspondence",
      color: "from-[#8B1B1F] to-[#A52A2A]"
    },
    
    {
      icon: Building2,
      title: "Location",
      details: "Pune, Maharashtra",
      subDetails: "India",
      color: "from-[#A52A2A] to-[#6B1519]"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      subDetails: "Sunday: Closed",
      color: "from-[#8B1B1F] to-[#B83B3F]"
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif" }} className="bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Hero Header */}
      <section className="relative py-6 sm:py-8 md:py-10 bg-gradient-to-br from-[#FDF2F2] via-[#FBE5E5] to-[#FDF2F2] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[#8B1B1F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-38 bg-[#A52A2A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20 text-center mt-16 sm:mt-18 md:mt-20">
       
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
              Contact
            </span>
            <span className="text-gray-900"> Us</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get in touch for bulk orders, product inquiries, and B2B partnerships. We're committed to prompt responses
          </p>
          
          
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
            <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-[#8B1B1F]"></div>
            <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#8B1B1F] rounded-full"></div>
            <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519]"></div>
            <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-[#A52A2A] rounded-full"></div>
            <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#6B1519] to-transparent"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-6 sm:py-8 md:py-10">
        
        {/* Contact Info Cards */}
       <section className="py-4 sm:py-6 md:py-8">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-2">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 md:mb-12">
                  <div>
                    <p className="text-xs sm:text-sm text-[#8B1B1F] uppercase tracking-wider font-bold mb-1.5 sm:mb-2">GET IN TOUCH</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                      Connect With <span className="text-[#8B1B1F]">Shinde Foods</span>
                    </h2>
                  </div>
                  <button className="mt-4 md:mt-0 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#8B1B1F] to-[#A52A2A] text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Contact Us Now
                  </button>
                </div>
      
                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 sm:mb-12 md:mb-16 max-w-3xl">
                  Shinde Foods is your trusted partner for premium frozen food products. Contact us for detailed B2B inquiries, bulk orders, and export partnerships.
                </p>
      
                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  
                  {/* Shinde Foods Card */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-[#8B1B1F] mb-3 sm:mb-4">Shinde Foods</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Premium Quality Frozen Foods - Excellence in Every Bite</p>
                  </div>
      
                  {/* Our Services */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl font-black text-gray-900 mb-4">Our Products</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Frozen Vegetables</li>
                      <li>• Ready to Cook Items</li>
                      <li>• Premium Snacks</li>
                      <li>• Export Quality</li>
                    </ul>
                  </div>
      
                  {/* Our Company */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl font-black text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• About Shinde Foods</li>
                      <li>• Quality Standards</li>
                      <li>• Our Recipes</li>
                      <li>• Contact Us</li>
                    </ul>
                  </div>
      
                  {/* Address */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl font-black text-gray-900 mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {/* <li className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#8B1B1F]" />
                        <span>Pabal Futanwadi Road, Pabal, Shirur, Pune - 412403</span>
                      </li> */}
                      <li className="flex items-start gap-2">
                        <Building2 className="w-4 h-4 shrink-0 mt-0.5 text-[#8B1B1F]" />
                        <span>Pune, Maharashtra, India</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 shrink-0 mt-0.5 text-[#8B1B1F]" />
                        <span>info@shindefoods.com</span>
                      </li>
                    </ul>
                  </div>
      
                </div>
              </div>
            </section>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 mt-12 sm:mt-16 md:mt-20">
          {/* Contact Form */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-6 sm:mb-7 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
                  Send Us
                </span>
                <span className="text-gray-900"> A Message</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-bold mb-1.5 sm:mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 font-bold mb-1.5 sm:mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Message *</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#A52A2A] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] text-white font-bold py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Address and Additional Info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* <div className="bg-gradient-to-br from-white to-[#FDF2F2] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border-2 border-[#FBE5E5]">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-1.5 sm:mb-2">Registered Office</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Pabal Futanwadi Road<br />
                    Pabal, Shirur<br />
                    Pune, Maharashtra - 412403<br />
                    India
                  </p>
                </div>
              </div>
            </div> */}

            <div className="bg-gradient-to-br from-[#8B1B1F] to-[#A52A2A] rounded-3xl p-8 shadow-xl text-white">
              <Mail className="w-12 h-12 mb-4" strokeWidth={2.5} />
              <h3 className="text-2xl font-black mb-3">Preferred Communication</h3>
              <p className="mb-4 text-[#FBE5E5]">We encourage detailed B2B inquiries through email at info@shindefoods.com for:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#FBE5E5] mt-1">✓</span>
                  <span>Bulk order inquiries and quotations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FBE5E5] mt-1">✓</span>
                  <span>Export partnerships and international orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FBE5E5] mt-1">✓</span>
                  <span>Product specifications and certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FBE5E5] mt-1">✓</span>
                  <span>Official correspondence and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] bg-clip-text text-transparent">
                Visit Our
              </span>
              <span className="text-gray-900"> Office</span>
            </h2>
            <p className="text-gray-600 text-lg">Our registered office in Pabal, Shirur, Pune for official correspondence</p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#FBE5E5]">
            <iframe
              title="Shinde Foods Location"
              src="https://www.google.com/maps?q=Pabal+Futanwadi+Road,+Pabal,+Shirur,+Pune,+Maharashtra+412403&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#8B1B1F] via-[#A52A2A] to-[#6B1519] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">Ready To Start Your Order?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto text-[#FBE5E5] px-4">
            Contact us today to discuss your frozen food requirements. Whether you're a retailer, distributor, or HoReCa business, we have the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-[#8B1B1F] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Request Quote
            </button>
            <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-white text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:bg-white hover:text-[#8B1B1F] transition-all duration-300">
              Download Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
