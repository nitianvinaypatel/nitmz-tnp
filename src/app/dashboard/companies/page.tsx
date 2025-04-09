import React from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Building,
  MapPin,
  Briefcase,
  ExternalLink,
  Download,
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

// Mock company data
export const companiesData = [
  {
    id: 1,
    name: "Amazon",
    logo: "/company-logos/amazon.png",
    industry: "E-commerce, Cloud Computing",
    headquarters: "Seattle, Washington, USA",
    founded: "1994",
    description:
      "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.",
    hiringRoles: [
      "Software Engineer",
      "Product Manager",
      "Data Scientist",
      "Machine Learning Engineer",
    ],
    locations: ["Bangalore", "Hyderabad", "Chennai", "Mumbai"],
    websiteUrl: "https://amazon.jobs",
    openPositions: 12,
    hiringTier: "Tier 1",
    pastRecruitment: {
      totalHired: 24,
      avgPackage: "₹18 LPA",
      highestOffer: "₹42 LPA",
      years: [2023, 2022, 2021],
    },
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/company-logos/microsoft.png",
    industry: "Software, Cloud Computing, AI",
    headquarters: "Redmond, Washington, USA",
    founded: "1975",
    description:
      "Microsoft is a technology company that enables digital transformation for the era of an intelligent cloud and an intelligent edge.",
    hiringRoles: [
      "Software Engineer",
      "Program Manager",
      "Data Engineer",
      "Cloud Solutions Architect",
    ],
    locations: ["Hyderabad", "Bangalore", "Noida"],
    websiteUrl: "https://careers.microsoft.com",
    openPositions: 8,
    hiringTier: "Tier 1",
    pastRecruitment: {
      totalHired: 18,
      avgPackage: "₹20 LPA",
      highestOffer: "₹45 LPA",
      years: [2023, 2022, 2021],
    },
  },
  {
    id: 3,
    name: "Google",
    logo: "/company-logos/google.png",
    industry: "Internet, Cloud, AI",
    headquarters: "Mountain View, California, USA",
    founded: "1998",
    description:
      "Google's mission is to organize the world's information and make it universally accessible and useful.",
    hiringRoles: [
      "Software Engineer",
      "UX Designer",
      "Product Manager",
      "Research Scientist",
    ],
    locations: ["Bangalore", "Hyderabad", "Gurugram"],
    websiteUrl: "https://careers.google.com",
    openPositions: 6,
    hiringTier: "Tier 1",
    pastRecruitment: {
      totalHired: 14,
      avgPackage: "₹24 LPA",
      highestOffer: "₹54 LPA",
      years: [2023, 2022, 2021],
    },
  },
  {
    id: 4,
    name: "Adobe",
    logo: "/company-logos/adobe.png",
    industry: "Software, Digital Media",
    headquarters: "San Jose, California, USA",
    founded: "1982",
    description:
      "Adobe is changing the world through digital experiences, helping customers create, deliver and optimize content and applications.",
    hiringRoles: [
      "Software Engineer",
      "UX Designer",
      "Product Manager",
      "Data Analyst",
    ],
    locations: ["Noida", "Bangalore", "Hyderabad"],
    websiteUrl: "https://adobe.com/careers",
    openPositions: 5,
    hiringTier: "Tier 1",
    pastRecruitment: {
      totalHired: 12,
      avgPackage: "₹16 LPA",
      highestOffer: "₹32 LPA",
      years: [2023, 2022],
    },
  },
  {
    id: 5,
    name: "Flipkart",
    logo: "/company-logos/flipkart.png",
    industry: "E-commerce",
    headquarters: "Bangalore, India",
    founded: "2007",
    description:
      "Flipkart is India's leading e-commerce marketplace with over 100 million registered users.",
    hiringRoles: [
      "Software Engineer",
      "Data Scientist",
      "Business Analyst",
      "Operations Manager",
    ],
    locations: ["Bangalore", "Mumbai", "Delhi"],
    websiteUrl: "https://www.flipkartcareers.com",
    openPositions: 10,
    hiringTier: "Tier 1",
    pastRecruitment: {
      totalHired: 16,
      avgPackage: "₹18 LPA",
      highestOffer: "₹28 LPA",
      years: [2023, 2022, 2021],
    },
  },
  {
    id: 6,
    name: "Infosys",
    logo: "/company-logos/infosys.png",
    industry: "IT Services, Consulting",
    headquarters: "Bangalore, India",
    founded: "1981",
    description:
      "Infosys is a global leader in next-generation digital services and consulting.",
    hiringRoles: [
      "Systems Engineer",
      "Technology Analyst",
      "Consultant",
      "Project Manager",
    ],
    locations: ["Bangalore", "Pune", "Chennai", "Hyderabad", "Mysore"],
    websiteUrl: "https://www.infosys.com/careers",
    openPositions: 40,
    hiringTier: "Tier 2",
    pastRecruitment: {
      totalHired: 120,
      avgPackage: "₹6.5 LPA",
      highestOffer: "₹12 LPA",
      years: [2023, 2022, 2021, 2020, 2019],
    },
  },
  {
    id: 7,
    name: "TCS",
    logo: "/company-logos/tcs.png",
    industry: "IT Services, Consulting",
    headquarters: "Mumbai, India",
    founded: "1968",
    description:
      "Tata Consultancy Services is an Indian multinational information technology services and consulting company.",
    hiringRoles: [
      "Assistant System Engineer",
      "Digital Specialist",
      "IT Analyst",
      "Developer",
    ],
    locations: [
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Kolkata",
    ],
    websiteUrl: "https://www.tcs.com/careers",
    openPositions: 50,
    hiringTier: "Tier 2",
    pastRecruitment: {
      totalHired: 145,
      avgPackage: "₹7 LPA",
      highestOffer: "₹14 LPA",
      years: [2023, 2022, 2021, 2020, 2019],
    },
  },
  {
    id: 8,
    name: "Accenture",
    logo: "/company-logos/accenture.png",
    industry: "IT Services, Consulting",
    headquarters: "Dublin, Ireland",
    founded: "1989",
    description:
      "Accenture is a global professional services company with leading capabilities in digital, cloud and security.",
    hiringRoles: [
      "Associate Software Engineer",
      "Analyst",
      "Consultant",
      "Developer",
    ],
    locations: ["Bangalore", "Mumbai", "Hyderabad", "Pune", "Chennai"],
    websiteUrl: "https://www.accenture.com/in-en/careers",
    openPositions: 35,
    hiringTier: "Tier 2",
    pastRecruitment: {
      totalHired: 85,
      avgPackage: "₹6.8 LPA",
      highestOffer: "₹13 LPA",
      years: [2023, 2022, 2021, 2020],
    },
  },
];

