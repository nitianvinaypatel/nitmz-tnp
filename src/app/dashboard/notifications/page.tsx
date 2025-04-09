import React from "react";
import Link from "next/link";
import {
  Bell,
  Building,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Cog,
  Eye,
  Filter,
  Mail,
  MoreHorizontal,
  Search,
  Trash,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock notifications data
const notifications = [
  {
    id: 1,
    title: "Microsoft Recruitment Registration Open",
    message:
      "Registration for Microsoft campus recruitment drive is now open. Last date to apply is June 5, 2024.",
    type: "placement",
    sender: "Training & Placement Cell",
    timestamp: "2 hours ago",
    isRead: false,
    link: "/dashboard/events/4",
  },
  {
    id: 2,
    title: "Resume Review Feedback",
    message:
      "Your resume has been reviewed. Please check the feedback and make necessary changes.",
    type: "application",
    sender: "Placement Officer",
    timestamp: "1 day ago",
    isRead: true,
    link: "/dashboard/profile",
  },
  {
    id: 3,
    title: "New Job Posted: Software Engineer at Google",
    message:
      "A new job for Software Engineer position has been posted by Google. Check it out!",
    type: "job",
    sender: "System",
    timestamp: "2 days ago",
    isRead: false,
    link: "/dashboard/jobs",
  },
  {
    id: 4,
    title: "Reminder: Pre-Placement Talk",
    message:
      "This is a reminder that Google's pre-placement talk is scheduled tomorrow at 2:00 PM in Seminar Hall 1.",
    type: "event",
    sender: "Training & Placement Cell",
    timestamp: "3 days ago",
    isRead: true,
    link: "/dashboard/events/1",
  },
  {
    id: 5,
    title: "Amazon Recruitment Results",
    message:
      "Results for the Amazon recruitment drive have been announced. Check your eligibility for the next round.",
    type: "placement",
    sender: "Placement Coordinator",
    timestamp: "4 days ago",
    isRead: true,
    link: "/dashboard/companies/5",
  },
  {
    id: 6,
    title: "Profile Completion Reminder",
    message:
      "Your profile is 80% complete. Complete your profile to improve visibility to recruiters.",
    type: "profile",
    sender: "System",
    timestamp: "5 days ago",
    isRead: false,
    link: "/dashboard/profile",
  },
  {
    id: 7,
    title: "Interview Scheduled with Flipkart",
    message:
      "Your interview with Flipkart has been scheduled on June 15, 2024 at 10:00 AM.",
    type: "interview",
    sender: "Placement Coordinator",
    timestamp: "6 days ago",
    isRead: true,
    link: "/dashboard/interviews",
  },
  {
    id: 8,
    title: "New Workshop: Technical Interview Preparation",
    message:
      "A new workshop on Technical Interview Preparation has been scheduled for June 2, 2024.",
    type: "event",
    sender: "Training & Placement Cell",
    timestamp: "1 week ago",
    isRead: true,
    link: "/dashboard/events/3",
  },
  {
    id: 9,
    title: "Application Status Update: Microsoft",
    message:
      "Your application for the Software Engineer position at Microsoft has been shortlisted for the technical assessment.",
    type: "application",
    sender: "System",
    timestamp: "1 week ago",
    isRead: false,
    link: "/dashboard/applications",
  },
  {
    id: 10,
    title: "Document Verification Pending",
    message:
      "Please upload your academic certificates for verification before the placement season begins.",
    type: "verification",
    sender: "Placement Officer",
    timestamp: "2 weeks ago",
    isRead: true,
    link: "/dashboard/profile/documents",
  },
];

// Notification types for filtering
const notificationTypes = [
  {
    value: "all",
    label: "All Notifications",
  },
  {
    value: "placement",
    label: "Placement Updates",
  },
  {
    value: "application",
    label: "Application Status",
  },
  {
    value: "job",
    label: "Job Postings",
  },
  {
    value: "event",
    label: "Events & Workshops",
  },
  {
    value: "profile",
    label: "Profile Updates",
  },
  {
    value: "interview",
    label: "Interview Schedules",
  },
  {
    value: "verification",
    label: "Document Verification",
  },
];

// Get notification icon based on type
function getNotificationIcon(type: string) {
  switch (type) {
    case "placement":
      return <Building className="h-4 w-4" />;
    case "application":
      return <Mail className="h-4 w-4" />;
    case "job":
      return <Building className="h-4 w-4" />;
    case "event":
      return <Calendar className="h-4 w-4" />;
    case "profile":
      return <Cog className="h-4 w-4" />;
    case "interview":
      return <Clock className="h-4 w-4" />;
    case "verification":
      return <Check className="h-4 w-4" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
}

// Get notification color based on type
function getNotificationColor(type: string) {
  switch (type) {
    case "placement":
      return "bg-blue-100 text-blue-700";
    case "application":
      return "bg-green-100 text-green-700";
    case "job":
      return "bg-purple-100 text-purple-700";
    case "event":
      return "bg-orange-100 text-orange-700";
    case "profile":
      return "bg-gray-100 text-gray-700";
    case "interview":
      return "bg-indigo-100 text-indigo-700";
    case "verification":
      return "bg-red-100 text-red-700";
    default:
      return "bg-primary/10 text-primary";
  }
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Mark All as Read
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Cog className="h-4 w-4" />
            Notification Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar - Filters */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Filter Notifications</CardTitle>
            </CardHeader>
            <CardContent className="pb-3 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notifications..."
                  className="pl-10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Notification Type</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  {notificationTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Date Range</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium">Read Status</label>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Notifications</option>
                  <option value="read">Read Only</option>
                  <option value="unread">Unread Only</option>
                </select>
              </div>

              <Button className="w-full mt-2">Apply Filters</Button>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full" size="sm">
                Reset Filters
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="pb-1">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Notifications</span>
                  <span className="font-medium">{notifications.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Unread</span>
                  <span className="font-medium">
                    {
                      notifications.filter(
                        (notification) => !notification.isRead
                      ).length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last 7 Days</span>
                  <span className="font-medium">6</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content - Notifications */}
        <div className="md:col-span-3">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5"
              >
                <Filter className="h-3.5 w-3.5" />
                Sort by Date
                <ChevronDown className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`hover:border-primary/50 transition-colors ${
                    !notification.isRead ? "bg-muted/30 border-primary/10" : ""
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative p-5">
                      {!notification.isRead && (
                        <div className="absolute top-5 right-5 h-2.5 w-2.5 rounded-full bg-primary"></div>
                      )}
                      <div className="flex items-start gap-4">
                        <div
                          className={`${getNotificationColor(
                            notification.type
                          )} p-2 rounded-md`}
                        >
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <h3 className="font-medium text-base">
                                {notification.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                From {notification.sender}
                              </p>
                            </div>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {notification.timestamp}
                            </span>
                          </div>
                          <p className="text-sm mt-2">{notification.message}</p>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2"
                                asChild
                              >
                                <Link href={notification.link}>
                                  <Eye className="h-3.5 w-3.5 mr-1" />
                                  View Details
                                </Link>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2"
                              >
                                {notification.isRead ? (
                                  <>
                                    <Mail className="h-3.5 w-3.5 mr-1" />
                                    Mark as Unread
                                  </>
                                ) : (
                                  <>
                                    <Check className="h-3.5 w-3.5 mr-1" />
                                    Mark as Read
                                  </>
                                )}
                              </Button>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Trash className="h-3.5 w-3.5 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <X className="h-3.5 w-3.5 mr-2" />
                                  Mute Similar
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex items-center justify-center py-2">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {notifications
                .filter((notification) => !notification.isRead)
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className="bg-muted/30 border-primary/10 hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-0">
                      <div className="relative p-5">
                        <div className="absolute top-5 right-5 h-2.5 w-2.5 rounded-full bg-primary"></div>
                        <div className="flex items-start gap-4">
                          <div
                            className={`${getNotificationColor(
                              notification.type
                            )} p-2 rounded-md`}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                              <div>
                                <h3 className="font-medium text-base">
                                  {notification.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  From {notification.sender}
                                </p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {notification.timestamp}
                              </span>
                            </div>
                            <p className="text-sm mt-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center justify-between mt-3 pt-3 border-t">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2"
                                  asChild
                                >
                                  <Link href={notification.link}>
                                    <Eye className="h-3.5 w-3.5 mr-1" />
                                    View Details
                                  </Link>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2"
                                >
                                  <Check className="h-3.5 w-3.5 mr-1" />
                                  Mark as Read
                                </Button>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Trash className="h-3.5 w-3.5 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <X className="h-3.5 w-3.5 mr-2" />
                                    Mute Similar
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {notifications.filter((notification) => !notification.isRead)
                .length === 0 && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg mb-1">
                    No Unread Notifications
                  </h3>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    You have read all your notifications. Check back later for
                    new updates.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="read" className="space-y-4">
              {notifications
                .filter((notification) => notification.isRead)
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className="hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-0">
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={`${getNotificationColor(
                              notification.type
                            )} p-2 rounded-md`}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                              <div>
                                <h3 className="font-medium text-base">
                                  {notification.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  From {notification.sender}
                                </p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {notification.timestamp}
                              </span>
                            </div>
                            <p className="text-sm mt-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center justify-between mt-3 pt-3 border-t">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2"
                                  asChild
                                >
                                  <Link href={notification.link}>
                                    <Eye className="h-3.5 w-3.5 mr-1" />
                                    View Details
                                  </Link>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2"
                                >
                                  <Mail className="h-3.5 w-3.5 mr-1" />
                                  Mark as Unread
                                </Button>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Trash className="h-3.5 w-3.5 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <X className="h-3.5 w-3.5 mr-2" />
                                    Mute Similar
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {notifications.filter((notification) => notification.isRead)
                .length === 0 && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg mb-1">
                    No Read Notifications
                  </h3>
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    You haven't read any notifications yet.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
