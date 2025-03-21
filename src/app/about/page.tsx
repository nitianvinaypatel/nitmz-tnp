"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
};

const teamMembers = [
  {
    name: "Dr. Vijay Kumar",
    position: "Training & Placement Officer",
    email: "tpo@nitmz.ac.in",
    phone: "+91-123-456-7890",
    image: "/team/vijay_sir.jpeg",
    bio: "Ph.D. in Computer Science with extensive experience in training and placement. Dedicated to connecting students with industry opportunities.",
  },
  {
    name: "Dr. Sandeep Kumar",
    position: "Assistant Training & Placement Officer",
    email: "atpo@nitmz.ac.in",
    phone: "+91-123-456-7891",
    image: "/team/sandeep_sir.jpeg",
    bio: "Ph.D. in Electronics with expertise in semiconductor industry. Passionate about connecting students with emerging tech opportunities.",
  },
  {
    name: "Prof. Vaibhav Sharma",
    position: "Faculty Coordinator",
    email: "vaibhav.sharma@nitmz.ac.in",
    phone: "+91-123-456-7892",
    image: "/team/vaibhav_sir.jpeg",
    bio: "Professor with strong industry connections. Helps students prepare for technical interviews and career development.",
  },
  {
    name: "Dr. Saibal Roy",
    position: "Faculty Advisor",
    email: "saibal.roy@nitmz.ac.in",
    phone: "+91-123-456-7893",
    image: "/team/saibal.jpeg",
    bio: "Senior faculty member with expertise in guiding students through their career journeys and professional development.",
  },
];

const studentTeam = [
  {
    name: "Rudra Pratap",
    position: "Student Coordinator",
    email: "rudra.p@nitmz.ac.in",
    image: "/team/rudra.jpeg",
    bio: "Final year B.Tech student coordinating placement activities and student preparation.",
  },
  {
    name: "Reshma Singh",
    position: "Technical Coordinator",
    email: "reshma.s@nitmz.ac.in",
    image: "/team/reshma.jpeg",
    bio: "Manages technical training sessions and coordinates with industry partners for workshops.",
  },
  {
    name: "Vanlal Remika",
    position: "Outreach Coordinator",
    email: "vanlal.r@nitmz.ac.in",
    image: "/team/remika.jpeg",
    bio: "Handles communications with companies and manages the placement cell's social media presence.",
  },
  {
    name: "Rickey Kumar",
    position: "Documentation Lead",
    email: "rickey.k@nitmz.ac.in",
    image: "/team/rickey.jpeg",
    bio: "Manages all documentation related to placements and maintains the placement records.",
  },
];

const achievements = [
  { number: "95%+", label: "Placement Rate" },
  { number: "120+", label: "Companies" },
  { number: "₹24 LPA", label: "Highest Package" },
  { number: "500+", label: "Students Placed Annually" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Training & Placement Cell
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                The Training and Placement Cell at NIT Mizoram serves as a
                bridge between students and industry, facilitating career
                opportunities and professional development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 transition-colors duration-300"
                >
                  <Link href="/placements">View Placements</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={3}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/campus_logo.jpg"
                  alt="NIT Mizoram Campus"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-lg font-medium">NIT Mizoram</p>
                  <p className="text-sm opacity-80">Established 2010</p>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">
                  Students Placed Last Year
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-700"></div>

              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <FaLightbulb className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>

              <p className="text-muted-foreground">
                Our mission is to provide comprehensive career guidance and
                placement services to students, helping them secure rewarding
                careers in their chosen fields. We strive to build strong
                relationships with industry partners to create opportunities for
                our talented graduates.
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <span>Facilitate industry-academia collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <span>Enhance student employability</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <span>Create diverse career opportunities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700"></div>

              <div className="flex items-start mb-6">
                <div className="p-3 rounded-lg bg-accent/10 mr-4">
                  <FaUsers className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>

              <p className="text-muted-foreground">
                To be recognized as a center of excellence in training and
                placement, known for preparing industry-ready professionals who
                contribute significantly to technological advancement and
                innovation.
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Become a premier placement cell in India</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Foster innovation and entrepreneurship</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                  <span>Develop future industry leaders</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach to training and placement ensures
              students are well-prepared for their professional journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGraduationCap className="h-8 w-8 text-primary" />,
                title: "Training Programs",
                description:
                  "Comprehensive skill development workshops, technical training, and personality development sessions.",
              },
              {
                icon: <FaHandshake className="h-8 w-8 text-primary" />,
                title: "Placement Drives",
                description:
                  "Organize campus recruitment drives with leading companies across various sectors.",
              },
              {
                icon: <FaUsers className="h-8 w-8 text-primary" />,
                title: "Industry Connections",
                description:
                  "Build and maintain relationships with industry partners to create opportunities.",
              },
              {
                icon: <FaLightbulb className="h-8 w-8 text-primary" />,
                title: "Career Counseling",
                description:
                  "Personalized guidance to help students identify and pursue suitable career paths.",
              },
              {
                icon: <FaGraduationCap className="h-8 w-8 text-primary" />,
                title: "Internship Facilitation",
                description:
                  "Connect students with internship opportunities to gain practical industry experience.",
              },
              {
                icon: <FaHandshake className="h-8 w-8 text-primary" />,
                title: "Alumni Network",
                description:
                  "Leverage our strong alumni network for mentorship and career opportunities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index + 1}
              >
                <div className="p-4 rounded-lg bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  {item.number}
                </motion.div>
                <p className="text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Faculty Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our dedicated faculty team works tirelessly to connect students
              with the best career opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index + 1}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>

                  <div className="text-sm">
                    <p className="mb-1">
                      <span className="font-medium">Email:</span> {member.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> {member.phone}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Student Coordinators
            </h2>
            <p className="text-lg text-muted-foreground">
              Our student team plays a vital role in bridging the gap between
              faculty and students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentTeam.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                custom={index + 1}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>

                  <div className="text-sm">
                    <p className="mb-1">
                      <span className="font-medium">Email:</span> {member.email}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you&apos;re a student looking for guidance or a company
              interested in recruiting our talented graduates, we&apos;re here
              to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Link href="/for-recruiters">For Recruiters</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
