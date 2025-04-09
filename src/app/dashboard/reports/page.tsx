import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Calendar,
  Building,
  Download,
  FileSpreadsheet,
  GraduationCap,
  LineChart,
  ListFilter,
  PieChart,
  Search,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock data for department-wise placement statistics
const departmentStats = [
  {
    department: "Computer Science & Engineering",
    placed: 112,
    total: 120,
    avgPackage: 18.5,
    highestPackage: 45,
    placementRate: 93.33,
    trend: "up",
    companies: 32,
  },
  {
    department: "Information Technology",
    placed: 95,
    total: 110,
    avgPackage: 16.2,
    highestPackage: 38,
    placementRate: 86.36,
    trend: "up",
    companies: 28,
  },
  {
    department: "Electronics & Communication",
    placed: 87,
    total: 105,
    avgPackage: 12.8,
    highestPackage: 32,
    placementRate: 82.86,
    trend: "stable",
    companies: 25,
  },
  {
    department: "Electrical Engineering",
    placed: 72,
    total: 95,
    avgPackage: 11.4,
    highestPackage: 28,
    placementRate: 75.79,
    trend: "down",
    companies: 20,
  },
  {
    department: "Mechanical Engineering",
    placed: 68,
    total: 100,
    avgPackage: 10.5,
    highestPackage: 24,
    placementRate: 68.0,
    trend: "down",
    companies: 18,
  },
];

// Mock data for top recruiting companies
const topCompanies = [
  {
    name: "Microsoft",
    students: 28,
    avgPackage: 25.4,
    highestPackage: 45,
    trend: "up",
  },
  {
    name: "Google",
    students: 22,
    avgPackage: 32.6,
    highestPackage: 42,
    trend: "up",
  },
  {
    name: "Amazon",
    students: 35,
    avgPackage: 24.8,
    highestPackage: 38,
    trend: "up",
  },
  {
    name: "Adobe",
    students: 18,
    avgPackage: 22.5,
    highestPackage: 35,
    trend: "up",
  },
  {
    name: "Infosys",
    students: 45,
    avgPackage: 8.5,
    highestPackage: 12,
    trend: "down",
  },
];

// Mock data for placement trends over last 5 years
const yearlyTrends = [
  { year: 2020, placed: 380, avgPackage: 8.2, companies: 65 },
  { year: 2021, placed: 410, avgPackage: 9.5, companies: 72 },
  { year: 2022, placed: 425, avgPackage: 11.8, companies: 78 },
  { year: 2023, placed: 450, avgPackage: 14.2, companies: 85 },
  { year: 2024, placed: 434, avgPackage: 15.6, companies: 95 },
];

// Skill-wise placement data
const skillStats = [
  {
    skill: "Web Development",
    placements: 85,
    avgPackage: 16.5,
    demand: "high",
  },
  { skill: "AI/ML", placements: 42, avgPackage: 22.4, demand: "high" },
  { skill: "Data Science", placements: 38, avgPackage: 20.8, demand: "high" },
  {
    skill: "Cloud Computing",
    placements: 35,
    avgPackage: 18.2,
    demand: "high",
  },
  {
    skill: "Mobile Development",
    placements: 40,
    avgPackage: 17.5,
    demand: "high",
  },
  { skill: "Cybersecurity", placements: 28, avgPackage: 19.2, demand: "high" },
  { skill: "DevOps", placements: 32, avgPackage: 18.8, demand: "high" },
  { skill: "IoT", placements: 25, avgPackage: 16.2, demand: "medium" },
  { skill: "Blockchain", placements: 18, avgPackage: 21.5, demand: "medium" },
  { skill: "AR/VR", placements: 12, avgPackage: 22.2, demand: "medium" },
];

