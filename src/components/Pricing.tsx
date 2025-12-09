"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      price: "$49", 
      period: "/month",
      description: "Perfect for first-time buyers",
      features: ["Access to 1,000+ listings", "Email notifications", "Mobile app access", "Standard support"],
      icon: "",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Professional", 
      price: "$99", 
      period: "/month",
      description: "For serious investors",
      features: ["Access to all 10,000+ listings", "Priority support 24/7", "Market insights", "Saved searches", "Agent consultation", "Virtual tours"],
      icon: "",
      gradient: "from-purple-500 to-pink-500",
      highlighted: true 
    },
    { 
      name: "Elite", 
      price: "$149", 
      period: "/month",
      description: "For premium clients",
      features: ["Unlimited access", "API access", "Dedicated manager", "Custom integrations", "White-label solutions", "Priority processing"],
      icon: "",
      gradient: "from-orange-400 to-red-500"
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-navy via-deepBlue to-softBlue overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-softBlue rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl md:text-6xl font-bold mb-4">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">Pricing</span> for Everyone
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Choose the perfect plan that suits your luxury real estate needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative group rounded-2xl overflow-hidden transition transform \${
                plan.highlighted ? "md:scale-105" : ""
              }`}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br \${plan.gradient} opacity-0 group-hover:opacity-20 transition rounded-2xl`} />

              {/* Card Content */}
              <div className={`relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border \${
                plan.highlighted 
                  ? "border-gold/60 ring-2 ring-gold/30" 
                  : "border-white/20 group-hover:border-gold/50"
              } rounded-2xl p-8 transition h-full flex flex-col`}>
                {/* Highlighted Badge */}
                {plan.highlighted && (
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-gold to-yellow-300 text-navy px-6 py-2 rounded-full font-bold text-sm flex items-center gap-1"
                  >
                    <Zap className="w-4 h-4" /> Most Popular
                  </motion.div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4">{plan.icon}</div>

                {/* Plan Name */}
                <h4 className="text-3xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition \${
                    plan.highlighted
                      ? "bg-gradient-to-r from-gold to-yellow-300 text-navy hover:shadow-2xl hover:shadow-gold/50"
                      : "bg-gold/20 border border-gold/50 text-gold hover:bg-gold hover:text-navy"
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
