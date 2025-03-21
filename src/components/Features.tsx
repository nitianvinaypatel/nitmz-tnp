"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaGraduationCap className="h-12 w-12 text-primary" />,
    title: "Quality Education",
    description:
      "NIT Mizoram provides world-class education with a focus on technical excellence and innovation.",
  },
  {
    icon: <FaBriefcase className="h-12 w-12 text-primary" />,
    title: "Industry Connections",
    description:
      "Strong ties with leading companies ensure our students get exposure to real-world industry challenges.",
  },
  {
    icon: <FaHandshake className="h-12 w-12 text-primary" />,
    title: "Placement Support",
    description:
      "Dedicated team to guide students through the entire placement process from preparation to final selection.",
  },
  {
    icon: <FaChartLine className="h-12 w-12 text-primary" />,
    title: "Career Growth",
    description:
      "Focus on long-term career development with mentorship programs and professional skill enhancement.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20"></div>

      {/* Animated background shapes */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Why Choose NIT Mizoram?
          </h2>
          <p className="text-lg text-neutral-600">
            Our Training & Placement Cell is dedicated to bridging the gap
            between academic excellence and industry requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>

                <CardHeader>
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute -inset-3 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
