"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFileAlt, FaCertificate } from "react-icons/fa";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface FormField {
  name: string;
  label: string;
  type: "text" | "select" | "textarea" | "date";
  options?: string[];
  conditional?: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  formFields: FormField[];
}

const services: Service[] = [
  {
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "NOC Application",
    description: "Apply for No Objection Certificate for internships and jobs",
    formFields: [
      { name: "company", label: "Company Name", type: "text" },
      { name: "position", label: "Position Applied For", type: "text" },
      {
        name: "duration",
        label: "Duration",
        type: "select",
        options: ["2 Months", "3 Months", "6 Months"],
      },
      { name: "startDate", label: "Start Date", type: "date" },
      { name: "purpose", label: "Purpose of NOC", type: "textarea" },
    ],
  },
  {
    icon: <FaCertificate className="w-6 h-6" />,
    title: "Bonafide Certificate",
    description: "Request Bonafide Certificate for various purposes",
    formFields: [
      {
        name: "purpose",
        label: "Purpose of Certificate",
        type: "select",
        options: ["Bank Account", "Passport", "Visa", "Other"],
      },
      {
        name: "otherPurpose",
        label: "Specify Other Purpose",
        type: "text",
        conditional: "purpose=Other",
      },
      {
        name: "urgency",
        label: "Urgency",
        type: "select",
        options: ["Normal", "Urgent"],
      },
    ],
  },
  // ... existing services ...
];

interface FormData {
  [key: string]: string;
}

export default function ForStudents() {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (service: Service) => {
    console.log(`Submitting ${service.title}:`, formData);
    setFormData({});
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">For Students</h1>

          <p className="text-xl text-neutral-600 mb-12">
            The Training & Placement Cell is committed to helping students
            prepare for and secure rewarding career opportunities. Explore the
            resources and information below to make the most of your placement
            journey.
          </p>

          <Tabs defaultValue="services" className="space-y-8">
            <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1 rounded-lg">
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="status"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Application Status
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800 transition-colors duration-300 group cursor-pointer">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-lg bg-gray-700/50 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                {service.icon}
                              </div>
                              <div>
                                <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                                  {service.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                  {service.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 text-white border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-700 text-blue-400">
                              {service.icon}
                            </div>
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-gray-400">
                            Fill out the form below to submit your application
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                          {service.formFields?.map((field, fieldIndex) => (
                            <div key={fieldIndex} className="space-y-2">
                              <Label
                                htmlFor={field.name}
                                className="text-white"
                              >
                                {field.label}
                              </Label>
                              {field.type === "text" && (
                                <Input
                                  id={field.name}
                                  placeholder={`Enter ${field.label.toLowerCase()}`}
                                  className="bg-gray-700 border-gray-600 text-white"
                                  value={formData[field.name] || ""}
                                  onChange={(e) =>
                                    handleInputChange(
                                      field.name,
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                              {field.type === "select" && (
                                <Select
                                  value={formData[field.name] || ""}
                                  onValueChange={(value) =>
                                    handleInputChange(field.name, value)
                                  }
                                >
                                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                    <SelectValue
                                      placeholder={`Select ${field.label.toLowerCase()}`}
                                    />
                                  </SelectTrigger>
                                  <SelectContent className="bg-gray-700 border-gray-600">
                                    {field.options?.map((option) => (
                                      <SelectItem key={option} value={option}>
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                              {field.type === "textarea" && (
                                <Textarea
                                  id={field.name}
                                  placeholder={`Enter ${field.label.toLowerCase()}`}
                                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                                  value={formData[field.name] || ""}
                                  onChange={(e) =>
                                    handleInputChange(
                                      field.name,
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                              {field.type === "date" && (
                                <Input
                                  id={field.name}
                                  type="date"
                                  className="bg-gray-700 border-gray-600 text-white"
                                  value={formData[field.name] || ""}
                                  onChange={(e) =>
                                    handleInputChange(
                                      field.name,
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                            </div>
                          ))}
                          <div className="flex justify-end gap-3 pt-4">
                            <Button
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                              onClick={() => setFormData({})}
                            >
                              Reset
                            </Button>
                            <Button
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() => handleSubmit(service)}
                            >
                              Submit Application
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>
                    Helpful materials and tools for your placement preparation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        Resume Building
                      </h3>
                      <p className="mb-4">
                        Access templates and guidelines to create an impressive
                        resume that highlights your skills and achievements.
                      </p>
                      <Button asChild>
                        <Link href="/for-students/resources#resume">
                          View Resources
                        </Link>
                      </Button>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        Interview Preparation
                      </h3>
                      <p className="mb-4">
                        Practice with mock interviews and learn techniques to
                        excel in technical and HR interviews.
                      </p>
                      <Button asChild>
                        <Link href="/for-students/resources#interview">
                          View Resources
                        </Link>
                      </Button>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        Aptitude Test Practice
                      </h3>
                      <p className="mb-4">
                        Access practice tests and study materials to prepare for
                        company aptitude assessments.
                      </p>
                      <Button asChild>
                        <Link href="/for-students/resources#aptitude">
                          View Resources
                        </Link>
                      </Button>
                    </div>

                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">
                        Technical Preparation
                      </h3>
                      <p className="mb-4">
                        Brush up on technical concepts and practice coding
                        challenges relevant to your field.
                      </p>
                      <Button asChild>
                        <Link href="/for-students/resources#technical">
                          View Resources
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="status">
              {/* ... existing Status TabsContent ... */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>
  );
}
