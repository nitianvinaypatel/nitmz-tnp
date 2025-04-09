import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  Award,
  Edit,
  Trash2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
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

// Import the mock data from the parent directory
import { studentsData } from "../page";

// Function to get placement status badge styling (copied from the parent file)
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Placed":
      return "bg-green-500/10 text-green-500";
    case "Internship":
      return "bg-blue-500/10 text-blue-500";
    case "Searching":
      return "bg-yellow-500/10 text-yellow-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  // Find the student by ID from the mock data
  const studentId = parseInt(params.id);
  const student = studentsData.find((s) => s.id === studentId);

  // If student not found, show error
  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Student Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The student profile you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/dashboard/students">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Students
          </Link>
        </Button>
      </div>
    );
  }

  // Education history (mock data)
  const educationHistory = [
    {
      degree: "B.Tech",
      institution: "National Institute of Technology, Mizoram",
      field: student.department,
      duration: student.batch,
      cgpa: student.cgpa,
    },
    {
      degree: "High School",
      institution: "Delhi Public School",
      field: "Science with Computer Science",
      duration: "2017-2019",
      cgpa: 9.4,
    },
    {
      degree: "Secondary School",
      institution: "Delhi Public School",
      field: "General",
      duration: "2016-2017",
      cgpa: 9.2,
    },
  ];

  // Certificates (mock data)
  const certificates = [
    {
      name: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "June 2022",
      credentialID: "CERT-123456",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "January 2023",
      credentialID: "CERT-789012",
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "August 2022",
      credentialID: "CERT-345678",
    },
  ];

  // Projects (mock data)
  const projects = [
    {
      title: "Smart Attendance System",
      description: "Facial recognition based attendance system for classrooms",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flutter"],
      role: "Project Lead & ML Engineer",
      year: "2022",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      role: "Full Stack Developer",
      year: "2023",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with back button and actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/students">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Students
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-yellow-500 hover:text-yellow-700 flex items-center gap-1"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Export CV
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar - Profile summary */}
        <div className="space-y-6">
          {/* Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-muted overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/70">
                    {student.name.charAt(0)}
                  </div>
                </div>

                <h1 className="text-2xl font-bold">{student.name}</h1>
                <p className="text-sm text-muted-foreground">{student.roll}</p>

                <div className="mt-3">
                  <span
                    className={`${getStatusBadge(
                      student.placementStatus
                    )} text-xs font-medium px-3 py-1.5 rounded-full`}
                  >
                    {student.placementStatus}
                  </span>
                </div>

                {student.company && (
                  <div className="mt-2 text-sm">
                    <span className="text-primary font-medium">
                      {student.company}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{student.package}</span>
                  </div>
                )}

                {/* Contact info */}
                <div className="w-full mt-6 border-t pt-6 space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{student.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{student.address}</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="w-full mt-6 flex items-center justify-center gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={student.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={student.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={student.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {student.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content area */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="placement">Placement</TabsTrigger>
            </TabsList>

            {/* Education Tab */}
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Academic History</CardTitle>
                  <CardDescription>
                    Education qualifications and academic performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {educationHistory.map((education, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        {index < educationHistory.length - 1 && (
                          <div className="w-0.5 flex-1 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className="font-medium text-base">
                          {education.degree} in {education.field}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {education.institution}
                        </p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          <span>{education.duration}</span>
                          <span className="mx-2">•</span>
                          <Award className="h-3.5 w-3.5 mr-1.5" />
                          <span>CGPA: {education.cgpa}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Certificates & Achievements</CardTitle>
                  <CardDescription>
                    Professional certifications and courses completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{cert.name}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          <span>{cert.date}</span>
                          <span className="mx-2">•</span>
                          <span>ID: {cert.credentialID}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View All Certificates
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Projects & Portfolio</CardTitle>
                  <CardDescription>
                    Academic and personal projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{project.title}</h3>
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.description}
                        </p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Role:</span>{" "}
                          {project.role}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                    asChild
                  >
                    <Link
                      href={student.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View GitHub Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Placement Tab */}
            <TabsContent value="placement">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Details</CardTitle>
                  <CardDescription>
                    {student.placementStatus === "Placed" ||
                    student.placementStatus === "Internship"
                      ? "Current placement information"
                      : "Placement preferences and status"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {student.placementStatus === "Placed" ||
                  student.placementStatus === "Internship" ? (
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-background rounded-md flex items-center justify-center border mr-4">
                            <Briefcase className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{student.company}</h3>
                            <p className="text-sm text-muted-foreground">
                              {student.placementStatus === "Placed"
                                ? "Full-time Position"
                                : "Internship"}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Package
                            </h4>
                            <p className="text-sm">{student.package}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Joining Date
                            </h4>
                            <p className="text-sm">
                              {student.placementStatus === "Placed"
                                ? "June 2023"
                                : "May 2023"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Position
                            </h4>
                            <p className="text-sm">
                              {student.department.includes("Computer")
                                ? "Software Engineer"
                                : student.department.includes("Electronics")
                                ? "Hardware Engineer"
                                : student.department.includes("Mechanical")
                                ? "Design Engineer"
                                : student.department.includes("Electrical")
                                ? "Electrical Engineer"
                                : "Graduate Engineer Trainee"}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">
                              Location
                            </h4>
                            <p className="text-sm">Bangalore, India</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h3 className="font-medium mb-2">Placement Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border rounded-md p-3">
                            <h4 className="text-sm font-medium mb-1">
                              Round 1
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Online Assessment
                            </p>
                          </div>
                          <div className="border rounded-md p-3">
                            <h4 className="text-sm font-medium mb-1">
                              Round 2
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Technical Interview
                            </p>
                          </div>
                          <div className="border rounded-md p-3">
                            <h4 className="text-sm font-medium mb-1">
                              Round 3
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              HR Interview
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="h-16 w-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-8 w-8 text-yellow-500" />
                      </div>
                      <h3 className="font-medium text-lg mb-2">
                        Not Placed Yet
                      </h3>
                      <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
                        This student is currently seeking placement
                        opportunities matching their skills and profile.
                      </p>
                      <Button size="sm">Recommend for Job</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
