"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "The placement cell at NIT Mizoram provided exceptional support throughout my job search. Their guidance helped me secure a position at my dream company.",
    name: "Rahul Sharma",
    role: "Software Engineer, Google",
    batch: "Class of 2023",
    avatar: "/avatars/avatar-1.png",
  },
  {
    quote:
      "The mock interviews and resume building workshops organized by the T&P Cell were instrumental in preparing me for the placement season.",
    name: "Vinay Patel",
    role: "Data Scientist, Amazon",
    batch: "Class of 2022",
    avatar: "/avatars/avatar-2.png",
  },
  {
    quote:
      "I'm grateful for the industry exposure provided by NIT Mizoram. The placement team's efforts in bringing top companies to campus made all the difference.",
    name: "Amit Kumar",
    role: "Product Manager, Microsoft",
    batch: "Class of 2023",
    avatar: "/avatars/avatar-3.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-neutral-600">
            Hear from our alumni about their placement experiences and how NIT
            Mizoram helped shape their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-6 text-blue-600">
                    <FaQuoteLeft size={30} />
                  </div>
                  <p className="text-neutral-700 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
                        {/* Placeholder for avatar - in production, use actual images */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {testimonial.batch}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
