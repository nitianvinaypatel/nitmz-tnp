import React from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  CalendarDays,
  Filter,
  Building,
  MapPin,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock events data
const eventsData = [
  {
    id: 1,
    title: "Google Pre-Placement Talk",
    type: "Pre-Placement Talk",
    company: "Google",
    date: "May 25, 2024",
    time: "2:00 PM - 3:30 PM",
    location: "Seminar Hall 1",
    organizer: "Training & Placement Cell",
    description:
      "Google representatives will discuss career opportunities, company culture, work environment, and the recruitment process. All eligible students are encouraged to attend.",
    eligibility:
      "Open to all B.Tech, M.Tech and MCA students graduating in 2024-25",
    registrationRequired: true,
    registrationDeadline: "May 24, 2024 12:00 PM",
    capacity: 200,
    registeredStudents: 156,
  },
  {
    id: 2,
    title: "Resume Building Workshop",
    type: "Workshop",
    company: null,
    date: "May 28, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room 2",
    organizer: "Career Development Center",
    description:
      "Learn how to craft a professional resume that highlights your skills and experience effectively. Practical tips and hands-on session included.",
    eligibility: "Open to all students",
    registrationRequired: true,
    registrationDeadline: "May 27, 2024 6:00 PM",
    capacity: 50,
    registeredStudents: 38,
  },
  {
    id: 3,
    title: "Technical Interview Preparation",
    type: "Workshop",
    company: null,
    date: "June 2, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    organizer: "Computer Science Department",
    description:
      "Prepare for technical interviews with practice sessions on coding problems, system design questions, and interview techniques.",
    eligibility:
      "Computer Science, Information Technology and related branches",
    registrationRequired: true,
    registrationDeadline: "June 1, 2024 8:00 PM",
    capacity: 100,
    registeredStudents: 72,
  },
  {
    id: 4,
    title: "Microsoft Recruitment Drive",
    type: "Recruitment Drive",
    company: "Microsoft",
    date: "June 8-9, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Placement Cell",
    organizer: "Training & Placement Cell",
    description:
      "Microsoft will conduct their campus recruitment drive including online assessment, technical interviews, and HR rounds.",
    eligibility: "Pre-registered students with CGPA > 7.5",
    registrationRequired: true,
    registrationDeadline: "June 5, 2024 5:00 PM",
    capacity: 150,
    registeredStudents: 132,
  },
  {
    id: 5,
    title: "Amazon Recruitment Drive",
    type: "Recruitment Drive",
    company: "Amazon",
    date: "June 12-13, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Placement Cell",
    organizer: "Training & Placement Cell",
    description:
      "Amazon will be conducting their campus recruitment process for SDE and related roles.",
    eligibility: "Pre-registered students with CGPA > 7.0",
    registrationRequired: true,
    registrationDeadline: "June 10, 2024 5:00 PM",
    capacity: 180,
    registeredStudents: 165,
  },
  {
    id: 6,
    title: "Mock Group Discussions",
    type: "Workshop",
    company: null,
    date: "June 5, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Conference Room 1",
    organizer: "Career Development Center",
    description:
      "Practice group discussions with feedback from industry experts to improve your performance in actual GD rounds.",
    eligibility: "Open to all students",
    registrationRequired: true,
    registrationDeadline: "June 4, 2024 12:00 PM",
    capacity: 60,
    registeredStudents: 45,
  },
  {
    id: 7,
    title: "Flipkart Pre-Placement Talk",
    type: "Pre-Placement Talk",
    company: "Flipkart",
    date: "June 18, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Seminar Hall 2",
    organizer: "Training & Placement Cell",
    description:
      "Flipkart representatives will provide insights into career opportunities and recruitment process.",
    eligibility: "Open to all B.Tech and M.Tech students graduating in 2024-25",
    registrationRequired: true,
    registrationDeadline: "June 17, 2024 5:00 PM",
    capacity: 180,
    registeredStudents: 110,
  },
  {
    id: 8,
    title: "Infosys Recruitment Drive",
    type: "Recruitment Drive",
    company: "Infosys",
    date: "June 20-21, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Placement Cell",
    organizer: "Training & Placement Cell",
    description:
      "Infosys will be conducting their campus recruitment process for various roles.",
    eligibility: "Pre-registered students with CGPA > 6.5",
    registrationRequired: true,
    registrationDeadline: "June 18, 2024 5:00 PM",
    capacity: 200,
    registeredStudents: 185,
  },
];

