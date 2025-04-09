import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Building,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Share2,
  BookmarkPlus,
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

// Mock job data
const jobsData = [
  {
    id: 1,
    title: "Software Development Engineer",
    company: "Amazon",
    logo: "/company-logos/amazon.png",
    location: "Bangalore, India",
    type: "Full-time",
    category: "Engineering",
    postedDate: "May 15, 2024",
    applicationDeadline: "June 10, 2024",
    startDate: "July 2024",
    salary: "₹16-20 LPA",
    stipend: "",
    duration: "",
    description:
      "We are looking for passionate Software Engineers to join our team to build innovative solutions that impact millions of customers worldwide. As an SDE at Amazon, you'll work on challenging problems and help shape the future of e-commerce technology.",
    responsibilities: [
      "Design, develop, and maintain scalable software solutions",
      "Write clean, efficient, and well-documented code",
      "Participate in code reviews and contribute to engineering best practices",
      "Troubleshoot and debug applications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
    ],
    requirements: [
      "B.Tech/M.Tech in Computer Science, IT or related field",
      "Strong problem-solving skills and coding abilities in at least one programming language",
      "Experience with data structures, algorithms, and software design",
      "Familiarity with web technologies and databases",
      "Good communication and teamwork skills",
    ],
    preferredQualifications: [
      "Experience with AWS services",
      "Knowledge of microservices architecture",
      "Experience with CI/CD pipelines",
      "Contributions to open-source projects",
    ],
    skills: ["Java", "AWS", "Microservices", "Data Structures", "Algorithms"],
    applicationProcess: [
      "Resume and cover letter review",
      "Online coding assessment",
      "Technical phone interview",
      "Virtual on-site interviews (3-4 rounds)",
      "Final evaluation and offer",
    ],
    benefits: [
      "Competitive salary and stock options",
      "Health insurance coverage",
      "Life insurance",
      "Retirement planning",
      "Paid time off",
      "Parental leave",
      "Learning and development budget",
    ],
    perks: [],
    aboutCompany:
      "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives.",
    companyWebsite: "https://amazon.jobs",
    eligibility: {
      degrees: ["B.Tech", "M.Tech", "MCA"],
      cgpaCutoff: 7.5,
      backlogPolicy: "No active backlogs",
      departments: [
        "Computer Science",
        "Information Technology",
        "Electronics",
      ],
      otherCriteria: "Students graduating in 2024 are eligible to apply",
    },
    totalOpenings: 50,
    applicantsCount: 145,
    applicationStatus: "Open",
  },
];

// Mock job with ID 2 (for internships)
const internshipsData = [
  {
    id: 2,
    title: "Data Science Intern",
    company: "Microsoft",
    logo: "/company-logos/microsoft.png",
    location: "Hyderabad, India",
    type: "Internship",
    category: "Data Science",
    duration: "6 months",
    postedDate: "May 16, 2024",
    applicationDeadline: "June 5, 2024",
    startDate: "July 2024",
    stipend: "₹60,000/month",
    salary: "",
    description:
      "Microsoft Research India is seeking Data Science interns to work on real-world machine learning projects. You'll collaborate with world-class researchers and engineers to develop and deploy ML models that solve challenging business problems.",
    responsibilities: [
      "Develop and implement machine learning models",
      "Process and analyze large datasets",
      "Work on end-to-end ML pipelines",
      "Assist in designing experiments and evaluating results",
      "Present findings and contribute to technical documentation",
    ],
    requirements: [
      "Currently pursuing B.Tech/M.Tech in CS, IT, or related field",
      "Strong programming skills in Python",
      "Knowledge of machine learning algorithms and frameworks",
      "Experience with data manipulation and analysis",
      "Good mathematical and statistical foundations",
    ],
    preferredQualifications: [
      "Published research papers or competition experience",
      "Experience with deep learning frameworks",
      "Knowledge of cloud computing platforms",
      "Contributions to open-source ML projects",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Data Analysis",
    ],
    applicationProcess: [
      "Resume and cover letter review",
      "Technical assessment",
      "Two rounds of technical interviews",
      "Final evaluation and offer",
    ],
    perks: [
      "Competitive stipend",
      "Housing allowance for outstation candidates",
      "Mentorship from industry experts",
      "Access to Microsoft's learning resources",
      "Networking opportunities",
      "Possibility of pre-placement offer",
    ],
    benefits: [],
    aboutCompany:
      "Microsoft is a technology company that enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more.",
    companyWebsite: "https://careers.microsoft.com",
    eligibility: {
      degrees: ["B.Tech", "M.Tech", "MSc", "PhD"],
      cgpaCutoff: 8.0,
      backlogPolicy: "No active backlogs",
      departments: [
        "Computer Science",
        "Data Science",
        "Mathematics",
        "Statistics",
      ],
      otherCriteria:
        "Students in their pre-final or final year are eligible to apply",
    },
    totalOpenings: 15,
    applicantsCount: 98,
    applicationStatus: "Open",
  },
];

