"use client";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const carouselImages = [
  {
    src: "/carousel/image1.jpg",
    alt: "NIT Mizoram Campus",
    caption: "World-Class Infrastructure",
  },
  {
    src: "/carousel/image2.webp",
    alt: "Students at NIT Mizoram",
    caption: "Nurturing Future Leaders",
  },
  {
    src: "/carousel/image3.webp",
    alt: "Placement Activities",
    caption: "Industry Connections",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&h=800&auto=format&fit=crop",
    alt: "Campus Life",
    caption: "Vibrant Campus Life",
  },
];

const features = [
  {
    icon: <FaLightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Fostering creative solutions and cutting-edge research",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Growth",
    description: "Accelerating careers through industry partnerships",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Community",
    description: "Building strong networks and lasting connections",
    color: "from-purple-400 to-purple-600",
  },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Rotate through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const stats = [
    {
      value: "95%+",
      label: "Placement Rate",
      icon: <FaGraduationCap />,
      description: "Consistent placement success rate across batches",
    },
    {
      value: "₹24 LPA",
      label: "Highest Package",
      icon: <FaBriefcase />,
      description: "Top offers from industry leaders",
    },
    {
      value: "120+",
      label: "Companies",
      icon: <FaChartLine />,
      description: "Leading recruiters visit annually",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      id="home"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.7),rgba(24,24,27,0.9))]" />
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/80" />
      </div>

      {/* Enhanced animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: ["0vw", "100vw"],
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              scale: [1, Math.random() * 2 + 1, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * 20,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Enhanced text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 text-sm backdrop-blur-sm"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-blue-400 mr-2"
                >
                  •
                </motion.span>
                <span className="text-gray-300">
                  Transforming Careers Since 2010
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Training & Placement Cell
                <motion.span
                  className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Your Gateway to Success
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Empowering students with industry-ready skills and connecting
                them with global opportunities. Join us in shaping the future of
                technology and innovation.
              </motion.p>
            </div>

            {/* Enhanced CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20 group relative overflow-hidden"
              >
                <Link href="/for-students" className="flex items-center gap-2">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
                    animate={{
                      x: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Explore Opportunities
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm group"
              >
                <Link
                  href="/for-recruiters"
                  className="flex items-center gap-2"
                >
                  Partner with Us
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced stats section */}
            <motion.div
              className="pt-8 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="text-center group relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        scale: [0.95, 1.05, 0.95],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="flex justify-center mb-2 text-blue-400 transform group-hover:scale-110 transition-transform"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-white mb-1"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                    <motion.div
                      className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {stat.description}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Enhanced Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative aspect-video rounded-lg shadow-2xl overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Carousel
                images={carouselImages}
                interval={5000}
                className="w-full h-full"
              />

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