function getTrendIcon(trend: string) {
  if (trend === "up") {
    return <ArrowUp className="h-4 w-4 text-green-500" />;
  } else if (trend === "down") {
    return <ArrowDown className="h-4 w-4 text-red-500" />;
  } else {
    return <ArrowRight className="h-4 w-4 text-amber-500" />;
  }
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Detailed placement statistics and analytics for your college
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Calendar className="h-4 w-4" /> 2023-2024
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Share2 className="h-4 w-4" /> Share
          </Button>
          <Button className="flex items-center gap-1">
            <FileSpreadsheet className="h-4 w-4" /> Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total Placements
            </CardTitle>
            <CardDescription>Academic Year 2023-2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">434</div>
              <div className="flex items-center text-sm text-green-500 font-medium">
                <ArrowUp className="mr-1 h-4 w-4" />
                <span>8.5%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              vs 400 in previous year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Average Package
            </CardTitle>
            <CardDescription>LPA (Lakhs Per Annum)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">₹15.6L</div>
              <div className="flex items-center text-sm text-green-500 font-medium">
                <ArrowUp className="mr-1 h-4 w-4" />
                <span>9.8%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              vs ₹14.2L in previous year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Placement Rate
            </CardTitle>
            <CardDescription>Overall placement percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">81.2%</div>
              <div className="flex items-center text-sm text-red-500 font-medium">
                <ArrowDown className="mr-1 h-4 w-4" />
                <span>2.3%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              vs 83.5% in previous year
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="department" className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <TabsList>
            <TabsTrigger
              value="department"
              className="flex items-center gap-1.5"
            >
              <GraduationCap className="h-4 w-4" />
              Department
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-1.5">
              <Building className="h-4 w-4" />
              Company
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-1.5">
              <LineChart className="h-4 w-4" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4" />
              Skills
            </TabsTrigger>
          </TabsList>
          <div className="flex w-full sm:w-auto items-center gap-2">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full sm:w-[200px]"
              />
            </div>
            <Button variant="outline" size="icon">
              <ListFilter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Department-wise Tab Content */}
        <TabsContent value="department" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-3">Department</div>
              <div className="col-span-2 text-center">Placed / Total</div>
              <div className="col-span-2 text-center">Placement %</div>
              <div className="col-span-2 text-center">Avg. Package</div>
              <div className="col-span-2 text-center">Highest Package</div>
              <div className="col-span-1 text-center">Companies</div>
            </div>
            <div className="divide-y">
              {departmentStats.map((dept, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 p-3 text-sm items-center"
                >
                  <div className="col-span-3 font-medium">
                    {dept.department}
                  </div>
                  <div className="col-span-2 text-center">
                    {dept.placed} / {dept.total}
                  </div>
                  <div className="col-span-2 text-center flex items-center justify-center">
                    {dept.placementRate.toFixed(1)}%
                    <span className="ml-2">{getTrendIcon(dept.trend)}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    ₹{dept.avgPackage}L
                  </div>
                  <div className="col-span-2 text-center">
                    ₹{dept.highestPackage}L
                  </div>
                  <div className="col-span-1 text-center">{dept.companies}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing 5 out of 5 departments
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Company-wise Tab Content */}
        <TabsContent value="company" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-4">Company</div>
              <div className="col-span-2 text-center">Students Placed</div>
              <div className="col-span-3 text-center">Average Package</div>
              <div className="col-span-3 text-center">Highest Package</div>
            </div>
            <div className="divide-y">
              {topCompanies.map((company, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 p-3 text-sm items-center"
                >
                  <div className="col-span-4 font-medium">{company.name}</div>
                  <div className="col-span-2 text-center">
                    {company.students}
                  </div>
                  <div className="col-span-3 text-center flex items-center justify-center">
                    ₹{company.avgPackage}L
                    <span className="ml-2">{getTrendIcon(company.trend)}</span>
                  </div>
                  <div className="col-span-3 text-center">
                    ₹{company.highestPackage}L
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing 5 out of 95 companies
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Trends Tab Content */}
        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Yearly Placement Trends</CardTitle>
                <CardDescription>
                  Last 5 years placement statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center text-muted-foreground">
                    <LineChart className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                    <p>Placement Trend Chart (Will be rendered here)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Package Trends</CardTitle>
                <CardDescription>
                  Average and highest packages over the years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                    <p>Package Trend Chart (Will be rendered here)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-10 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-2">Year</div>
              <div className="col-span-3 text-center">Students Placed</div>
              <div className="col-span-3 text-center">Average Package</div>
              <div className="col-span-2 text-center">Companies Visited</div>
            </div>
            <div className="divide-y">
              {yearlyTrends.map((year, index) => (
                <div
                  key={index}
                  className="grid grid-cols-10 p-3 text-sm items-center"
                >
                  <div className="col-span-2 font-medium">{year.year}</div>
                  <div className="col-span-3 text-center">{year.placed}</div>
                  <div className="col-span-3 text-center">
                    ₹{year.avgPackage}L
                  </div>
                  <div className="col-span-2 text-center">{year.companies}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Skills Tab Content */}
        <TabsContent value="skills" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
                <CardDescription>
                  Placement distribution by skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center text-muted-foreground">
                    <PieChart className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                    <p>Skills Distribution Chart (Will be rendered here)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skills Demand</CardTitle>
                <CardDescription>
                  Most in-demand skills in current market
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {skillStats.slice(0, 5).map((skill, index) => (
                    <div
                      key={index}
                      className="p-3 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-xs text-muted-foreground">
                          Avg Package: ₹{skill.avgPackage}L
                        </div>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            skill.demand === "high"
                              ? "bg-green-100 text-green-700"
                              : skill.demand === "medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {skill.demand === "high"
                            ? "High Demand"
                            : skill.demand === "medium"
                            ? "Medium Demand"
                            : "Low Demand"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t p-3">
                <Button variant="ghost" size="sm">
                  View All Skills
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-10 bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-4">Skill</div>
              <div className="col-span-2 text-center">Placements</div>
              <div className="col-span-2 text-center">Avg. Package</div>
              <div className="col-span-2 text-center">Market Demand</div>
            </div>
            <div className="divide-y">
              {skillStats.map((skill, index) => (
                <div
                  key={index}
                  className="grid grid-cols-10 p-3 text-sm items-center"
                >
                  <div className="col-span-4 font-medium">{skill.skill}</div>
                  <div className="col-span-2 text-center">
                    {skill.placements}
                  </div>
                  <div className="col-span-2 text-center">
                    ₹{skill.avgPackage}L
                  </div>
                  <div className="col-span-2 text-center">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        skill.demand === "high"
                          ? "bg-green-100 text-green-700"
                          : skill.demand === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {skill.demand === "high"
                        ? "High"
                        : skill.demand === "medium"
                        ? "Medium"
                        : "Low"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-4" />

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Last Updated: June 10, 2024 at 10:23 AM
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1.5"
        >
          <FileSpreadsheet className="h-4 w-4" />
          Download Full Report
        </Button>
      </div>
    </div>
  );
}
