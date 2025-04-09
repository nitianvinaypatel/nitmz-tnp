"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building,
  GraduationCap,
  CheckCircle,
  ChevronRight,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  Book,
  Briefcase,
  Globe,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState("student");

  // Form state for students
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    branch: "",
    graduationYear: "",
    password: "",
    confirmPassword: "",
  });

  // Form state for companies
  const [companyForm, setCompanyForm] = useState({
    companyName: "",
    industry: "",
    website: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStudentStep1 = () => {
    return studentForm.fullName && studentForm.email && studentForm.rollNumber;
  };

  const validateStudentStep2 = () => {
    return studentForm.branch && studentForm.graduationYear;
  };

  const validateStudentStep3 = () => {
    return (
      studentForm.password &&
      studentForm.confirmPassword &&
      studentForm.password === studentForm.confirmPassword
    );
  };

  const validateCompanyStep1 = () => {
    return (
      companyForm.companyName && companyForm.industry && companyForm.website
    );
  };

  const validateCompanyStep2 = () => {
    return (
      companyForm.contactPerson &&
      companyForm.designation &&
      companyForm.email &&
      companyForm.phone
    );
  };

  const validateCompanyStep3 = () => {
    return (
      companyForm.password &&
      companyForm.confirmPassword &&
      companyForm.password === companyForm.confirmPassword
    );
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(userType === "student" ? studentForm : companyForm);

    // Redirect to login
    router.push("/login");
  };

  const branches = [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
  const graduationYears = ["2024", "2025", "2026", "2027"];
  const industries = [
    "IT & Software",
    "Banking & Finance",
    "Manufacturing",
    "Consulting",
    "E-commerce",
    "Healthcare",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          className="mb-6 text-gray-300 hover:text-white"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="border-gray-700 bg-gray-900 text-gray-100">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl text-center">
              Create your account
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              Join NIT Mizoram&apos;s Training & Placement Portal
            </CardDescription>
          </CardHeader>

          <Tabs
            defaultValue="student"
            className="w-full"
            onValueChange={(value) => setUserType(value)}
          >
            <TabsList className="grid grid-cols-2 mb-4 mx-4">
              <TabsTrigger
                value="student"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Student
              </TabsTrigger>
              <TabsTrigger
                value="company"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Building className="mr-2 h-4 w-4" />
                Company
              </TabsTrigger>
            </TabsList>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <TabsContent value="student">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={studentForm.fullName}
                            onChange={handleStudentChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={studentForm.email}
                            onChange={handleStudentChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="rollNumber">Roll Number</Label>
                        <div className="relative">
                          <Book className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="rollNumber"
                            name="rollNumber"
                            placeholder="Enter your roll number"
                            value={studentForm.rollNumber}
                            onChange={handleStudentChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="branch">Branch / Department</Label>
                        <select
                          id="branch"
                          name="branch"
                          value={studentForm.branch}
                          onChange={(e) =>
                            setStudentForm({
                              ...studentForm,
                              branch: e.target.value,
                            })
                          }
                          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="" disabled>
                            Select your branch
                          </option>
                          {branches.map((branch) => (
                            <option key={branch} value={branch}>
                              {branch}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="graduationYear">
                          Expected Graduation Year
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <select
                            id="graduationYear"
                            name="graduationYear"
                            value={studentForm.graduationYear}
                            onChange={(e) =>
                              setStudentForm({
                                ...studentForm,
                                graduationYear: e.target.value,
                              })
                            }
                            className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="" disabled>
                              Select year
                            </option>
                            {graduationYears.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={studentForm.password}
                            onChange={handleStudentChange}
                            className="bg-gray-800 border-gray-700 pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute right-0 top-0 h-10 w-10 px-0 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={studentForm.confirmPassword}
                            onChange={handleStudentChange}
                            className="bg-gray-800 border-gray-700 pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute right-0 top-0 h-10 w-10 px-0 text-gray-400"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {studentForm.password &&
                          studentForm.confirmPassword &&
                          studentForm.password !==
                            studentForm.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">
                              Passwords do not match
                            </p>
                          )}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="company">
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="companyName">Company Name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="companyName"
                            name="companyName"
                            placeholder="Enter company name"
                            value={companyForm.companyName}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="industry">Industry</Label>
                        <select
                          id="industry"
                          name="industry"
                          value={companyForm.industry}
                          onChange={(e) =>
                            setCompanyForm({
                              ...companyForm,
                              industry: e.target.value,
                            })
                          }
                          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="" disabled>
                            Select industry
                          </option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="website">Company Website</Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="website"
                            name="website"
                            placeholder="https://www.example.com"
                            value={companyForm.website}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="contactPerson">Contact Person</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="contactPerson"
                            name="contactPerson"
                            placeholder="Full name of contact person"
                            value={companyForm.contactPerson}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="designation">Designation</Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="designation"
                            name="designation"
                            placeholder="E.g. HR Manager, Recruiter"
                            value={companyForm.designation}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="companyEmail">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="companyEmail"
                            name="email"
                            type="email"
                            placeholder="contact@company.com"
                            value={companyForm.email}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+91 XXXXXXXXXX"
                            value={companyForm.phone}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="companyPassword">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="companyPassword"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={companyForm.password}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute right-0 top-0 h-10 w-10 px-0 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="companyConfirmPassword">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input
                            id="companyConfirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={companyForm.confirmPassword}
                            onChange={handleCompanyChange}
                            className="bg-gray-800 border-gray-700 pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="absolute right-0 top-0 h-10 w-10 px-0 text-gray-400"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {companyForm.password &&
                          companyForm.confirmPassword &&
                          companyForm.password !==
                            companyForm.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">
                              Passwords do not match
                            </p>
                          )}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <div className="flex mt-6 justify-between">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-gray-700 text-gray-300 hover:bg-gray-800"
                    >
                      Back
                    </Button>
                  )}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (userType === "student" &&
                          currentStep === 1 &&
                          !validateStudentStep1()) ||
                        (userType === "student" &&
                          currentStep === 2 &&
                          !validateStudentStep2()) ||
                        (userType === "company" &&
                          currentStep === 1 &&
                          !validateCompanyStep1()) ||
                        (userType === "company" &&
                          currentStep === 2 &&
                          !validateCompanyStep2())
                      }
                      className={
                        currentStep === 1 && !validateStudentStep1()
                          ? "ml-auto"
                          : ""
                      }
                    >
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto"
                      disabled={
                        (userType === "student" && !validateStudentStep3()) ||
                        (userType === "company" && !validateCompanyStep3())
                      }
                    >
                      Create Account
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Tabs>

          <CardFooter className="border-t border-gray-800 bg-gray-950 mt-4 flex justify-center p-4">
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <div
                className={`w-2 h-2 rounded-full ${
                  currentStep >= 1 ? "bg-primary" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-8 h-0.5 ${
                  currentStep >= 2 ? "bg-primary" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-2 h-2 rounded-full ${
                  currentStep >= 2 ? "bg-primary" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-8 h-0.5 ${
                  currentStep >= 3 ? "bg-primary" : "bg-gray-600"
                }`}
              ></div>
              <div
                className={`w-2 h-2 rounded-full ${
                  currentStep >= 3 ? "bg-primary" : "bg-gray-600"
                }`}
              ></div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
