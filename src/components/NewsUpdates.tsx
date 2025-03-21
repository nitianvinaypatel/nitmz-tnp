"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaCalendar, FaBullhorn, FaBriefcase, FaTrophy } from "react-icons/fa";

const newsItems = [
  {
    category: "Placement",
    icon: <FaBriefcase className="w-5 h-5" />,
    date: "March 15, 2024",
    title: "Microsoft Recruitment Drive",
    description:
      "Microsoft is conducting a recruitment drive for multiple positions. Register before March 20.",
    link: "#",
    color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    category: "Achievement",
    icon: <FaTrophy className="w-5 h-5" />,
    date: "March 12, 2024",
    title: "Record Breaking Placements",
    description:
      "NIT Mizoram achieves 95% placement rate with highest package of ₹24 LPA.",
    link: "#",
    color: "from-amber-500/10 to-amber-600/10 border-amber-500/20",
    iconColor: "text-amber-500",
  },
  {
    category: "Announcement",
    icon: <FaBullhorn className="w-5 h-5" />,
    date: "March 10, 2024",
    title: "Pre-Placement Training",
    description:
      "Mandatory pre-placement training sessions starting from March 25. Register now.",
    link: "#",
    color: "from-green-500/10 to-green-600/10 border-green-500/20",
    iconColor: "text-green-500",
  },
];

const upcomingEvents = [
  {
    date: "Mar 20",
    title: "Google Technical Round",
    time: "10:00 AM",
  },
  {
    date: "Mar 22",
    title: "Resume Building Workshop",
    time: "2:00 PM",
  },
  {
    date: "Mar 25",
    title: "Amazon Info Session",
    time: "11:00 AM",
  },
];

export function NewsUpdates() {
  return (
    <section className="relative py-20 bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              News & Updates
            </h2>
            <p className="text-gray-400">
              Stay informed about the latest placement activities and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News Cards */}
            <div className="lg:col-span-2 space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-r ${item.color} border border-opacity-20 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${item.color} ${item.iconColor}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-gray-400">
                            {item.category}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <FaCalendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <Button
                          variant="outline"
                          className="border-gray-700 text-gray-300 hover:bg-gray-800"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {event.date.split(" ")[1]}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.date.split(" ")[0]}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white group-hover:text-blue-400 transition-colors duration-300">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-400">{event.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">
                View All Events
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
