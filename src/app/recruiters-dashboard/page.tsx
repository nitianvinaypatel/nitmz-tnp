"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  GraduationCap,
  Laptop,
  MapPin,
  MoreHorizontal,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data
const recentApplicants = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Software Engineer",
    education: "B.Tech CSE",
    institution: "NIT Mizoram",
    graduationYear: "2024",
    skills: ["Java", "Python", "React"],
    applicationDate: "Apr 02, 2024",
    status: "shortlisted",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Product Manager",
    education: "MBA Tech",
    institution: "NIT Mizoram",
    graduationYear: "2024",
    skills: ["Market Research", "Agile", "Product Strategy"],
    applicationDate: "Apr 01, 2024",
    status: "under review",
  },
  {
    id: 3,
    name: "Aditya Singh",
    position: "Software Engineer",
    education: "B.Tech CSE",
    institution: "NIT Mizoram",
    graduationYear: "2024",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    applicationDate: "Mar 30, 2024",
    status: "interviewed",
  },
  {
    id: 4,
    name: "Neha Gupta",
    position: "Data Analyst",
    education: "B.Tech ECE",
    institution: "NIT Mizoram",
    graduationYear: "2024",
    skills: ["SQL", "Python", "Tableau"],
    applicationDate: "Mar 28, 2024",
    status: "offered",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    position: "Software Engineer",
    education: "B.Tech CSE",
    institution: "NIT Mizoram",
    graduationYear: "2024",
    skills: ["C++", "System Design", "AWS"],
    applicationDate: "Mar 26, 2024",
    status: "rejected",
  },
];

const postedJobs = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full-time",
    department: "Engineering",
    location: "Bangalore",
    applications: 42,
    shortlisted: 15,
    postDate: "Mar 15, 2024",
    deadline: "Apr 15, 2024",
    status: "active",
  },
  {
    id: 2,
    title: "Product Manager",
    type: "Full-time",
    department: "Product",
    location: "Mumbai",
    applications: 28,
    shortlisted: 10,
    postDate: "Mar 20, 2024",
    deadline: "Apr 20, 2024",
    status: "active",
  },
  {
    id: 3,
    title: "Data Scientist",
    type: "Full-time",
    department: "Data",
    location: "Hyderabad",
    applications: 35,
    shortlisted: 12,
    postDate: "Mar 22, 2024",
    deadline: "Apr 22, 2024",
    status: "active",
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    type: "Internship",
    department: "Engineering",
    location: "Remote",
    applications: 64,
    shortlisted: 20,
    postDate: "Mar 10, 2024",
    deadline: "Apr 10, 2024",
    status: "closed",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Technical Assessment - Software Engineer",
    date: "Apr 10, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Online",
    participants: 15,
    type: "assessment",
  },
  {
    id: 2,
    title: "Pre-Placement Talk",
    date: "Apr 15, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Seminar Hall, NIT Mizoram",
    participants: 100,
    type: "presentation",
  },
  {
    id: 3,
    title: "Interview Day - Round 1",
    date: "Apr 20, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Online",
    participants: 15,
    type: "interview",
  },
];

