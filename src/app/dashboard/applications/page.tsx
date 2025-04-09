import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  Search,
  SlidersHorizontal,
  XCircle,
  ThumbsUp,
  AlertTriangle,
  Briefcase,
  Send,
  ArrowRight,
  Filter,
  Hourglass,
  CalendarCheck,
  FileText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock application data
const applications = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    location: "Bangalore",
    type: "Full-time",
    appliedDate: "June 1, 2024",
    status: "interview_scheduled",
    nextStep: "Technical Interview",
    nextStepDate: "June 15, 2024",
    statusHistory: [
      { status: "applied", date: "June 1, 2024" },
      { status: "screening_completed", date: "June 5, 2024" },
      { status: "interview_scheduled", date: "June 8, 2024" },
    ],
    jobDescription: "Developing and maintaining Google search algorithms...",
    salary: "₹25-40 LPA",
    referral: false,
    deadline: "June 30, 2024",
    logo: "/companies/google.png",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Frontend Developer",
    location: "Hyderabad",
    type: "Full-time",
    appliedDate: "May 25, 2024",
    status: "offer_received",
    nextStep: "Accept Offer",
    nextStepDate: "June 20, 2024",
    statusHistory: [
      { status: "applied", date: "May 25, 2024" },
      { status: "screening_completed", date: "May 28, 2024" },
      { status: "interview_scheduled", date: "June 3, 2024" },
      { status: "interview_completed", date: "June 3, 2024" },
      { status: "offer_received", date: "June 8, 2024" },
    ],
    jobDescription:
      "Developing frontend components using React and TypeScript...",
    salary: "₹22-35 LPA",
    referral: true,
    deadline: "June 25, 2024",
    logo: "/companies/microsoft.png",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Software Development Engineer",
    location: "Pune",
    type: "Full-time",
    appliedDate: "May 30, 2024",
    status: "rejected",
    statusHistory: [
      { status: "applied", date: "May 30, 2024" },
      { status: "screening_completed", date: "June 3, 2024" },
      { status: "rejected", date: "June 5, 2024" },
    ],
    jobDescription: "Designing and implementing scalable systems...",
    salary: "₹20-35 LPA",
    referral: false,
    deadline: "June 15, 2024",
    logo: "/companies/amazon.png",
    rejectionReason:
      "Skill mismatch for the current role. Encouraged to apply for other positions.",
  },
  {
    id: 4,
    company: "Flipkart",
    position: "Product Manager",
    location: "Bangalore",
    type: "Full-time",
    appliedDate: "June 2, 2024",
    status: "screening_completed",
    nextStep: "Technical Round",
    nextStepDate: "TBD",
    statusHistory: [
      { status: "applied", date: "June 2, 2024" },
      { status: "screening_completed", date: "June 7, 2024" },
    ],
    jobDescription: "Managing product lifecycle and feature development...",
    salary: "₹18-30 LPA",
    referral: true,
    deadline: "June 20, 2024",
    logo: "/companies/flipkart.png",
  },
  {
    id: 5,
    company: "Adobe",
    position: "UI/UX Designer",
    location: "Noida",
    type: "Full-time",
    appliedDate: "June 5, 2024",
    status: "applied",
    statusHistory: [{ status: "applied", date: "June 5, 2024" }],
    jobDescription: "Creating user-centric design solutions...",
    salary: "₹15-25 LPA",
    referral: false,
    deadline: "July 5, 2024",
    logo: "/companies/adobe.png",
  },
  {
    id: 6,
    company: "Infosys",
    position: "Systems Engineer",
    location: "Chennai",
    type: "Full-time",
    appliedDate: "May 20, 2024",
    status: "interview_completed",
    nextStep: "HR Round",
    nextStepDate: "June 12, 2024",
    statusHistory: [
      { status: "applied", date: "May 20, 2024" },
      { status: "screening_completed", date: "May 25, 2024" },
      { status: "interview_scheduled", date: "June 1, 2024" },
      { status: "interview_completed", date: "June 1, 2024" },
    ],
    jobDescription: "Developing and maintaining enterprise applications...",
    salary: "₹6-9 LPA",
    referral: false,
    deadline: "June 10, 2024",
    logo: "/companies/infosys.png",
  },
];

// Application status mapping for UI display
const statusConfig = {
  applied: {
    label: "Applied",
    icon: <Send className="h-3.5 w-3.5 mr-1" />,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    step: 1,
  },
  screening_completed: {
    label: "Screening Completed",
    icon: <FileText className="h-3.5 w-3.5 mr-1" />,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    step: 2,
  },
  interview_scheduled: {
    label: "Interview Scheduled",
    icon: <CalendarCheck className="h-3.5 w-3.5 mr-1" />,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    step: 3,
  },
  interview_completed: {
    label: "Interview Completed",
    icon: <CheckCircle className="h-3.5 w-3.5 mr-1" />,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    step: 4,
  },
  offer_received: {
    label: "Offer Received",
    icon: <ThumbsUp className="h-3.5 w-3.5 mr-1" />,
    color: "bg-green-50 text-green-700 border-green-200",
    step: 5,
  },
  rejected: {
    label: "Rejected",
    icon: <XCircle className="h-3.5 w-3.5 mr-1" />,
    color: "bg-red-50 text-red-700 border-red-200",
    step: -1,
  },
  on_hold: {
    label: "On Hold",
    icon: <Hourglass className="h-3.5 w-3.5 mr-1" />,
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    step: 0,
  },
};

