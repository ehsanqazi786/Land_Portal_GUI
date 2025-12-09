"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-navy/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gold">LuxeProperty</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-white hover:text-gold transition">Home</a>
          <a href="#properties" className="text-white hover:text-gold transition">Properties</a>
          <a href="#pricing" className="text-white hover:text-gold transition">Pricing</a>
          <a href="#contact" className="text-white hover:text-gold transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-navy border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="#home" className="text-white hover:text-gold transition">Home</a>
              <a href="#properties" className="text-white hover:text-gold transition">Properties</a>
              <a href="#pricing" className="text-white hover:text-gold transition">Pricing</a>
              <a href="#contact" className="text-white hover:text-gold transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
