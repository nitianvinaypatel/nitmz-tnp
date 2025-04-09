import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Search,
  Plus,
  Video,
  Building,
  MapPin,
  CalendarClock,
  CalendarDays,
  Filter,
  ListFilter,
  ExternalLink,
  Download,
  AlertCircle,
  Check,
  X,
  Info,
  Hourglass,
} from "lucide-react";

// Mock interview data
const upcomingInterviews = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    date: "June 15, 2024",
    time: "10:00 AM - 11:30 AM",
    type: "Technical",
    mode: "Virtual",
    interviewers: ["John Smith", "Emily Davis"],
    location: "Google Meet",
    status: "scheduled",
    round: "Round 2",
    notes:
      "Focus on data structures and algorithms. Be prepared for system design questions.",
    requirements: ["Resume copy", "ID proof", "Portfolio link"],
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Frontend Developer",
    date: "June 18, 2024",
    time: "2:00 PM - 3:00 PM",
    type: "HR",
    mode: "Virtual",
    interviewers: ["Sarah Johnson"],
    location: "Microsoft Teams",
    status: "scheduled",
    round: "Final Round",
    notes:
      "Review the company culture and prepare questions about the team structure.",
    requirements: ["Resume copy", "ID proof"],
  },
  {
    id: 3,
    company: "Amazon",
    position: "Software Development Engineer",
    date: "June 22, 2024",
    time: "11:00 AM - 1:00 PM",
    type: "Technical",
    mode: "In-person",
    interviewers: ["David Williams", "Michael Brown", "Jessica Miller"],
    location: "Amazon Office, Bangalore",
    status: "scheduled",
    round: "Round 1",
    notes:
      "Be prepared to discuss your experience with cloud technologies and distributed systems.",
    requirements: [
      "Resume copy (3 copies)",
      "ID proof",
      "College ID",
      "Eligibility certificate",
    ],
  },
];

const pastInterviews = [
  {
    id: 4,
    company: "Flipkart",
    position: "Product Manager",
    date: "June 5, 2024",
    time: "10:00 AM - 11:00 AM",
    type: "Technical",
    mode: "In-person",
    interviewers: ["Rajesh Kumar"],
    location: "Flipkart Office, Bangalore",
    status: "completed",
    result: "selected",
    round: "Round 2",
    feedback:
      "Strong problem-solving skills. Good understanding of product lifecycle. Needs to improve on market research aspects.",
  },
  {
    id: 5,
    company: "Adobe",
    position: "UI/UX Designer",
    date: "June 3, 2024",
    time: "3:00 PM - 4:30 PM",
    type: "Technical",
    mode: "Virtual",
    interviewers: ["Lisa Anderson", "Mark Wilson"],
    location: "Zoom",
    status: "completed",
    result: "rejected",
    round: "Final Round",
    feedback:
      "Good design principles, but portfolio lacked depth in mobile applications. Consider strengthening mobile UX examples.",
  },
  {
    id: 6,
    company: "TCS",
    position: "System Analyst",
    date: "May 28, 2024",
    time: "11:00 AM - 12:00 PM",
    type: "HR",
    mode: "In-person",
    interviewers: ["Priya Sharma"],
    location: "TCS Campus, Hyderabad",
    status: "completed",
    result: "pending",
    round: "Final Round",
    feedback: "Interview went well. Decision pending from the hiring team.",
  },
];

// Mock preparation resources
const prepResources = [
  {
    id: 1,
    title: "Technical Interview Preparation Guide",
    type: "document",
    company: "General",
    topics: ["Data Structures", "Algorithms", "System Design"],
    addedBy: "Placement Cell",
    date: "May 15, 2024",
  },
  {
    id: 2,
    title: "Google Interview Insights",
    type: "video",
    company: "Google",
    topics: ["Coding Challenges", "Problem Solving", "Cultural Fit"],
    addedBy: "Placement Cell",
    date: "May 20, 2024",
  },
  {
    id: 3,
    title: "HR Interview Questions and Answers",
    type: "document",
    company: "General",
    topics: ["Behavioral Questions", "Company Research", "Salary Negotiation"],
    addedBy: "Placement Officer",
    date: "June 1, 2024",
  },
  {
    id: 4,
    title: "Mock Technical Interview Session",
    type: "recording",
    company: "Microsoft",
    topics: ["Live Coding", "Problem Solving", "Communication Skills"],
    addedBy: "Career Development Center",
    date: "June 5, 2024",
  },
];