const dashboardStatistics = [
  {
    label: "Total Applications",
    value: 169,
    change: "+12%",
    trend: "up",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Active Jobs",
    value: 3,
    change: "0%",
    trend: "neutral",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    label: "Shortlisted",
    value: 57,
    change: "+8%",
    trend: "up",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    label: "Upcoming Events",
    value: 3,
    change: "+50%",
    trend: "up",
    icon: <Calendar className="h-5 w-5" />,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "shortlisted":
      return "bg-blue-100 text-blue-800";
    case "under review":
      return "bg-yellow-100 text-yellow-800";
    case "interviewed":
      return "bg-purple-100 text-purple-800";
    case "offered":
      return "bg-green-100 text-green-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    case "active":
      return "bg-green-100 text-green-800";
    case "closed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getEventTypeIcon = (type: string) => {
  switch (type) {
    case "assessment":
      return <Laptop className="h-4 w-4" />;
    case "presentation":
      return <BarChart3 className="h-4 w-4" />;
    case "interview":
      return <Users className="h-4 w-4" />;
    default:
      return <Calendar className="h-4 w-4" />;
  }
};

const RecruitersDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold">Recruiter Portal</h1>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-300 hover:text-white"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium flex items-center justify-center">
                  3
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                      AC
                    </div>
                    <span>Acme Corp</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link
                      href="/company/profile"
                      className="flex items-center w-full"
                    >
                      Company Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings" className="flex items-center w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/" className="flex items-center w-full">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStatistics.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                    <p
                      className={`text-xs mt-1 ${
                        stat.trend === "up"
                          ? "text-green-500"
                          : stat.trend === "down"
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Job Postings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your active and closed job positions
                  </CardDescription>
                </div>
                <Button size="sm" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  Post New Job
                </Button>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="relative w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Search jobs..."
                        className="pl-9 bg-gray-700 border-gray-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 gap-1.5"
                    >
                      <Filter className="h-3.5 w-3.5" />
                      Filter
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">
                            POSITION
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">
                            TYPE
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">
                            APPLICATIONS
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">
                            DEADLINE
                          </th>
                          <th className="text-left py-3 px-4 text-xs font-medium text-gray-400">
                            STATUS
                          </th>
                          <th className="text-right py-3 px-4 text-xs font-medium text-gray-400">
                            ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {postedJobs.map((job) => (
                          <tr
                            key={job.id}
                            className="hover:bg-gray-750 transition-colors border-b border-gray-700 last:border-0"
                          >
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium">{job.title}</p>
                                <p className="text-sm text-gray-400">
                                  {job.department} • {job.location}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="text-sm">{job.type}</span>
                            </td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium">
                                  {job.applications}
                                </p>
                                <p className="text-sm text-gray-400">
                                  {job.shortlisted} shortlisted
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="text-sm">{job.deadline}</span>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`text-xs px-2.5 py-1 rounded-full ${getStatusColor(
                                  job.status
                                )}`}
                              >
                                {job.status.charAt(0).toUpperCase() +
                                  job.status.slice(1)}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    View Applications
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Edit Job</DropdownMenuItem>
                                  <DropdownMenuItem>Close Job</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-500">
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-gray-700 w-full mt-2"
                >
                  View All Jobs
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Recent Applicants</CardTitle>
                  <CardDescription className="text-gray-400">
                    Students who recently applied to your jobs
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-700"
                >
                  <Users className="h-4 w-4" />
                  View All
                </Button>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {recentApplicants.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="border-b border-gray-700 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-white font-medium">
                            {applicant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h4 className="font-medium">{applicant.name}</h4>
                            <p className="text-sm text-gray-400">
                              {applicant.position}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {applicant.skills.slice(0, 3).map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-700 text-xs px-2 py-0.5 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full ${getStatusColor(
                              applicant.status
                            )}`}
                          >
                            {applicant.status.charAt(0).toUpperCase() +
                              applicant.status.slice(1)}
                          </span>
                          <p className="text-xs text-gray-400 mt-1">
                            {applicant.applicationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription className="text-gray-400">
                  Your scheduled recruitment activities
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border-b border-gray-700 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-700 p-2 rounded-md">
                          {getEventTypeIcon(event.type)}
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="text-sm text-gray-400 space-y-1 mt-1">
                            <p className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {event.date}
                            </p>
                            <p className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {event.time}
                            </p>
                            <p className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {event.location}
                            </p>
                            <p className="flex items-center gap-1">
                              <Users className="h-3.5 w-3.5" />
                              {event.participants} participants
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule New Event
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-gray-700 gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Post a New Job
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-gray-700 gap-2"
                >
                  <Users className="h-4 w-4" />
                  Browse Student Profiles
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-gray-700 gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Campus Visit
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-gray-700 gap-2"
                >
                  <BarChart3 className="h-4 w-4" />
                  View Analytics
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-gray-700 gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecruitersDashboard;
