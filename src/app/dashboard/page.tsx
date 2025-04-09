import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Briefcase,
  Calendar,
  Building,
  ArrowUpRight,
  CalendarRange,
  GraduationCap,
  BarChart3,
  Clock,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data (would come from a database in a real app)
const statsData = [
  {
    title: "Active Students",
    value: "527",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    change: "+12%",
  },
  {
    title: "Posted Jobs",
    value: "48",
    icon: <Briefcase className="h-6 w-6 text-green-500" />,
    change: "+8%",
  },
  {
    title: "Upcoming Events",
    value: "12",
    icon: <Calendar className="h-6 w-6 text-yellow-500" />,
    change: "+3",
  },
  {
    title: "Partner Companies",
    value: "76",
    icon: <Building className="h-6 w-6 text-purple-500" />,
    change: "+5",
  },
];

const recentJobs = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Microsoft",
    deadline: "May 30, 2024",
    applied: 42,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Google",
    deadline: "June 5, 2024",
    applied: 28,
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    deadline: "June 10, 2024",
    applied: 35,
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Adobe",
    deadline: "June 15, 2024",
    applied: 19,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Resume Building Workshop",
    date: "May 25, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall",
  },
  {
    id: 2,
    title: "Mock Interview Session",
    date: "May 27, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "T&P Office",
  },
  {
    id: 3,
    title: "Pre-Placement Talk: IBM",
    date: "June 2, 2024",
    time: "11:00 AM - 12:30 PM",
    location: "Auditorium",
  },
];

