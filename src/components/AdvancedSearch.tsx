"use client";

import { motion } from "framer-motion";
import { MapPin, DollarSign, Search as SearchIcon, Filter } from "lucide-react";

export default function AdvancedSearch() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-deepBlue via-navy to-softBlue overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-softBlue rounded-full filter blur-3xl opacity-25"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-5xl font-bold mb-3">Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Dream Property</span></h3>
          <p className="text-white/70 text-lg">Search through our exclusive collection of luxury properties worldwide</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Location or Address" 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-gold focus:bg-white/20 transition hover:border-white/40"
              />
            </motion.div>

            {/* Min Price */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold">
                <DollarSign className="w-5 h-5" />
              </div>
              <input 
                type="number" 
                placeholder="Min Price" 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-gold focus:bg-white/20 transition hover:border-white/40"
              />
            </motion.div>

            {/* Max Price */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold">
                <DollarSign className="w-5 h-5" />
              </div>
              <input 
                type="number" 
                placeholder="Max Price" 
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-gold focus:bg-white/20 transition hover:border-white/40"
              />
            </motion.div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-4 bg-gradient-to-r from-gold to-yellow-300 text-navy font-bold rounded-xl hover:shadow-2xl transition flex items-center justify-center gap-2"
            >
              <SearchIcon className="w-5 h-5" />
              Search
            </motion.button>
          </div>

          {/* Quick Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-white/10"
          >
            <button className="px-4 py-2 bg-gold/20 border border-gold/40 text-gold rounded-lg hover:bg-gold/30 transition text-sm font-medium flex items-center gap-2">
              <Filter className="w-4 h-4" /> Luxury
            </button>
            <button className="px-4 py-2 bg-gold/20 border border-gold/40 text-gold rounded-lg hover:bg-gold/30 transition text-sm font-medium">Waterfront</button>
            <button className="px-4 py-2 bg-gold/20 border border-gold/40 text-gold rounded-lg hover:bg-gold/30 transition text-sm font-medium">Smart Home</button>
            <button className="px-4 py-2 bg-gold/20 border border-gold/40 text-gold rounded-lg hover:bg-gold/30 transition text-sm font-medium">Gated Community</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