// Render application status badge
function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status as keyof typeof statusConfig];

  return (
    <Badge
      variant="outline"
      className={`${config.color} hover:${config.color}`}
    >
      {config.icon}
      {config.label}
    </Badge>
  );
}

const ApplicationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Applications</h1>
          <p className="text-muted-foreground">
            Track and manage your job applications
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            Apply to New Job
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                applications.filter(
                  (app) => !["rejected", "offer_received"].includes(app.status)
                ).length
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {
                applications.filter((app) => app.status === "offer_received")
                  .length
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rejections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {applications.filter((app) => app.status === "rejected").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search applications..."
              className="pl-8 w-full sm:w-[250px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5"
              >
                <Filter className="h-3.5 w-3.5" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Applications</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Full-time</DropdownMenuItem>
              <DropdownMenuItem>Internship</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Sort
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">
            All
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {applications.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="active">
            Active
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {
                applications.filter(
                  (app) => !["rejected", "offer_received"].includes(app.status)
                ).length
              }
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="offer_received">
            Offers
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {
                applications.filter((app) => app.status === "offer_received")
                  .length
              }
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected
            <Badge variant="secondary" className="ml-1 rounded-full px-2 py-0">
              {applications.filter((app) => app.status === "rejected").length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        {/* All Applications Tab */}
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((application) => (
              <Card
                key={application.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        {application.company}
                        <StatusBadge status={application.status} />
                      </CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {application.position} • {application.location}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Applied: {application.appliedDate}</span>
                      </div>
                      <Badge variant="outline" className="bg-gray-50">
                        {application.type}
                      </Badge>
                    </div>

                    {application.nextStep && (
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium">Next Step:</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">
                            {application.nextStep}
                          </span>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700"
                          >
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            {application.nextStepDate}
                          </Badge>
                        </div>
                      </div>
                    )}

                    {application.rejectionReason && (
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium">Feedback:</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {application.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    {application.statusHistory.length} status updates
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Active Applications Tab */}
        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications
              .filter(
                (app) => !["rejected", "offer_received"].includes(app.status)
              )
              .map((application) => (
                <Card
                  key={application.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {application.company}
                          <StatusBadge status={application.status} />
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {application.position} • {application.location}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Applied: {application.appliedDate}</span>
                        </div>
                        <Badge variant="outline" className="bg-gray-50">
                          {application.type}
                        </Badge>
                      </div>

                      {application.nextStep && (
                        <div className="pt-2 border-t">
                          <p className="text-sm font-medium">Next Step:</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm">
                              {application.nextStep}
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700"
                            >
                              <Clock className="mr-1 h-3.5 w-3.5" />
                              {application.nextStepDate}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      {application.statusHistory.length} status updates
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {applications.filter(
            (app) => !["rejected", "offer_received"].includes(app.status)
          ).length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-muted/10">
              <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">
                No Active Applications
              </h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
                You don&apos;t have any active applications at the moment.
              </p>
              <Button>Apply to Jobs</Button>
            </div>
          )}
        </TabsContent>

        {/* Offers Tab */}
        <TabsContent value="offer_received" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications
              .filter((app) => app.status === "offer_received")
              .map((application) => (
                <Card
                  key={application.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {application.company}
                          <StatusBadge status={application.status} />
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {application.position} • {application.location}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Applied: {application.appliedDate}</span>
                        </div>
                        <div className="text-sm font-medium text-green-600">
                          {application.salary}
                        </div>
                      </div>

                      {application.nextStep && (
                        <div className="pt-2 border-t">
                          <p className="text-sm font-medium">Next Step:</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm">
                              {application.nextStep}
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700"
                            >
                              <Clock className="mr-1 h-3.5 w-3.5" />
                              {application.nextStepDate}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Accept Offer</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {applications.filter((app) => app.status === "offer_received")
            .length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-muted/10">
              <ThumbsUp className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">No Offers Yet</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Keep applying and following up on your applications.
              </p>
            </div>
          )}
        </TabsContent>

        {/* Rejected Tab */}
        <TabsContent value="rejected" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications
              .filter((app) => app.status === "rejected")
              .map((application) => (
                <Card
                  key={application.id}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {application.company}
                          <StatusBadge status={application.status} />
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {application.position} • {application.location}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Applied: {application.appliedDate}</span>
                        </div>
                        <Badge variant="outline" className="bg-gray-50">
                          {application.type}
                        </Badge>
                      </div>

                      {application.rejectionReason && (
                        <div className="pt-2 border-t">
                          <p className="text-sm font-medium">Feedback:</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {application.rejectionReason}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      {application.statusHistory.length} status updates
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {applications.filter((app) => app.status === "rejected").length ===
            0 && (
            <div className="flex flex-col items-center justify-center py-12 border rounded-md bg-muted/10">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">No Rejections</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                You haven&apos;t received any rejections. Keep up the good work!
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Application Insights</h3>
          <p className="text-sm text-muted-foreground">
            Based on your applications, most responses come within 7 days.
          </p>
        </div>
        <Button variant="link" className="flex items-center gap-1">
          View Full Analytics
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ApplicationsPage;
