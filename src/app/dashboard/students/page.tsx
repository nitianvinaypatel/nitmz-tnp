import React from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  UserPlus,
  Download,
  MoreHorizontal,
  Mail,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock student data
export const studentsData = [
  {
    id: 1,
    name: "Ankit Sharma",
    roll: "CSE/19/001",
    email: "ankit.s19@students.nitmz.ac.in",
    department: "Computer Science & Engineering",
    batch: "2019-2023",
    cgpa: 9.2,
    placementStatus: "Placed",
    company: "Google",
    package: "25 LPA",
    skills: ["Java", "Python", "Machine Learning", "Data Structures"],
    contact: "+91 9876543210",
    address: "Aizawl, Mizoram",
    image: "/avatars/01.png",
    social: {
      linkedin: "https://linkedin.com/in/ankit-sharma",
      github: "https://github.com/ankit-sharma",
      portfolio: "https://ankitsharma.dev",
    },
  },
  {
    id: 2,
    name: "Priya Patel",
    roll: "ECE/19/015",
    email: "priya.p19@students.nitmz.ac.in",
    department: "Electronics & Communication Engineering",
    batch: "2019-2023",
    cgpa: 8.7,
    placementStatus: "Placed",
    company: "Amazon",
    package: "18 LPA",
    skills: ["VLSI", "Embedded Systems", "C++", "IoT"],
    contact: "+91 9876543211",
    address: "Aizawl, Mizoram",
    image: "/avatars/02.png",
    social: {
      linkedin: "https://linkedin.com/in/priya-patel",
      github: "https://github.com/priya-patel",
      portfolio: "https://priyapatel.dev",
    },
  },
  {
    id: 3,
    name: "Rahul Kumar",
    roll: "CSE/20/042",
    email: "rahul.k20@students.nitmz.ac.in",
    department: "Computer Science & Engineering",
    batch: "2020-2024",
    cgpa: 8.9,
    placementStatus: "Internship",
    company: "Microsoft",
    package: "45,000/month",
    skills: ["React", "Node.js", "JavaScript", "Web Development"],
    contact: "+91 9876543212",
    address: "Aizawl, Mizoram",
    image: "/avatars/03.png",
    social: {
      linkedin: "https://linkedin.com/in/rahul-kumar",
      github: "https://github.com/rahul-kumar",
      portfolio: "https://rahulkumar.io",
    },
  },
  {
    id: 4,
    name: "Shreya Singh",
    roll: "ME/19/023",
    email: "shreya.s19@students.nitmz.ac.in",
    department: "Mechanical Engineering",
    batch: "2019-2023",
    cgpa: 8.5,
    placementStatus: "Placed",
    company: "Tata Motors",
    package: "12 LPA",
    skills: ["CAD/CAM", "Thermodynamics", "Fluid Mechanics", "AutoCAD"],
    contact: "+91 9876543213",
    address: "Aizawl, Mizoram",
    image: "/avatars/04.png",
    social: {
      linkedin: "https://linkedin.com/in/shreya-singh",
      github: "https://github.com/shreya-singh",
      portfolio: "https://shreyasingh.me",
    },
  },
  {
    id: 5,
    name: "Vikram Reddy",
    roll: "EE/20/031",
    email: "vikram.r20@students.nitmz.ac.in",
    department: "Electrical Engineering",
    batch: "2020-2024",
    cgpa: 9.0,
    placementStatus: "Internship",
    company: "Reliance",
    package: "40,000/month",
    skills: ["Power Systems", "Control Systems", "MATLAB", "Circuit Design"],
    contact: "+91 9876543214",
    address: "Aizawl, Mizoram",
    image: "/avatars/05.png",
    social: {
      linkedin: "https://linkedin.com/in/vikram-reddy",
      github: "https://github.com/vikram-reddy",
      portfolio: "https://vikramreddy.com",
    },
  },
  {
    id: 6,
    name: "Neha Gupta",
    roll: "CSE/19/012",
    email: "neha.g19@students.nitmz.ac.in",
    department: "Computer Science & Engineering",
    batch: "2019-2023",
    cgpa: 9.5,
    placementStatus: "Placed",
    company: "Microsoft",
    package: "22 LPA",
    skills: ["AI", "Deep Learning", "Python", "TensorFlow"],
    contact: "+91 9876543215",
    address: "Aizawl, Mizoram",
    image: "/avatars/06.png",
    social: {
      linkedin: "https://linkedin.com/in/neha-gupta",
      github: "https://github.com/neha-gupta",
      portfolio: "https://nehagupta.dev",
    },
  },
  {
    id: 7,
    name: "Akash Jain",
    roll: "CE/20/008",
    email: "akash.j20@students.nitmz.ac.in",
    department: "Civil Engineering",
    batch: "2020-2024",
    cgpa: 8.8,
    placementStatus: "Internship",
    company: "L&T",
    package: "35,000/month",
    skills: [
      "Structural Analysis",
      "Construction Management",
      "AutoCAD",
      "Revit",
    ],
    contact: "+91 9876543216",
    address: "Aizawl, Mizoram",
    image: "/avatars/07.png",
    social: {
      linkedin: "https://linkedin.com/in/akash-jain",
      github: "https://github.com/akash-jain",
      portfolio: "https://akashjain.co",
    },
  },
  {
    id: 8,
    name: "Kavita Sharma",
    roll: "ECE/19/027",
    email: "kavita.s19@students.nitmz.ac.in",
    department: "Electronics & Communication Engineering",
    batch: "2019-2023",
    cgpa: 8.6,
    placementStatus: "Placed",
    company: "Intel",
    package: "15 LPA",
    skills: [
      "Digital Electronics",
      "Signal Processing",
      "VHDL",
      "Microprocessors",
    ],
    contact: "+91 9876543217",
    address: "Aizawl, Mizoram",
    image: "/avatars/08.png",
    social: {
      linkedin: "https://linkedin.com/in/kavita-sharma",
      github: "https://github.com/kavita-sharma",
      portfolio: "https://kavitasharma.in",
    },
  },
];

