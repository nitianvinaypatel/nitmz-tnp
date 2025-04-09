import React from "react";
import {
  Search,
  FileText,
  Video,
  Link as LinkIcon,
  Download,
  BookOpen,
  Clock,
  Upload,
  Book,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock resources data
const resourcesData = [
  {
    id: 1,
    title: "Complete Resume Writing Guide",
    description:
      "Learn how to craft an effective resume that showcases your skills and experiences.",
    type: "document",
    fileType: "PDF",
    size: "2.4 MB",
    uploadDate: "May 10, 2024",
    author: "T&P Cell",
    downloadLink: "#",
    category: "Resume Building",
    featured: true,
  },
  {
    id: 2,
    title: "Technical Interview Preparation",
    description:
      "A comprehensive guide to technical interviews with practice problems and solutions.",
    type: "document",
    fileType: "PDF",
    size: "5.1 MB",
    uploadDate: "May 8, 2024",
    author: "CS Department",
    downloadLink: "#",
    category: "Interview Preparation",
    featured: true,
  },
  {
    id: 3,
    title: "Group Discussion Strategies",
    description:
      "Tips and techniques to excel in group discussions during campus placements.",
    type: "document",
    fileType: "PDF",
    size: "1.8 MB",
    uploadDate: "May 5, 2024",
    author: "T&P Cell",
    downloadLink: "#",
    category: "Interview Preparation",
    featured: false,
  },
  {
    id: 4,
    title: "Java Programming Essentials",
    description:
      "Core Java concepts and coding examples for technical interviews.",
    type: "document",
    fileType: "PDF",
    size: "3.5 MB",
    uploadDate: "April 28, 2024",
    author: "CS Department",
    downloadLink: "#",
    category: "Technical Skills",
    featured: false,
  },
  {
    id: 5,
    title: "LinkedIn Profile Optimization",
    description:
      "How to create and optimize your LinkedIn profile for job searching.",
    type: "video",
    duration: "45 min",
    uploadDate: "May 12, 2024",
    author: "T&P Cell",
    videoLink: "#",
    category: "Career Development",
    featured: true,
  },
  {
    id: 6,
    title: "Mock Interview Analysis",
    description:
      "Video recording of mock interviews with feedback and improvement suggestions.",
    type: "video",
    duration: "1hr 20min",
    uploadDate: "May 7, 2024",
    author: "T&P Cell",
    videoLink: "#",
    category: "Interview Preparation",
    featured: false,
  },
  {
    id: 7,
    title: "Data Structures and Algorithms",
    description:
      "Comprehensive DSA course covering all major topics for technical interviews.",
    type: "course",
    lessons: "42 lessons",
    duration: "20 hours",
    uploadDate: "April 20, 2024",
    author: "CS Department",
    courseLink: "#",
    category: "Technical Skills",
    featured: true,
  },
  {
    id: 8,
    title: "Company Research Strategy",
    description:
      "How to research companies before interviews to make a great impression.",
    type: "document",
    fileType: "PDF",
    size: "1.2 MB",
    uploadDate: "May 4, 2024",
    author: "T&P Cell",
    downloadLink: "#",
    category: "Interview Preparation",
    featured: false,
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Resume Building",
  "Interview Preparation",
  "Technical Skills",
  "Career Development",
  "Soft Skills",
];

// Helper to get resource type icon
const getResourceIcon = (type: string) => {
  switch (type) {
    case "document":
      return <FileText className="h-10 w-10 text-blue-500" />;
    case "video":
      return <Video className="h-10 w-10 text-red-500" />;
    case "course":
      return <BookOpen className="h-10 w-10 text-green-500" />;
    case "link":
      return <LinkIcon className="h-10 w-10 text-purple-500" />;
    default:
      return <FileText className="h-10 w-10 text-gray-500" />;
  }
};

// Helper to get action button based on resource type
const getActionButton = (resource: (typeof resourcesData)[0]) => {
  switch (resource.type) {
    case "document":
      return (
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
      );
    case "video":
      return (
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Video className="h-4 w-4" />
          Watch
        </Button>
      );
    case "course":
      return (
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Book className="h-4 w-4" />
          View Course
        </Button>
      );
    case "link":
      return (
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <LinkIcon className="h-4 w-4" />
          Visit
        </Button>
      );
    default:
      return (
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
      );
  }
};

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Placement Resources</h1>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Resource
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* Filters sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-10" />
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
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category.toLowerCase().replace(" ", "-")}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Resource Type</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="all">All Types</option>
                    <option value="document">Documents</option>
                    <option value="video">Videos</option>
                    <option value="course">Courses</option>
                    <option value="link">Links</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Author</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="all">All Authors</option>
                    <option value="tp-cell">T&P Cell</option>
                    <option value="cs-department">CS Department</option>
                    <option value="guest-lecturer">Guest Lecturers</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <label className="text-sm font-medium cursor-pointer">
                    <input type="checkbox" className="mr-2" />
                    Featured resources only
                  </label>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Resources List */}
        <div className="flex-1">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {resourcesData.map((resource) => (
                <Card
                  key={resource.id}
                  className={`hover:border-primary/50 transition-colors ${
                    resource.featured ? "border-primary/30" : ""
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent rounded-md flex items-center justify-center">
                        {getResourceIcon(resource.type)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-lg">
                            {resource.title}
                          </h3>
                          {resource.featured && (
                            <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs mr-2">
                            {resource.category}
                          </span>
                          <span>By {resource.author}</span>
                        </div>

                        <p className="text-sm mt-3">{resource.description}</p>

                        <div className="flex items-center justify-between mt-4 pt-3 border-t">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              {resource.type === "document" && (
                                <>
                                  <FileText className="h-4 w-4 mr-1.5" />
                                  {resource.fileType} • {resource.size}
                                </>
                              )}
                              {resource.type === "video" && (
                                <>
                                  <Clock className="h-4 w-4 mr-1.5" />
                                  {resource.duration}
                                </>
                              )}
                              {resource.type === "course" && (
                                <>
                                  <Book className="h-4 w-4 mr-1.5" />
                                  {resource.lessons} • {resource.duration}
                                </>
                              )}
                            </div>
                            <div>Added {resource.uploadDate}</div>
                          </div>

                          <div className="flex gap-2">
                            {getActionButton(resource)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              {resourcesData
                .filter((r) => r.type === "document")
                .map((resource) => (
                  <Card
                    key={resource.id}
                    className={`hover:border-primary/50 transition-colors ${
                      resource.featured ? "border-primary/30" : ""
                    }`}
                  >
                    <CardContent className="p-5">
                      {/* Same card content as above, but filtered for documents */}
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent rounded-md flex items-center justify-center">
                          {getResourceIcon(resource.type)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-lg">
                              {resource.title}
                            </h3>
                            {resource.featured && (
                              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                          </div>

                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs mr-2">
                              {resource.category}
                            </span>
                            <span>By {resource.author}</span>
                          </div>

                          <p className="text-sm mt-3">{resource.description}</p>

                          <div className="flex items-center justify-between mt-4 pt-3 border-t">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-1.5" />
                                {resource.fileType} • {resource.size}
                              </div>
                              <div>Added {resource.uploadDate}</div>
                            </div>

                            <div className="flex gap-2">
                              {getActionButton(resource)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="videos" className="space-y-4">
              {resourcesData
                .filter((r) => r.type === "video")
                .map((resource) => (
                  <Card
                    key={resource.id}
                    className={`hover:border-primary/50 transition-colors ${
                      resource.featured ? "border-primary/30" : ""
                    }`}
                  >
                    {/* Video cards content */}
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent rounded-md flex items-center justify-center">
                          {getResourceIcon(resource.type)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-lg">
                              {resource.title}
                            </h3>
                            {resource.featured && (
                              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                          </div>

                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs mr-2">
                              {resource.category}
                            </span>
                            <span>By {resource.author}</span>
                          </div>

                          <p className="text-sm mt-3">{resource.description}</p>

                          <div className="flex items-center justify-between mt-4 pt-3 border-t">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1.5" />
                                {resource.duration}
                              </div>
                              <div>Added {resource.uploadDate}</div>
                            </div>

                            <div className="flex gap-2">
                              {getActionButton(resource)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="courses" className="space-y-4">
              {resourcesData
                .filter((r) => r.type === "course")
                .map((resource) => (
                  <Card
                    key={resource.id}
                    className={`hover:border-primary/50 transition-colors ${
                      resource.featured ? "border-primary/30" : ""
                    }`}
                  >
                    {/* Course cards content */}
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent rounded-md flex items-center justify-center">
                          {getResourceIcon(resource.type)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-lg">
                              {resource.title}
                            </h3>
                            {resource.featured && (
                              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                          </div>

                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs mr-2">
                              {resource.category}
                            </span>
                            <span>By {resource.author}</span>
                          </div>

                          <p className="text-sm mt-3">{resource.description}</p>

                          <div className="flex items-center justify-between mt-4 pt-3 border-t">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Book className="h-4 w-4 mr-1.5" />
                                {resource.lessons} • {resource.duration}
                              </div>
                              <div>Added {resource.uploadDate}</div>
                            </div>

                            <div className="flex gap-2">
                              {getActionButton(resource)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
