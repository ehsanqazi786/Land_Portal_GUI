"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Premium Dark Overlay - Multi Layer */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy/30 via-black/50 to-deepBlue/60" />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(15, 26, 42, 0.3) 0%, rgba(212, 175, 55, 0.1) 50%, rgba(27, 73, 101, 0.2) 100%)
        `,
      }} />

      {/* Animated Orbs */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-32 -right-20 w-96 h-96 bg-gold/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-32 -left-20 w-96 h-96 bg-softBlue/20 rounded-full filter blur-3xl"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block"
        >
          <div className="px-6 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold font-semibold text-sm">
             Luxury Real Estate Excellence
          </div>
        </motion.div>

        <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Premium</span> Properties
        </h2>

        <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          Experience unparalleled luxury with LuxeProperty - Your exclusive gateway to the world's most coveted premium properties.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" }}
            className="px-10 py-4 bg-gradient-to-r from-gold to-yellow-300 text-navy font-bold rounded-lg transition"
          >
            Start Exploring
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 border-2 border-gold/50 text-gold font-bold rounded-lg hover:bg-gold/10"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 z-10"
      >
        <ChevronDown className="w-8 h-8 text-gold" />
      </motion.div>
    </section>
  );
}
