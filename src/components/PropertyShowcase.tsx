"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Ruler, Heart, ArrowRight } from "lucide-react";

export default function PropertyShowcase() {
  const properties = [
    { 
      title: "Modern Waterfront Villa", 
      beds: 4, 
      baths: 3, 
      sqft: 5200, 
      price: "$2.5M",
      image: "https://images.unsplash.com/photo-1600621957921-75bde0dc1d16?w=800&q=80",
      description: "Stunning waterfront property with panoramic ocean views"
    },
    { 
      title: "Contemporary Smart Mansion", 
      beds: 5, 
      baths: 4, 
      sqft: 6800, 
      price: "$3.8M",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0a30f?w=800&q=80",
      description: "Cutting-edge smart home technology with sustainable design"
    },
    { 
      title: "Premium Luxury Estate", 
      beds: 6, 
      baths: 5, 
      sqft: 8500, 
      price: "$5.2M",
      image: "https://images.unsplash.com/photo-1600607687644-c173af1cb537?w=800&q=80",
      description: "Exclusive gated community with private amenities"
    },
  ];

  return (
    <section id="properties" className="relative py-24 bg-gradient-to-b from-navy via-deepBlue to-navy overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-softBlue rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Properties</span>
            </div>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-white/60 text-lg">
              Handpicked luxury properties from our exclusive collection
            </div>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -12 }}
            >
              <div className="group cursor-pointer h-full">
              {/* Image Container with Real Property Photo */}
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition px-6 py-3 bg-gold text-navy font-bold rounded-lg flex items-center gap-2">
                      View <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>

                {/* Heart Icon */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full cursor-pointer hover:bg-gold/50 transition">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                </motion.button>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
                  <p className="text-gold font-bold text-lg">{prop.price}</p>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 group-hover:border-gold/50 transition h-full flex flex-col">
                <h4 className="text-2xl font-bold text-gold mb-2">{prop.title}</h4>
                <p className="text-white/70 text-sm mb-6 flex-grow">{prop.description}</p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/10">
                  <div className="text-center">
                    <Bed className="w-5 h-5 text-gold mx-auto mb-2" />
                    <p className="text-white font-bold">{prop.beds}</p>
                    <p className="text-white/60 text-xs">Beds</p>
                  </div>
                  <div className="text-center">
                    <Bath className="w-5 h-5 text-gold mx-auto mb-2" />
                    <p className="text-white font-bold">{prop.baths}</p>
                    <p className="text-white/60 text-xs">Baths</p>
                  </div>
                  <div className="text-center">
                    <Ruler className="w-5 h-5 text-gold mx-auto mb-2" />
                    <p className="text-white font-bold">{(prop.sqft/1000).toFixed(1)}k</p>
                    <p className="text-white/60 text-xs">sqft</p>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-gold/30 to-yellow-300/30 border border-gold/50 text-gold rounded-lg hover:bg-gold hover:text-navy transition font-semibold">
                  Schedule Viewing
                </button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
