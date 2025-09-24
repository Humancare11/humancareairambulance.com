import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="bg-primary-blue p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div> */}
              <span className="text-2xl font-bold">Humancare</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing professional air ambulance services with compassionate care and medical excellence.
              Your health and safety are our top priorities.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>

              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/blogs" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Our Services</span>
            <div className="space-y-2">
              <Link to="/services/private-air-ambulance" className="block text-gray-300 hover:text-white transition-colors">Private Air Ambulance</Link>
              <Link to="/services/commercial-air-ambulance" className="block text-gray-300 hover:text-white transition-colors">Commercial Air Ambulance</Link>
              <Link to="/services/rotary-wings" className="block text-gray-300 hover:text-white transition-colors">Rotary Wings (Helicopter)</Link>
              {/* <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Ground Ambulance</Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">Train Ambulance</Link> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-red" />
                {/* <span className="text-gray-300">+91 9699999067</span> */}
                 <a
        href="tel:+919699999067"
        className="text-gray-300 hover:text-primary-red transition"
      >
        +91 9699999067
      </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-red" />
               <a
        href="mailto:ops@humancareworldwide.com"
        className="text-gray-300 hover:text-primary-red transition"
      >
        ops@humancareworldwide.com
      </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-red" />
<a
        href="tel:+919699999067"
        className="text-gray-300 hover:text-primary-red transition"
      >
        24/7 Emergency Services
      </a>              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 HumanCare Air Ambulance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/Terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Medical Disclaimer
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;