// Industry filter options
const industries = [
  "All Industries",
  "E-commerce",
  "Software",
  "IT Services",
  "Cloud Computing",
  "Digital Media",
  "Consulting",
  "AI",
];

// Location filter options
const locations = [
  "All Locations",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Chennai",
  "Pune",
  "Delhi",
  "Noida",
  "Gurugram",
];

// Function to get hiring tier badge styling
const getTierBadge = (tier: string) => {
  switch (tier) {
    case "Tier 1":
      return "bg-primary/10 text-primary";
    case "Tier 2":
      return "bg-blue-500/10 text-blue-500";
    case "Tier 3":
      return "bg-yellow-500/10 text-yellow-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Partner Companies</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export List
          </Button>
          <Button className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by company name, industry..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                {industries.map((industry, index) => (
                  <option
                    key={index}
                    value={industry.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {industry}
                  </option>
                ))}
              </select>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                {locations.map((location, index) => (
                  <option
                    key={index}
                    value={location.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {location}
                  </option>
                ))}
              </select>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                <option value="all">All Tiers</option>
                <option value="tier-1">Tier 1</option>
                <option value="tier-2">Tier 2</option>
                <option value="tier-3">Tier 3</option>
              </select>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company View Tabs */}
      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="grid w-full max-w-[200px] grid-cols-2 mb-4">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>

        {/* Grid View */}
        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {companiesData.map((company) => (
              <Card
                key={company.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`${getTierBadge(
                        company.hiringTier
                      )} text-xs font-medium px-2.5 py-1 rounded`}
                    >
                      {company.hiringTier}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {company.industry}
                  </p>
                </CardHeader>
                <CardContent className="px-4 py-2">
                  <div className="text-sm text-muted-foreground flex flex-col gap-2">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">
                        {company.locations.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Briefcase className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">
                        {company.openPositions} open positions
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">
                      Hiring for
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {company.hiringRoles.slice(0, 3).map((role, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs"
                        >
                          {role}
                        </span>
                      ))}
                      {company.hiringRoles.length > 3 && (
                        <span className="bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded text-xs">
                          +{company.hiringRoles.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-muted-foreground">Avg. Package</p>
                        <p className="font-medium">
                          {company.pastRecruitment.avgPackage}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Highest Offer</p>
                        <p className="font-medium">
                          {company.pastRecruitment.highestOffer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-2 flex justify-between">
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Website
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/dashboard/companies/${company.id}`}>
                      View Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Table View */}
        <TabsContent value="table">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Company
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Industry
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Locations
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Open Positions
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Tier
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Avg. Package
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {companiesData.map((company) => (
                      <tr
                        key={company.id}
                        className="border-b hover:bg-muted/50"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                              <Building className="h-4 w-4" />
                            </div>
                            <span className="font-medium">{company.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {company.industry}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {company.locations.slice(0, 2).join(", ")}
                          {company.locations.length > 2
                            ? ` +${company.locations.length - 2}`
                            : ""}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {company.openPositions}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`${getTierBadge(
                              company.hiringTier
                            )} text-xs font-medium px-2.5 py-1 rounded`}
                          >
                            {company.hiringTier}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {company.pastRecruitment.avgPackage}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-8 px-2"
                            >
                              <Link
                                href={company.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                Website
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="h-8 px-2"
                            >
                              <Link href={`/dashboard/companies/${company.id}`}>
                                Details
                              </Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">8</span> of{" "}
          <span className="font-medium">20</span> results
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
