import React from "react";
import Link from "next/link";
import {
  Search,
  Building,
  MapPin,
  Calendar,
  Briefcase,
  BookOpen,
  PlusCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for jobs and internships
const jobsData = [
  {
    id: 1,
    title: "Software Development Engineer",
    company: "Amazon",
    logo: "/company-logos/amazon.png",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "May 15, 2024",
    deadline: "June 10, 2024",
    salary: "₹16-20 LPA",
    description:
      "We are looking for passionate Software Engineers to join our team to build innovative solutions that impact millions of customers worldwide.",
    requirements:
      "B.Tech/M.Tech in CS/IT/related field, Strong problem-solving skills",
    tags: ["Java", "AWS", "Microservices", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Google",
    logo: "/company-logos/google.png",
    location: "Gurgaon, India",
    type: "Full-time",
    postedDate: "May 18, 2024",
    deadline: "June 20, 2024",
    salary: "₹22-28 LPA",
    description:
      "Drive product strategy and execution for our consumer products. You'll work cross-functionally with engineering, design, and marketing teams.",
    requirements:
      "Bachelor's degree, 3+ years PM experience, Technical background",
    tags: ["Product Strategy", "Technical PM", "Analytics", "UX"],
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "Adobe",
    logo: "/company-logos/adobe.png",
    location: "Noida, India",
    type: "Full-time",
    postedDate: "May 20, 2024",
    deadline: "June 25, 2024",
    salary: "₹14-18 LPA",
    description:
      "Create beautiful, intuitive user experiences for Adobe products. You'll collaborate with product managers, engineers, and researchers.",
    requirements: "Degree in Design, Portfolio showcasing UX/UI projects",
    tags: ["UI Design", "User Research", "Adobe XD", "Figma"],
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "Flipkart",
    logo: "/company-logos/flipkart.png",
    location: "Bangalore, India",
    type: "Full-time",
    postedDate: "May 22, 2024",
    deadline: "June 22, 2024",
    salary: "₹18-25 LPA",
    description:
      "Design and implement scalable backend services for Flipkart's e-commerce platform. You'll work on high-throughput systems that handle millions of transactions daily.",
    requirements:
      "B.Tech/M.Tech in CS/IT, Strong programming skills in Java/Go",
    tags: ["Java", "Spring Boot", "Microservices", "Databases", "Cloud"],
  },
];

const internshipsData = [
  {
    id: 2,
    title: "Data Science Intern",
    company: "Microsoft",
    logo: "/company-logos/microsoft.png",
    location: "Hyderabad, India",
    duration: "6 months",
    postedDate: "May 16, 2024",
    deadline: "June 5, 2024",
    stipend: "₹60,000/month",
    description:
      "Microsoft Research India is seeking Data Science interns to work on real-world machine learning projects. You'll collaborate with world-class researchers and engineers.",
    requirements:
      "Currently pursuing B.Tech/M.Tech in CS, IT, or related field, Strong programming skills in Python",
    tags: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Data Analysis",
    ],
  },
  {
    id: 6,
    title: "Web Development Intern",
    company: "Flipkart",
    logo: "/company-logos/flipkart.png",
    location: "Bangalore, India",
    duration: "3 months",
    postedDate: "May 14, 2024",
    deadline: "June 10, 2024",
    stipend: "₹35,000/month",
    description:
      "Develop and maintain features for Flipkart's web platforms. You'll work on front-end implementations using modern JavaScript frameworks and collaborate with backend teams.",
    requirements:
      "Experience with JavaScript, React, and modern web technologies",
    tags: ["JavaScript", "React", "HTML/CSS", "UI/UX"],
  },
  {
    id: 7,
    title: "Software Engineering Intern",
    company: "Google",
    logo: "/company-logos/google.png",
    location: "Bangalore, India",
    duration: "6 months",
    postedDate: "May 10, 2024",
    deadline: "June 5, 2024",
    stipend: "₹60,000/month",
    description:
      "Work on real products and services used by billions of people. As an intern at Google, you'll collaborate with experienced engineers to solve challenging problems.",
    requirements:
      "Currently pursuing B.Tech/M.Tech in CS/IT, Strong coding skills",
    tags: ["Java", "Python", "Algorithms", "Data Structures"],
  },
  {
    id: 8,
    title: "Mobile App Development Intern",
    company: "Amazon",
    logo: "/company-logos/amazon.png",
    location: "Hyderabad, India",
    duration: "3 months",
    postedDate: "May 12, 2024",
    deadline: "June 8, 2024",
    stipend: "₹45,000/month",
    description:
      "Join Amazon's mobile team to develop new features for our shopping app. You'll work on both iOS and Android platforms to create seamless user experiences.",
    requirements:
      "Experience with mobile development (Android/iOS), Knowledge of Kotlin/Swift",
    tags: ["Android", "iOS", "Kotlin", "Swift", "Mobile UI"],
  },
];

// Export combined data for use in job detail page
export const allJobsData = [...jobsData, ...internshipsData];

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jobs & Internships</h1>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Post New Opening
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search and filters */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title, company..."
              className="pl-10"
            />
          </div>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                  Clear all
                </Button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All locations</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="delhi-ncr">Delhi-NCR</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Company</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All companies" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All companies</SelectItem>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="microsoft">Microsoft</SelectItem>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="adobe">Adobe</SelectItem>
                      <SelectItem value="flipkart">Flipkart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Job Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Most recent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most recent</SelectItem>
                      <SelectItem value="deadline">
                        Deadline (closest)
                      </SelectItem>
                      <SelectItem value="salary-high">
                        Salary (high to low)
                      </SelectItem>
                      <SelectItem value="salary-low">
                        Salary (low to high)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Job listings */}
        <div className="flex-1">
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="jobs">Full-time Jobs</TabsTrigger>
              <TabsTrigger value="internships">Internships</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-4">
              {jobsData.map((job) => (
                <Link href={`/dashboard/jobs/${job.id}`} key={job.id}>
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{job.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-4 w-4 mr-1.5" />
                            {job.company}
                            <div className="mx-2">•</div>
                            <MapPin className="h-4 w-4 mr-1.5" />
                            {job.location}
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">
                          {job.type}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm mt-3 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-1.5" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          <span>Apply by {job.deadline}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </TabsContent>

            <TabsContent value="internships" className="space-y-4">
              {internshipsData.map((internship) => (
                <Link
                  href={`/dashboard/jobs/${internship.id}`}
                  key={internship.id}
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">
                            {internship.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building className="h-4 w-4 mr-1.5" />
                            {internship.company}
                            <div className="mx-2">•</div>
                            <MapPin className="h-4 w-4 mr-1.5" />
                            {internship.location}
                          </div>
                        </div>
                        <div className="bg-blue-500/10 text-blue-500 text-xs font-medium px-2.5 py-1 rounded">
                          Internship
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {internship.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm mt-3 line-clamp-2">
                        {internship.description}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-1.5" />
                          <span>
                            {internship.duration} • {internship.stipend}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          <span>Apply by {internship.deadline}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