// Event type filters
const eventTypes = [
  "All Events",
  "Pre-Placement Talk",
  "Workshop",
  "Recruitment Drive",
  "Webinar",
  "Job Fair",
];

// Calendar months
const months = ["May 2024", "June 2024", "July 2024", "August 2024"];

// Calendar days for sample month view
const calendarDays = [
  { date: 1, events: 0 },
  { date: 2, events: 0 },
  { date: 3, events: 0 },
  { date: 4, events: 0 },
  { date: 5, events: 0 },
  { date: 6, events: 0 },
  { date: 7, events: 0 },
  { date: 8, events: 0 },
  { date: 9, events: 0 },
  { date: 10, events: 0 },
  { date: 11, events: 0 },
  { date: 12, events: 1 },
  { date: 13, events: 1 },
  { date: 14, events: 0 },
  { date: 15, events: 0 },
  { date: 16, events: 0 },
  { date: 17, events: 0 },
  { date: 18, events: 1 },
  { date: 19, events: 0 },
  { date: 20, events: 1 },
  { date: 21, events: 1 },
  { date: 22, events: 0 },
  { date: 23, events: 0 },
  { date: 24, events: 0 },
  { date: 25, events: 1 },
  { date: 26, events: 0 },
  { date: 27, events: 0 },
  { date: 28, events: 1 },
  { date: 29, events: 0 },
  { date: 30, events: 0 },
  { date: 31, events: 0 },
];

