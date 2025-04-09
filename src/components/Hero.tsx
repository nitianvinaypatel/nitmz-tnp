"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/30 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/40 blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/10 rounded-full px-3 py-1 text-sm text-primary mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span>Placement Season 2024-25 is Live</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Shaping Careers,</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Building Futures
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Training & Placement Cell at NIT Mizoram connects talented
              students with leading industry partners. Discover opportunities
              that will define your professional journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/register">
                  Get Started <FaArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur border border-gray-700">
                <p className="text-2xl font-bold text-primary">300+</p>
                <p className="text-sm text-gray-400">Students Placed</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur border border-gray-700">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-400">Partner Companies</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur border border-gray-700">
                <p className="text-2xl font-bold text-primary">95%</p>
                <p className="text-sm text-gray-400">Placement Rate</p>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl"></div>
              <Image
                src="/images/campus-placement.jpg"
                alt="NIT Mizoram Campus Placement"
                fill
                style={{ objectFit: "cover" }}
                className="mix-blend-overlay opacity-80 rounded-2xl"
                priority
              />

              {/* Floating elements */}
              <motion.div
                className="absolute -top-5 -right-5 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <FaGraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">22 LPA</p>
                    <p className="text-xs text-gray-300">Highest Package</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-5 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <FaBriefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">175+</p>
                    <p className="text-xs text-gray-300">Internship Offers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 right-10 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 p-2">
                    <FaUsers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">25+</p>
                    <p className="text-xs text-gray-300">Recruiting Now</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company logos */}
        <motion.div
          className="mt-20 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-gray-400 text-sm mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Image
              src="/images/companies/microsoft.svg"
              alt="Microsoft"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/companies/google.svg"
              alt="Google"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/companies/amazon.svg"
              alt="Amazon"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/companies/infosys.svg"
              alt="Infosys"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/companies/tcs.svg"
              alt="TCS"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/companies/wipro.svg"
              alt="Wipro"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
