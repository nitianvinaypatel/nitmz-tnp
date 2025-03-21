"use client";

import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "TCS",
  "Infosys",
  "Wipro",
  "IBM",
  "Accenture",
  "Deloitte",
  "Cognizant",
  "HCL",
  "Tech Mahindra",
];

export function Companies() {
  return (
    <section className="py-20 relative bg-gray-900" id="companies">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Recruiting Partners
          </h2>
          <p className="text-lg text-gray-400">
            We collaborate with leading companies across various industries to
            provide the best opportunities for our students.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center px-6 py-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50">
                <span className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300">
                  {company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