// Week days
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Campus Events</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left sidebar - Calendar and filters */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
          {/* Calendar card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">June 2024</span>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-xs font-medium text-muted-foreground py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Placeholder for days from previous month */}
                <div className="h-8 flex items-center justify-center text-xs text-muted-foreground opacity-50">
                  30
                </div>
                <div className="h-8 flex items-center justify-center text-xs text-muted-foreground opacity-50">
                  31
                </div>
                {/* Current month days */}
                {calendarDays.map((day) => (
                  <div
                    key={day.date}
                    className={`h-8 flex items-center justify-center text-xs rounded-full ${
                      day.date === 25
                        ? "bg-primary text-primary-foreground"
                        : day.events > 0
                        ? "hover:bg-muted cursor-pointer"
                        : ""
                    }`}
                  >
                    {day.date}
                    {day.events > 0 && (
                      <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-primary"></span>
                    )}
                  </div>
                ))}
                {/* Placeholder for days from next month */}
                <div className="h-8 flex items-center justify-center text-xs text-muted-foreground opacity-50">
                  1
                </div>
                <div className="h-8 flex items-center justify-center text-xs text-muted-foreground opacity-50">
                  2
                </div>
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 h-8"
                  asChild
                >
                  <Link href="#">
                    <Calendar className="h-3.5 w-3.5" />
                    Month
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 h-8"
                  asChild
                >
                  <Link href="#">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Agenda
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Filters card */}
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search events..." className="pl-10" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Event Type</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  {eventTypes.map((type) => (
                    <option
                      key={type}
                      value={type.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Month</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  {months.map((month) => (
                    <option
                      key={month}
                      value={month.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Company</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Companies</option>
                  <option value="google">Google</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="amazon">Amazon</option>
                  <option value="flipkart">Flipkart</option>
                  <option value="infosys">Infosys</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">
                  Registration Status
                </label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Events</option>
                  <option value="open">Registration Open</option>
                  <option value="closed">Registration Closed</option>
                  <option value="registered">Registered</option>
                </select>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>

          {/* Event Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Event Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Upcoming Events</span>
                <span className="font-medium">{eventsData.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">This Month</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pre-Placement Talks</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Recruitment Drives</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Workshops</span>
                <span className="font-medium">3</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right section - Event listings */}
        <div className="flex-1">
          <Tabs defaultValue="list" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5"
              >
                <Filter className="h-3.5 w-3.5" />
                Sort
              </Button>
            </div>

            {/* List View */}
            <TabsContent value="list" className="space-y-4">
              {eventsData.map((event) => (
                <Card
                  key={event.id}
                  id={`event-${event.id}`}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-0">
                    <div className="p-5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-lg">
                              {event.title}
                            </h3>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                event.type === "Recruitment Drive"
                                  ? "bg-primary/10 text-primary"
                                  : event.type === "Pre-Placement Talk"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {event.type}
                            </span>
                          </div>
                          {event.company && (
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Building className="h-3.5 w-3.5 mr-1.5" />
                              {event.company}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1.5" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-3.5 w-3.5 mr-1.5" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-sm">{event.description}</p>
                          <div className="mt-3 flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 mr-1.5" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-2">
                            Registration Details
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Eligibility:
                              </span>
                              <span>{event.eligibility}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Registration Deadline:
                              </span>
                              <span>{event.registrationDeadline}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Capacity:
                              </span>
                              <span>{event.capacity} seats</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Registered:
                              </span>
                              <span>{event.registeredStudents} students</span>
                            </div>
                            <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                              <div
                                className="bg-primary h-1.5 rounded-full"
                                style={{
                                  width: `${
                                    (event.registeredStudents /
                                      event.capacity) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-3.5 w-3.5 mr-1.5" />
                          <span>By {event.organizer}</span>
                        </div>
                        <Button size="sm">Register Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>June 2024</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                      {/* Week days header */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {weekDays.map((day) => (
                          <div
                            key={day}
                            className="text-sm font-medium text-center py-2 border-b"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {/* Previous month days */}
                        <div className="h-24 p-1 border-r border-b bg-muted/20 opacity-50">
                          <div className="text-sm text-muted-foreground">
                            30
                          </div>
                        </div>
                        <div className="h-24 p-1 border-r border-b bg-muted/20 opacity-50">
                          <div className="text-sm text-muted-foreground">
                            31
                          </div>
                        </div>

                        {/* Current month days - Sample for a few days */}
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">1</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">2</div>
                          <div className="mt-1">
                            <div className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded mb-1 truncate">
                              Technical Interview Prep
                            </div>
                          </div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">3</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">4</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">5</div>
                          <div className="mt-1">
                            <div className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded mb-1 truncate">
                              Mock Group Discussions
                            </div>
                          </div>
                        </div>

                        {/* Add more days here with events */}
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">6</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">7</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">8</div>
                          <div className="mt-1">
                            <div className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded mb-1 truncate">
                              Microsoft Recruitment
                            </div>
                          </div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">9</div>
                          <div className="mt-1">
                            <div className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded mb-1 truncate">
                              Microsoft Recruitment
                            </div>
                          </div>
                        </div>

                        {/* More days would continue here */}
                        <div className="h-24 p-1 border-r border-b bg-muted/10">
                          <div className="text-sm font-medium">10</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">11</div>
                        </div>
                        <div className="h-24 p-1 border-r border-b">
                          <div className="text-sm">12</div>
                          <div className="mt-1">
                            <div className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded mb-1 truncate">
                              Amazon Recruitment
                            </div>
                          </div>
                        </div>

                        {/* Placeholder for more days */}
                        <div className="h-24 p-1 border-r border-b text-center flex items-center justify-center text-muted-foreground">
                          <span>More days would appear here</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Showing 8 events in this month
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
