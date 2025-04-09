"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaUniversity, FaBriefcase } from "react-icons/fa";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="absolute -top-40 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Take the Next Step in Your Career?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Whether you&apos;re a student looking for placement opportunities
              or a company seeking talented graduates, NIT Mizoram&apos;s
              Training &amp; Placement Cell is here to help you succeed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Students */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(var(--color-primary), 0.2)",
              }}
            >
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-20"></div>

              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <FaUniversity className="text-primary h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                For Students
              </h3>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Access to leading companies and startups
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Interview preparation and resources
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Career counseling and guidance
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Skill development workshops
                </li>
              </ul>

              <Button asChild className="gap-2 mt-6 group">
                <Link href="/register">
                  Register as Student
                  <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* For Recruiters */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(var(--color-accent), 0.2)",
              }}
            >
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-20"></div>

              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <FaBriefcase className="text-accent h-6 w-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                For Recruiters
              </h3>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Access to top engineering talent
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Streamlined recruitment process
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  On-campus and virtual hiring options
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Long-term industry partnerships
                </li>
              </ul>

              <Button asChild variant="secondary" className="gap-2 mt-6 group">
                <Link href="/register">
                  Recruit From NIT Mizoram
                  <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-5">
              Still have questions? We&apos;re here to help!
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gray-700 hover:border-gray-600 hover:bg-gray-800"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