// Function to render status badge
function StatusBadge({ status, result }: { status: string; result?: string }) {
  if (status === "scheduled") {
    return (
      <Badge
        variant="outline"
        className="bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-200"
      >
        <Clock className="mr-1 h-3 w-3" />
        Upcoming
      </Badge>
    );
  } else if (status === "completed") {
    if (result === "selected") {
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
        >
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Selected
        </Badge>
      );
    } else if (result === "rejected") {
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 hover:bg-red-50 border-red-200"
        >
          <X className="mr-1 h-3 w-3" />
          Rejected
        </Badge>
      );
    } else {
      return (
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-700 hover:bg-orange-50 border-orange-200"
        >
          <Hourglass className="mr-1 h-3 w-3" />
          Result Pending
        </Badge>
      );
    }
  }
  return null;
}

export default function InterviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Interviews</h1>
          <p className="text-muted-foreground">
            Manage your interview schedules and preparation
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Schedule Mock Interview
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search interviews..."
              className="pl-8 w-full sm:w-[250px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <ListFilter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            June 2024
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming" className="flex items-center gap-1.5">
            <CalendarClock className="h-4 w-4" />
            Upcoming
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {upcomingInterviews.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            Past
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {pastInterviews.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="preparation"
            className="flex items-center gap-1.5"
          >
            <Info className="h-4 w-4" />
            Preparation
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {prepResources.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Interviews Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {upcomingInterviews.map((interview) => (
              <Card
                key={interview.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        {interview.company}
                        <StatusBadge status={interview.status} />
                      </CardTitle>
                      <CardDescription>{interview.position}</CardDescription>
                    </div>
                    <Badge variant="secondary">{interview.round}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{interview.date}</div>
                        <div className="text-sm text-muted-foreground">
                          {interview.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      {interview.mode === "Virtual" ? (
                        <Video className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      ) : (
                        <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      )}
                      <div>
                        <div className="font-medium">
                          {interview.mode} Interview
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {interview.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">
                          {interview.type} Round
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {interview.interviewers.join(", ")}
                        </div>
                      </div>
                    </div>

                    {interview.notes && (
                      <div className="pt-2 border-t text-sm">
                        <p className="font-medium mb-1">Notes:</p>
                        <p className="text-muted-foreground">
                          {interview.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-amber-500 mr-1.5" />
                    <span className="text-xs text-muted-foreground">
                      {interview.requirements.length} requirements
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Prepare</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {upcomingInterviews.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-muted/10">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">
                No Upcoming Interviews
              </h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
                You don&apos;t have any interviews scheduled at the moment.
                Apply to job postings or request mock interviews.
              </p>
              <Button>Apply to Jobs</Button>
            </div>
          )}
        </TabsContent>

        {/* Past Interviews Tab */}
        <TabsContent value="past" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pastInterviews.map((interview) => (
              <Card
                key={interview.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        {interview.company}
                        <StatusBadge
                          status={interview.status}
                          result={interview.result}
                        />
                      </CardTitle>
                      <CardDescription>{interview.position}</CardDescription>
                    </div>
                    <Badge variant="secondary">{interview.round}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{interview.date}</div>
                        <div className="text-sm text-muted-foreground">
                          {interview.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      {interview.mode === "Virtual" ? (
                        <Video className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      ) : (
                        <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      )}
                      <div>
                        <div className="font-medium">
                          {interview.mode} Interview
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {interview.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Building className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">
                          {interview.type} Round
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {interview.interviewers.join(", ")}
                        </div>
                      </div>
                    </div>

                    {interview.feedback && (
                      <div className="pt-2 border-t text-sm">
                        <p className="font-medium mb-1">Feedback:</p>
                        <p className="text-muted-foreground">
                          {interview.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {pastInterviews.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-muted/10">
              <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">No Past Interviews</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Your interview history will appear here after you&apos;ve
                completed interviews.
              </p>
            </div>
          )}
        </TabsContent>

        {/* Preparation Resources Tab */}
        <TabsContent value="preparation" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {prepResources.map((resource) => (
              <Card
                key={resource.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription>
                        For {resource.company} interviews
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`
                        ${
                          resource.type === "document"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : resource.type === "video"
                            ? "bg-purple-50 text-purple-700 border-purple-200"
                            : "bg-green-50 text-green-700 border-green-200"
                        }
                      `}
                    >
                      {resource.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">
                        Added by: {resource.addedBy}
                      </div>
                      <div className="text-muted-foreground">
                        {resource.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 border rounded-md bg-muted/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Need Help With Preparation?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a one-on-one session with our placement officers for
                  personalized guidance.
                </p>
              </div>
              <Button>Book Session</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
