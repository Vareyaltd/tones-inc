"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Careers", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A2540]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveItem(item)}
              className={`text-white transition-colors font-medium text-sm pb-1 border-b-2 hover:text-[#FF7A00] hover:border-[#FF7A00] ${
                activeItem === item ? "border-[#FF7A00] text-[#FF7A00]" : "border-transparent"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-[#FF7A00] hover:bg-[#e66e00] text-white font-medium text-sm transition-all shadow-md"
          >
            Request Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0A2540]/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActiveItem(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-colors font-medium text-lg ${
                  activeItem === item ? "text-[#FF7A00]" : "text-white hover:text-[#FF7A00]"
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-[#FF7A00] text-center text-white font-medium mt-4"
            >
              Request Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
