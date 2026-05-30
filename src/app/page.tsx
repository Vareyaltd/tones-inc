"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FaBuilding, FaRoad, FaSolarPanel, FaTint, FaIndustry, FaCity, FaCog, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { FaBridge, FaOilWell } from "react-icons/fa6";

export default function Home() {
  const heroImages = [
    "https://images.unsplash.com/photo-1541888087850-25bcaf780c10?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2787&auto=format&fit=crop"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section id="home" className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#0A2540]">
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentSlide]}
                  alt="Engineering skyline"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12 mt-20" style={{ perspective: "1000px" }}>
            <motion.h1 
              initial={{ opacity: 0, rotateX: 20, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight text-white max-w-3xl origin-bottom"
            >
              Building Nigeria's <br/> Tomorrow Through <br/>
              <span className="text-[#FF7A00] inline-block">
                Engineering Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, rotateX: -20, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed origin-top"
            >
              Delivering world-class infrastructure, energy solutions, industrial construction, and smart engineering projects across Nigeria and Africa.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-[#FF7A00] hover:bg-[#e66e00] text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                View Projects <span>&rarr;</span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-transparent border border-white hover:bg-white/10 text-white font-medium text-sm transition-all text-center"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Trusted Partners Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-[#051424]/95 backdrop-blur-sm border-t border-white/10 py-6 z-20">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-white text-sm font-semibold tracking-wide">Trusted by Industry Leaders</span>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                {/* Placeholders for logos */}
                <div className="text-white font-heading font-bold text-xl flex items-center gap-2">
                  <div className="w-4 h-4 bg-white transform rotate-45"></div> NNPC
                </div>
                <div className="text-white font-heading font-bold text-xl flex items-center gap-2">
                  <FaGlobe /> DANGOTE
                </div>
                <div className="text-white font-heading font-bold text-xl flex items-center gap-2">
                  <FaShieldAlt /> FIRS
                </div>
                <div className="text-white font-heading font-bold text-xl tracking-wider">LAFARGE</div>
                <div className="text-white font-heading font-bold text-xl">BUA <span className="text-xs tracking-widest block -mt-1">GROUP</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Image Collage */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-xl overflow-hidden col-span-2 shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" alt="Building" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2768&auto=format&fit=crop" alt="Construction" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2944&auto=format&fit=crop" alt="Solar" fill className="object-cover" unoptimized />
                  </div>
                </div>
                {/* Orange Box Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF7A00] text-white p-6 rounded-lg shadow-xl text-center z-10 w-40">
                  <div className="text-4xl font-heading font-extrabold mb-1">15+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Years of<br/>Excellence</div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-[#FF7A00] text-xs font-bold uppercase tracking-widest mb-3">About Tones Inc.</p>
                <h2 className="text-4xl font-heading font-extrabold text-[#0A2540] mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-10 leading-relaxed text-sm">
                  TONES INC. is a leading Nigerian engineering and infrastructure company dedicated to delivering transformative projects across transportation, energy, industrial development, and water systems. We combine innovation, technical expertise, and local insight to build sustainable solutions that improve lives and drive economic growth.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-500 text-lg">
                      <FaCog />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] text-sm mb-2">Our Mission</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">To deliver innovative and sustainable engineering solutions that transform communities.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-500 text-lg">
                      <FaGlobe />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] text-sm mb-2">Our Vision</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">To be Africa's most respected engineering and infrastructure company.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-500 text-lg">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] text-sm mb-2">Our Values</h4>
                      <ul className="text-xs text-gray-500 leading-relaxed space-y-1">
                        <li>- Integrity</li>
                        <li>- Excellence</li>
                        <li>- Safety</li>
                        <li>- Innovation</li>
                        <li>- Sustainability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium">
                  Learn More About Us <span>&rarr;</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES SECTION */}
        <section id="services" className="py-24 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-[#FF7A00] text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A2540]">Engineering Solutions That Build Nations</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Civil Engineering", icon: <FaBuilding className="text-3xl" />, desc: "Designing and building sustainable infrastructure that stands the test of time." },
                { title: "Road Construction", icon: <FaRoad className="text-3xl" />, desc: "Highway, urban roads, drainage, and pavement engineering." },
                { title: "Bridge Development", icon: <FaBridge className="text-3xl" />, desc: "Innovative bridge designs and construction for seamless connectivity." },
                { title: "Energy & Solar Solutions", icon: <FaSolarPanel className="text-3xl" />, desc: "Solar power systems, mini-grids, and renewable energy solutions." },
                { title: "Oil & Gas Infrastructure", icon: <FaOilWell className="text-3xl" />, desc: "Pipeline construction, facility maintenance, and industrial installations." },
                { title: "Water Engineering", icon: <FaTint className="text-3xl" />, desc: "Water treatment plants, boreholes, and distribution systems." },
                { title: "Industrial Construction", icon: <FaIndustry className="text-3xl" />, desc: "Factories, warehouses, plants, and heavy industrial facilities." },
                { title: "Smart City Development", icon: <FaCity className="text-3xl" />, desc: "Technology-driven infrastructure for modern and smart communities." },
              ].map((service, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all group flex flex-col items-center text-center"
                >
                  <div className="text-gray-400 group-hover:text-[#FF7A00] transition-colors mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-[#0A2540] text-sm mb-3">{service.title}</h3>
                  <p className="text-xs text-gray-500 mb-6 flex-grow leading-relaxed">{service.desc}</p>
                  <a href="#contact" className="text-[#FF7A00] text-xs font-bold flex items-center gap-2 group-hover:underline">
                    Learn More <span>&rarr;</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-end mb-12"
            >
              <div>
                <p className="text-[#FF7A00] text-xs font-bold uppercase tracking-widest mb-3">Featured Projects</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A2540]">Projects That Define Our Legacy</h2>
              </div>
              <a href="#projects" className="text-[#FF7A00] text-sm font-bold flex items-center gap-2 mt-4 md:mt-0 hover:underline">
                View All Projects <span>&rarr;</span>
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Lagos Coastal Highway Development", img: "https://images.unsplash.com/photo-1525208479599-4c740ee307db?q=80&w=2940&auto=format&fit=crop", tag1: "Road Construction", tag2: "Lagos State", date: "2023 - Ongoing" },
                { title: "Abuja Smart Solar Grid", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2940&auto=format&fit=crop", tag1: "Energy", tag2: "Abuja", date: "2022 - Ongoing" },
                { title: "Port Harcourt Industrial Hub", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop", tag1: "Industrial", tag2: "Rivers State", date: "2021 - Ongoing" },
                { title: "Northern Water Infrastructure Initiative", img: "https://images.unsplash.com/photo-1520698058204-610e7403aeb0?q=80&w=2940&auto=format&fit=crop", tag1: "Water Engineering", tag2: "Kano State", date: "2022 - Ongoing" }
              ].map((project, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-4 leading-tight">{project.title}</h3>
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] text-white border border-white/20">{project.tag1}</span>
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] text-white border border-white/20">{project.tag2}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-300 border-t border-white/20 pt-3">
                      <span>{project.date}</span>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF7A00] transition-colors">&rarr;</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CAREERS SECTION */}
        <section id="careers" className="py-0 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 mb-24">
            <div className="flex flex-col lg:flex-row bg-[#FAFAFA] rounded-2xl overflow-hidden border border-gray-100">
              
              {/* Left Text */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center"
              >
                <p className="text-[#FF7A00] text-xs font-bold uppercase tracking-widest mb-3">Careers</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A2540] mb-6">Build the Future With Us</h2>
                <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
                  Join a team of talented engineers, innovators, and professionals dedicated to building sustainable solutions and changing lives.
                </p>
                <div>
                  <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF7A00] hover:bg-[#e66e00] text-white font-medium text-sm transition-all shadow-md">
                    View Open Positions <span>&rarr;</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative min-h-[400px]"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2787&auto=format&fit=crop" 
                  alt="Engineering team" 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