export default function Dashboard() {
  // Statistics data
  const stats = [
    {
      title: "Placement Rate",
      value: "92%",
      change: "+8%",
      trend: "up",
      description: "Compared to last year",
    },
    {
      title: "Average Package",
      value: "₹12.6 LPA",
      change: "+15%",
      trend: "up",
      description: "Compared to last year",
    },
    {
      title: "Companies Visited",
      value: "78",
      change: "+12",
      trend: "up",
      description: "This academic year",
    },
    {
      title: "Students Placed",
      value: "485",
      change: "+24",
      trend: "up",
      description: "Out of 526 registered students",
    },
  ];

  // Latest job postings
  const latestJobs = [
    {
      id: 1,
      title: "Software Development Engineer",
      company: "Amazon",
      location: "Bangalore",
      type: "Full-time",
      deadline: "June 10, 2024",
      postedAt: "2 days ago",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Internship",
      deadline: "June 5, 2024",
      postedAt: "3 days ago",
    },
    {
      id: 5,
      title: "Backend Engineer",
      company: "Flipkart",
      location: "Bangalore",
      type: "Full-time",
      deadline: "June 22, 2024",
      postedAt: "6 hours ago",
    },
  ];

  // Upcoming events
  const upcomingEventsData = [
    {
      id: 1,
      title: "Google Pre-Placement Talk",
      date: "May 25, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Seminar Hall 1",
      organizer: "Training & Placement Cell",
    },
    {
      id: 2,
      title: "Resume Building Workshop",
      date: "May 28, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Room 2",
      organizer: "Career Development Center",
    },
    {
      id: 3,
      title: "Technical Interview Preparation",
      date: "June 2, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Online (Zoom)",
      organizer: "Computer Science Department",
    },
  ];

  // Notification data
  const notifications = [
    {
      id: 1,
      title: "Microsoft recruitment drive scheduled",
      description:
        "The recruitment drive for Microsoft will start from June 8, 2024.",
      time: "2 hours ago",
      type: "info",
    },
    {
      id: 2,
      title: "Your profile is incomplete",
      description:
        "Please complete your profile to be eligible for upcoming recruitment drives.",
      time: "1 day ago",
      type: "warning",
    },
    {
      id: 3,
      title: "Resume approved by placement officer",
      description:
        "Your updated resume has been approved by the placement officer.",
      time: "2 days ago",
      type: "success",
    },
  ];

  // Top companies data
  const topCompanies = [
    { name: "Google", offers: 24, avgPackage: "₹24 LPA" },
    { name: "Microsoft", offers: 18, avgPackage: "₹20 LPA" },
    { name: "Amazon", offers: 22, avgPackage: "₹18 LPA" },
    { name: "Adobe", offers: 12, avgPackage: "₹16 LPA" },
    { name: "Flipkart", offers: 16, avgPackage: "₹18 LPA" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your placement activities.
          </p>
        </div>
        <Button>View Placement Report</Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </span>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <div
                  className={`p-2 rounded-full ${
                    stat.trend === "up" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className={`h-4 w-4 text-green-600`} />
                  ) : (
                    <TrendingUp className={`h-4 w-4 text-red-600`} />
                  )}
                </div>
              </div>
              <div className="mt-3 flex items-center text-xs">
                <span
                  className={
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }
                >
                  {stat.change}
                </span>
                <span className="ml-1 text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Left Column - 4/6 width */}
        <div className="md:col-span-4 space-y-6">
          {/* Jobs and Events Tabs */}
          <Tabs defaultValue="jobs" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="jobs">Latest Jobs</TabsTrigger>
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              </TabsList>
              <div className="hidden sm:block">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/jobs">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <TabsContent value="jobs" className="space-y-4">
              {latestJobs.map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-0">
                    <Link
                      href={`/dashboard/jobs/${job.id}`}
                      className="block p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-base">{job.title}</h3>
                          <div className="flex flex-wrap items-center text-sm text-muted-foreground mt-1 gap-y-1">
                            <Building className="h-3.5 w-3.5 mr-1.5" />
                            <span>{job.company}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-3.5 w-3.5 mr-1.5" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              job.type === "Internship"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          <span>Apply by {job.deadline}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Posted {job.postedAt}
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
              <div className="sm:hidden flex justify-center">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/dashboard/jobs">
                    View All Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              {upcomingEventsData.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-0">
                    <Link
                      href={`/dashboard/events#event-${event.id}`}
                      className="block p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-base">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap items-center text-sm text-muted-foreground mt-1 gap-y-1 gap-x-3">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1.5" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1.5" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 mr-1.5" />
                          <span>{event.location}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          By {event.organizer}
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
              <div className="sm:hidden flex justify-center">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/dashboard/events">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Placement Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Placement Analytics</CardTitle>
              <CardDescription>
                Placement statistics for the current academic year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px] flex items-center justify-center bg-muted/50 rounded-md">
                <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Placement statistics visualization would be displayed here
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    Department-wise Placement
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Computer Science</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Information Technology</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Electronics</span>
                      <span className="font-medium">84%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: "84%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    Offer Distribution
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Single Offer</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Multiple Offers</span>
                      <span className="font-medium">27%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "27%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>No Offer</span>
                      <span className="font-medium">8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{ width: "8%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    Package Distribution
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Above ₹20 LPA</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: "18%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>₹10-20 LPA</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Below ₹10 LPA</span>
                      <span className="font-medium">37%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: "37%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/reports">View Detailed Analytics</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - 2/6 width */}
        <div className="md:col-span-2 space-y-6">
          {/* Notifications */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pt-0 pb-2">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex flex-col space-y-1 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm">
                        {notification.title}
                      </h4>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-full ${
                          notification.type === "warning"
                            ? "bg-yellow-100 text-yellow-700"
                            : notification.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {notification.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {notification.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" size="sm" className="w-full">
                View All Notifications
              </Button>
            </CardFooter>
          </Card>

          {/* Your Profile Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Placement Registration Status</CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-2 pt-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      Profile Completion
                    </span>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-muted rounded-full h-2.5 mr-2">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">85%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircleIcon className="text-green-500 h-5 w-5 mr-2" />
                    <span className="text-sm">Personal Information</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="text-green-500 h-5 w-5 mr-2" />
                    <span className="text-sm">Education Details</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="text-green-500 h-5 w-5 mr-2" />
                    <span className="text-sm">Resume Uploaded</span>
                  </div>
                  <div className="flex items-center">
                    <CircleIcon className="text-yellow-500 h-5 w-5 mr-2" />
                    <span className="text-sm">Skills Assessment Pending</span>
                  </div>
                  <div className="flex items-center">
                    <CircleIcon className="text-gray-300 h-5 w-5 mr-2" />
                    <span className="text-sm">Placement Preferences</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/students/1">Complete Your Profile</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Top Recruiting Companies */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Top Recruiting Companies</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pt-0 pb-2">
              <div className="space-y-4">
                {topCompanies.map((company, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">{idx + 1}</div>
                      <div>
                        <div className="font-medium text-sm">
                          {company.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {company.offers} offers
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {company.avgPackage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/dashboard/companies">View All Companies</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Icons used for the status indicators
function CheckCircleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function CircleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
