"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alexandra Mitchell",
      role: "Property Investor",
      image: "",
      text: "LuxeProperty made finding our dream home effortless. The team's expertise and attention to detail are unmatched!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Real Estate Executive",
      image: "",
      text: "Outstanding service and professionalism. Would absolutely recommend to anyone seeking luxury properties worldwide.",
      rating: 5
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-deepBlue via-navy to-deepBlue overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-80 h-80 bg-gold/20 rounded-full filter blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl md:text-6xl font-bold mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Testimonials</span>
          </h3>
          <p className="text-white/60 text-lg">Hear from our satisfied luxury property clients</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-yellow-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition blur" />
              
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 group-hover:border-gold/50 rounded-xl p-8 transition">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-gold/30 mb-4" />

                {/* Testimonial Text */}
                <p className="text-white/90 text-lg mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/40 to-yellow-300/40 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gold text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
