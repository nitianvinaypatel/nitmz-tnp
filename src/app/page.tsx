"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Companies } from "@/components/Companies";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { NewsUpdates } from "@/components/NewsUpdates";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax scroll effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))`,
          }}
        />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />

      {/* Content */}
      <div className="relative">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <NewsUpdates />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Features />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative gradient for Companies section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <Companies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative elements for Testimonials */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CTA />
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Footer />
        </motion.footer>
      </div>

      {/* Quick navigation dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50 hidden lg:block">
        {[
          "home",
          "features",
          "stats",
          "companies",
          "testimonials",
          "contact",
        ].map((section, index) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="block w-3 h-3 rounded-full bg-primary/20 hover:bg-primary/50 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-colors duration-200 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrollY > 500 ? 1 : 0, y: scrollY > 500 ? 0 : 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </main>
  );
}