// Combine both datasets
const allJobsData = [...jobsData, ...internshipsData];

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // Get job ID from params
  const jobId = parseInt(params.id);

  // Find the job by ID
  const job = allJobsData.find((job) => job.id === jobId);

  // If job not found, show error
  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The job or internship you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/dashboard/jobs">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </Button>
      </div>
    );
  }

  // Check if it's an internship or full-time job
  const isInternship = job.type === "Internship";

  return (
    <div className="space-y-6">
      {/* Header with back button and actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/jobs">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Jobs
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
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <BookmarkPlus className="h-4 w-4" />
            Save
          </Button>
          <Button size="sm">Apply Now</Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Overview */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <div className="flex items-center text-lg mt-1">
                    <span className="font-medium">{job.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1.5" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1.5" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      Apply by {job.applicationDeadline}
                    </div>
                    {isInternship ? (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5" />
                        {job.duration}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>

              {/* Description Tab */}
              <TabsContent value="description">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                    <CardDescription>
                      {isInternship
                        ? "Internship overview and details"
                        : "Role overview and responsibilities"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm">{job.description}</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium mb-2">Key Responsibilities</h3>
                      <ul className="list-disc pl-5 space-y-1.5">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {isInternship && job.perks && job.perks.length > 0 && (
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">Internship Perks</h3>
                        <ul className="list-disc pl-5 space-y-1.5">
                          {job.perks.map((perk: string, idx: number) => (
                            <li key={idx} className="text-sm">
                              {perk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!isInternship &&
                      job.benefits &&
                      job.benefits.length > 0 && (
                        <div className="mt-6">
                          <h3 className="font-medium mb-2">Benefits & Perks</h3>
                          <ul className="list-disc pl-5 space-y-1.5">
                            {job.benefits.map(
                              (benefit: string, idx: number) => (
                                <li key={idx} className="text-sm">
                                  {benefit}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Requirements Tab */}
              <TabsContent value="requirements">
                <Card>
                  <CardHeader>
                    <CardTitle>Requirements & Eligibility</CardTitle>
                    <CardDescription>
                      Qualifications and eligibility criteria
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Basic Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1.5">
                        {job.requirements.map((requirement, idx) => (
                          <li key={idx} className="text-sm">
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">
                        Preferred Qualifications
                      </h3>
                      <ul className="list-disc pl-5 space-y-1.5 text-sm">
                        {job.preferredQualifications.map(
                          (qualification, idx) => (
                            <li key={idx} className="text-sm">
                              {qualification}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Eligibility Criteria</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-xs mb-1">Degrees</p>
                          <p>{job.eligibility.degrees.join(", ")}</p>
                        </div>
                        <div>
                          <p className="font-medium text-xs mb-1">
                            CGPA Cutoff
                          </p>
                          <p>{job.eligibility.cgpaCutoff}+</p>
                        </div>
                        <div>
                          <p className="font-medium text-xs mb-1">
                            Departments
                          </p>
                          <p>{job.eligibility.departments.join(", ")}</p>
                        </div>
                        <div>
                          <p className="font-medium text-xs mb-1">
                            Backlog Policy
                          </p>
                          <p>{job.eligibility.backlogPolicy}</p>
                        </div>
                      </div>
                      <p className="text-xs mt-3 text-muted-foreground">
                        {job.eligibility.otherCriteria}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Application Process</h3>
                      <div className="flex flex-col space-y-3">
                        {job.applicationProcess.map((step, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <span className="text-sm font-medium text-primary">
                                {idx + 1}
                              </span>
                            </div>
                            <div className="pt-1.5">
                              <p className="text-sm">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Company Tab */}
              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle>About {job.company}</CardTitle>
                    <CardDescription>
                      Company information and culture
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{job.aboutCompany}</p>

                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={job.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Company Website
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar - Application and Stats */}
        <div className="space-y-6">
          {/* Apply Now Card */}
          <Card>
            <CardHeader>
              <CardTitle>Application</CardTitle>
              <CardDescription>
                Apply for this {isInternship ? "internship" : "job"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-sm">Status</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-500">
                    {job.applicationStatus}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Deadline</p>
                    <p className="font-medium">{job.applicationDeadline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Start Date</p>
                    <p className="font-medium">{job.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Total Openings
                    </p>
                    <p className="font-medium">{job.totalOpenings} positions</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Total Applicants
                    </p>
                    <p className="font-medium">{job.applicantsCount}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-sm mb-2">Compensation</h3>
                <div className="text-primary font-bold text-xl">
                  {isInternship ? job.stipend : job.salary}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isInternship ? "Monthly stipend" : "Annual package (CTC)"}
                </p>
              </div>

              <Button className="w-full">Apply Now</Button>

              <div className="border-t pt-4">
                <h3 className="font-medium text-sm mb-2">Eligibility Check</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Required CGPA: {job.eligibility.cgpaCutoff}+</span>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Eligible Department</span>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>No Active Backlogs</span>
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Match Card */}
          <Card>
            <CardHeader>
              <CardTitle>Skills Match</CardTitle>
              <CardDescription>
                How your profile matches this role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Match</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <h4 className="text-sm font-medium mb-2">Skills Breakdown</h4>
                  <div className="space-y-2">
                    {job.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <span className="text-xs">{skill}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <span
                            className={
                              Math.random() > 0.3
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {Math.random() > 0.3 ? (
                              <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                            ) : (
                              <XCircle className="h-3.5 w-3.5 mr-1" />
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t pt-3 mt-3 text-xs text-center text-muted-foreground">
                <p>Complete your profile to improve matching</p>
              </div>
            </CardContent>
          </Card>

          {/* Similar Jobs Card */}
          <Card>
            <CardHeader>
              <CardTitle>
                Similar {isInternship ? "Internships" : "Jobs"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b pb-3 last:border-0"
                  >
                    <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                      <Building className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-1">
                        {job.title} -{" "}
                        {Math.random() > 0.5 ? "Google" : "Microsoft"}
                      </h4>
                      <div className="flex text-xs text-muted-foreground mt-0.5">
                        <span>
                          {Math.random() > 0.5 ? "Hyderabad" : "Bangalore"}
                        </span>
                        <span className="mx-1">•</span>
                        <span>
                          {isInternship ? "₹45-55K/month" : "₹14-18 LPA"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/jobs">View All Similar Jobs</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
