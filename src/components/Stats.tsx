"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95%+", label: "Placement Rate" },
  { value: "120+", label: "Recruiting Companies" },
  { value: "₹24 LPA", label: "Highest Package" },
  { value: "₹8.5 LPA", label: "Average Package" },
];

export function Stats() {
  return (
    <section className="py-20 relative bg-gray-900" id="stats">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Placement Highlights
          </h2>
          <p className="text-lg text-gray-400">
            We take pride in our consistent placement records and the trust
            placed in our students by industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 h-full border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
