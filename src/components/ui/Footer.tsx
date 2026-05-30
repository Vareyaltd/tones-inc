"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#051424] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex flex-col justify-center">
                  <div className="w-full h-1.5 bg-[#FF7A00]"></div>
                  <div className="w-1.5 h-6 bg-[#FF7A00] mx-auto"></div>
                </div>
                <span className="text-2xl font-heading font-extrabold text-white tracking-wider">
                  TONES INC.
                </span>
              </div>
              <span className="text-[10px] text-gray-300 tracking-widest pl-10 uppercase">
                Engineering Excellence
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              Engineering the future of Nigeria through innovation, excellence, and sustainable infrastructure development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF7A00] transition-colors text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF7A00] transition-colors text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF7A00] transition-colors text-gray-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF7A00] transition-colors text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-[#FF7A00] transition-colors text-gray-400">
                {/* YouTube icon placeholder, using text or another icon if not imported */}
                <span className="text-xl">▶</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-sm hover:text-[#FF7A00] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {['Civil Engineering', 'Road Construction', 'Energy & Solar Solutions', 'Oil & Gas Infrastructure', 'Water Engineering', 'Industrial Construction', 'Smart City Development'].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-400 text-sm hover:text-[#FF7A00] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-6 text-white tracking-wide">Contact Info</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF7A00] mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">Lagos Headquarters<br/>1 Tones Avenue, Victoria Island,<br/>Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF7A00] shrink-0" />
                <span className="text-gray-400 text-sm">+234 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF7A00] shrink-0" />
                <span className="text-gray-400 text-sm">info@tonesinc.com</span>
              </li>
            </ul>

            <h4 className="text-sm font-heading font-bold mb-4 text-white tracking-wide">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-3">Subscribe to our newsletter for updates on our projects and latest insights.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none"
              />
              <button 
                type="button"
                className="bg-[#FF7A00] hover:bg-[#e66e00] text-white text-sm font-semibold px-4 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tones Inc. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
