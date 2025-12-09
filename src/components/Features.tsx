"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Award, Clock, TrendingUp, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    { 
      icon: Award, 
      title: "Premium Properties", 
      desc: "Handpicked luxury properties from around the world",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Shield, 
      title: "Trusted Agents", 
      desc: "Expert agents dedicated to finding your perfect home",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Clock, 
      title: "24/7 Support", 
      desc: "Round-the-clock customer support for your peace of mind",
      color: "from-orange-400 to-red-500"
    },
    { 
      icon: Zap, 
      title: "Smart Search", 
      desc: "AI-powered recommendations matching your preferences",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: TrendingUp, 
      title: "Market Insights", 
      desc: "Real-time data and trends for informed decisions",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      icon: Sparkles, 
      title: "Exclusive Access", 
      desc: "Early access to luxury properties before public release",
      color: "from-yellow-400 to-orange-400"
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-navy to-deepBlue overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-softBlue rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">LuxeProperty</span>?
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Comprehensive solutions for your luxury real estate journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition`} />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 group-hover:border-gold/50 rounded-xl p-8 transition h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg p-3 mb-6 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-white/70 flex-grow">{feature.desc}</p>

                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="mt-6 text-gold text-2xl"
                  >
                    
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