const departments = [
  "All Departments",
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
];

const batches = [
  "All Batches",
  "2019-2023",
  "2020-2024",
  "2021-2025",
  "2022-2026",
];

// Function to get placement status badge styling
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Placed":
      return "bg-green-500/10 text-green-500";
    case "Internship":
      return "bg-blue-500/10 text-blue-500";
    case "Searching":
      return "bg-yellow-500/10 text-yellow-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Student Profiles</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export List
          </Button>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search and Filters */}
        <div className="md:col-span-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, roll number, skills..."
                    className="pl-10"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    {departments.map((dept, index) => (
                      <option
                        key={index}
                        value={dept
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/\s+/g, "-")}
                      >
                        {dept}
                      </option>
                    ))}
                  </select>
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    {batches.map((batch, index) => (
                      <option
                        key={index}
                        value={batch.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {batch}
                      </option>
                    ))}
                  </select>
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="all">All Status</option>
                    <option value="placed">Placed</option>
                    <option value="internship">Internship</option>
                    <option value="searching">Searching</option>
                  </select>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student View Tabs */}
        <div className="md:col-span-3">
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="grid w-full max-w-[200px] grid-cols-2 mb-4">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            {/* Grid View */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {studentsData.map((student) => (
                  <Link
                    key={student.id}
                    href={`/dashboard/students/${student.id}`}
                  >
                    <Card className="h-full hover:border-primary/50 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full bg-muted overflow-hidden mb-4 flex items-center justify-center">
                            <div className="text-3xl font-bold text-primary/70">
                              {student.name.charAt(0)}
                            </div>
                          </div>

                          <h3 className="font-medium text-lg">
                            {student.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {student.roll}
                          </p>

                          <div className="mt-2">
                            <span
                              className={`${getStatusBadge(
                                student.placementStatus
                              )} text-xs font-medium px-2.5 py-1 rounded`}
                            >
                              {student.placementStatus}
                            </span>
                          </div>

                          <div className="w-full mt-4 border-t pt-4">
                            <div className="flex flex-col gap-2 items-start text-left">
                              <div className="flex items-center text-sm">
                                <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span className="line-clamp-1">
                                  {student.department}
                                </span>
                              </div>

                              <div className="flex items-center text-sm">
                                <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>
                                  {student.company
                                    ? `${student.company} • ${student.package}`
                                    : "Not Placed"}
                                </span>
                              </div>

                              <div className="flex items-center text-sm">
                                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span className="truncate max-w-[180px]">
                                  {student.email}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="w-full mt-3 flex flex-wrap gap-1">
                            {student.skills.slice(0, 3).map((skill, idx) => (
                              <span
                                key={idx}
                                className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                            {student.skills.length > 3 && (
                              <span className="bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded text-xs">
                                +{student.skills.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Table View */}
            <TabsContent value="table">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Name
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Roll Number
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Department
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Batch
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            CGPA
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium">
                            Company
                          </th>
                          <th className="px-4 py-3 text-center text-sm font-medium">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentsData.map((student) => (
                          <tr
                            key={student.id}
                            className="border-b hover:bg-muted/50"
                          >
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                  <div className="text-sm font-bold">
                                    {student.name.charAt(0)}
                                  </div>
                                </div>
                                <span>{student.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {student.roll}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {student.department}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {student.batch}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {student.cgpa}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`${getStatusBadge(
                                  student.placementStatus
                                )} text-xs font-medium px-2.5 py-1 rounded`}
                              >
                                {student.placementStatus}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {student.company || "-"}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <Button variant="ghost" size="icon" asChild>
                                <Link
                                  href={`/dashboard/students/${student.id}`}
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">8</span> of{" "}
          <span className="font-medium">24</span> results
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
