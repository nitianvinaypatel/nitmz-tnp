"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Animated orbs */}
      <div
        className="absolute -top-20 right-[10%] w-64 h-64 rounded-full bg-blue-900/20 blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute -bottom-32 left-[10%] w-80 h-80 rounded-full bg-indigo-900/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 rounded-2xl backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 shadow-xl"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Build Your Future?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether you&apos;re a student looking for career opportunities or
              a company seeking talented graduates, we&apos;re here to help.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                >
                  <Link href="/for-students">For Students</Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-300 hover:bg-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                >
                  <Link href="/for-recruiters">For Recruiters</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
