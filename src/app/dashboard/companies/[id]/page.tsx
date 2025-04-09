import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Building,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
  Mail,
  Phone,
  FileText,
  ExternalLink,
  Share2,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companiesData } from "../page";

export default function CompanyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Get company ID from params
  const companyId = parseInt(params.id);

  // Find the company by ID
  const company = companiesData.find((company) => company.id === companyId);

  // If company not found, show error
  if (!company) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The company you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/dashboard/companies">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Companies
          </Link>
        </Button>
      </div>
    );
  }

  // Sample past placements for the company
  const pastPlacements = [
    {
      year: "2023",
      offers: 12,
      accepted: 10,
      avgPackage: "₹18 LPA",
      highestPackage: "₹35 LPA",
    },
    {
      year: "2022",
      offers: 8,
      accepted: 8,
      avgPackage: "₹16.5 LPA",
      highestPackage: "₹28 LPA",
    },
    {
      year: "2021",
      offers: 6,
      accepted: 6,
      avgPackage: "₹15 LPA",
      highestPackage: "₹25 LPA",
    },
  ];

  // Sample upcoming events for the company
  const upcomingEvents = [
    {
      id: 1,
      title: "Pre-Placement Talk",
      date: "August 15, 2024",
      time: "3:00 PM - 4:30 PM",
      location: "Seminar Hall 1",
      description:
        "Learn about our company culture, open positions, and the recruitment process.",
    },
    {
      id: 2,
      title: "Campus Recruitment Drive",
      date: "September 5-6, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Placement Office",
      description:
        "Initial screening, technical assessments, and interviews for shortlisted candidates.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/companies">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Companies
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm">Contact Recruiter</Button>
        </div>
      </div>

      {/* Company header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
              <Building className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div>
                  <h1 className="text-2xl font-bold">{company.name}</h1>
                  <p className="text-muted-foreground">{company.industry}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full`}
                  >
                    {company.hiringTier}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </div>

              <p className="text-sm mb-4">{company.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">
                      Headquarters
                    </p>
                    <p>{company.headquarters}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">Founded</p>
                    <p>{company.founded}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">
                      Open Positions
                    </p>
                    <p>{company.openPositions} positions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="placements">Placements</TabsTrigger>
              <TabsTrigger value="openings">Job Openings</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                  <CardDescription>
                    Key information about {company.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">About {company.name}</h3>
                    <p className="text-sm">{company.description}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Hiring Roles</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.hiringRoles.map((role, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full text-xs"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Recruitment Locations</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.locations.map((location, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <MapPin className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          <span>{location}</span>
                          {idx < company.locations.length - 1 && (
                            <span className="mx-2">•</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Why Join {company.name}?
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs font-medium text-primary">
                            1
                          </span>
                        </div>
                        <span>
                          Innovative work environment with cutting-edge
                          technologies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs font-medium text-primary">
                            2
                          </span>
                        </div>
                        <span>
                          Competitive compensation and benefits package
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs font-medium text-primary">
                            3
                          </span>
                        </div>
                        <span>
                          Career growth opportunities and mentorship programs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-xs font-medium text-primary">
                            4
                          </span>
                        </div>
                        <span>
                          Work-life balance and flexible work arrangements
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Placements Tab */}
            <TabsContent value="placements">
              <Card>
                <CardHeader>
                  <CardTitle>Placement History</CardTitle>
                  <CardDescription>
                    Past recruitment statistics at our institution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          Total Students Hired
                        </h3>
                        <p className="text-3xl font-bold text-primary">
                          {company.pastRecruitment.totalHired}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last {company.pastRecruitment.years.length} years
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          Average Package
                        </h3>
                        <p className="text-3xl font-bold text-primary">
                          {company.pastRecruitment.avgPackage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Annual CTC
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          Highest Offer
                        </h3>
                        <p className="text-3xl font-bold text-primary">
                          {company.pastRecruitment.highestOffer}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Annual CTC
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="font-medium">
                    Year-wise Placement Statistics
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 text-sm font-medium">
                            Year
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium">
                            Offers Made
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium">
                            Offers Accepted
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium">
                            Avg. Package
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium">
                            Highest Package
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pastPlacements.map((placement, idx) => (
                          <tr key={idx} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 text-sm">
                              {placement.year}
                            </td>
                            <td className="py-3 px-4 text-sm">
                              {placement.offers}
                            </td>
                            <td className="py-3 px-4 text-sm">
                              {placement.accepted}
                            </td>
                            <td className="py-3 px-4 text-sm font-medium">
                              {placement.avgPackage}
                            </td>
                            <td className="py-3 px-4 text-sm font-medium">
                              {placement.highestPackage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Departments Hired From</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Computer Science</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Information Technology</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Electronics</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Mechanical Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Electrical Engineering</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Job Openings Tab */}
            <TabsContent value="openings">
              <Card>
                <CardHeader>
                  <CardTitle>Current Openings</CardTitle>
                  <CardDescription>
                    Open positions at {company.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {company.hiringRoles.map((role, idx) => (
                    <Card key={idx} className="border">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{role}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1.5" />
                              <span>{company.locations[0]}</span>
                              <span className="mx-2">•</span>
                              <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                              <span>Full-time</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="h-8">
                            Apply Now
                          </Button>
                        </div>
                        <p className="text-sm mt-2">
                          We are looking for a talented {role} to join our team
                          to build innovative solutions.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                            {company.name.split(" ")[0]}
                          </span>
                          <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                            {role.split(" ")[0]}
                          </span>
                          <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                            {idx % 2 === 0 ? "Remote" : "On-site"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/jobs">View All Job Postings</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    {company.name} campus events and activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="border">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="flex flex-col xs:flex-row xs:items-center text-sm text-muted-foreground mt-1 gap-y-1 gap-x-3">
                              <div className="flex items-center">
                                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1.5" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3.5 w-3.5 mr-1.5" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="self-start md:self-center"
                          >
                            Add to Calendar
                          </Button>
                        </div>
                        <p className="text-sm mt-3">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}

                  {upcomingEvents.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="font-medium text-lg mb-1">
                        No Upcoming Events
                      </h3>
                      <p className="text-sm text-muted-foreground text-center max-w-md">
                        There are currently no scheduled events for{" "}
                        {company.name}. Check back later for updates.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/events">View All Campus Events</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Users className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">University Recruiter</p>
                  <p className="text-sm text-muted-foreground">
                    Jane Doe, Senior Recruiter
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-primary">
                    campus-recruit@
                    {company.name.toLowerCase().replace(/\s+/g, "")}.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-sm truncate">
                    <Link
                      href={company.websiteUrl}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.websiteUrl.replace(/(^\w+:|^)\/\//, "")}
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Recruiter</Button>
            </CardFooter>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link href="#" className="text-sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Company Brochure
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link href="#" className="text-sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Interview Preparation Guide
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link href="#" className="text-sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Past Placement FAQ
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Similar Companies */}
          <Card>
            <CardHeader>
              <CardTitle>Similar Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {companiesData
                  .filter(
                    (c) =>
                      c.id !== company.id && c.hiringTier === company.hiringTier
                  )
                  .slice(0, 3)
                  .map((similarCompany) => (
                    <div
                      key={similarCompany.id}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <Building className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/dashboard/companies/${similarCompany.id}`}
                          className="font-medium hover:text-primary"
                        >
                          {similarCompany.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {similarCompany.industry}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" size="sm" asChild>
                <Link href="/dashboard/companies">View All Companies</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
