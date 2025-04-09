import React from "react";
import {
  Bell,
  Lock,
  User,
  Shield,
  Mail,
  Laptop,
  Moon,
  Sun,
  GraduationCap,
  Download,
  RefreshCw,
  LogOut,
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <Tabs
            defaultValue="account"
            orientation="vertical"
            className="w-full"
          >
            <TabsList className="flex flex-col h-auto items-stretch justify-start space-y-1 bg-transparent p-0">
              <TabsTrigger
                value="account"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <Laptop className="mr-2 h-4 w-4" />
                Appearance
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <Lock className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger
                value="academics"
                className="justify-start px-4 py-2 data-[state=active]:bg-muted"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Academic Info
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </aside>
        <div className="flex-1 lg:max-w-3xl">
          <Tabs defaultValue="account">
            {/* Account Settings */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and contact details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="+91 9876543210"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Preferences</CardTitle>
                  <CardDescription>
                    Choose how you would like to be contacted for different
                    purposes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Recruitment Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about new job postings and company
                          visits.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label
                          htmlFor="recruitment-email"
                          className="text-sm text-muted-foreground"
                        >
                          Email
                        </Label>
                        <Switch id="recruitment-email" defaultChecked />
                        <Label
                          htmlFor="recruitment-sms"
                          className="text-sm text-muted-foreground ml-4"
                        >
                          SMS
                        </Label>
                        <Switch id="recruitment-sms" defaultChecked />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Event Invitations</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive invitations to placement events, workshops,
                          and webinars.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label
                          htmlFor="events-email"
                          className="text-sm text-muted-foreground"
                        >
                          Email
                        </Label>
                        <Switch id="events-email" defaultChecked />
                        <Label
                          htmlFor="events-sms"
                          className="text-sm text-muted-foreground ml-4"
                        >
                          SMS
                        </Label>
                        <Switch id="events-sms" defaultChecked />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Placement Results</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about interview results and
                          selection decisions.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label
                          htmlFor="results-email"
                          className="text-sm text-muted-foreground"
                        >
                          Email
                        </Label>
                        <Switch id="results-email" defaultChecked />
                        <Label
                          htmlFor="results-sms"
                          className="text-sm text-muted-foreground ml-4"
                        >
                          SMS
                        </Label>
                        <Switch id="results-sms" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Preferences</CardTitle>
                  <CardDescription>
                    Customize the appearance of the application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Theme Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose between light, dark or system theme.
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-24"
                        >
                          <Sun className="mr-2 h-4 w-4" />
                          Light
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-24"
                        >
                          <Moon className="mr-2 h-4 w-4" />
                          Dark
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Use a more compact layout to fit more content on
                          screen.
                        </p>
                      </div>
                      <Switch id="compact-mode" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable animations for a more dynamic experience.
                        </p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Layout</CardTitle>
                  <CardDescription>
                    Customize the layout of your dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Default View</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred default view.
                        </p>
                      </div>
                      <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option value="dashboard">Dashboard Overview</option>
                        <option value="jobs">Job Listings</option>
                        <option value="events">Upcoming Events</option>
                        <option value="applications">My Applications</option>
                      </select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Card Layout</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose how cards are displayed.
                        </p>
                      </div>
                      <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option value="grid">Grid View</option>
                        <option value="list">List View</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Layout</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage the type of notifications you receive.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Job Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications about new job postings matching your
                          profile.
                        </p>
                      </div>
                      <Switch id="job-alerts" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Event Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Reminders for upcoming events and workshops.
                        </p>
                      </div>
                      <Switch id="event-reminders" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Application Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Status updates for your job applications.
                        </p>
                      </div>
                      <Switch id="application-updates" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Company Announcements</Label>
                        <p className="text-sm text-muted-foreground">
                          Updates from companies you're following.
                        </p>
                      </div>
                      <Switch id="company-announcements" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Deadline Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Reminders for upcoming application deadlines.
                        </p>
                      </div>
                      <Switch id="deadline-alerts" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Unsubscribe from All</Button>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password Settings</CardTitle>
                  <CardDescription>
                    Update your password and security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Login Security</CardTitle>
                  <CardDescription>
                    Manage your login security preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Session Management</Label>
                        <p className="text-sm text-muted-foreground">
                          Manage active sessions on different devices.
                        </p>
                      </div>
                      <Button variant="outline">Manage Sessions</Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Account Activity</Label>
                        <p className="text-sm text-muted-foreground">
                          View recent account activity and login attempts.
                        </p>
                      </div>
                      <Button variant="outline">View Activity</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Privacy</CardTitle>
                  <CardDescription>
                    Control who can see your profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Control who can view your profile.
                        </p>
                      </div>
                      <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option value="public">Public (All Companies)</option>
                        <option value="selective">Selective Companies</option>
                        <option value="private">Private (Only TPO)</option>
                      </select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Resume Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Control who can download your resume.
                        </p>
                      </div>
                      <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option value="approved">Approved Companies</option>
                        <option value="applied">Applied Companies Only</option>
                        <option value="none">No One (Manual Share)</option>
                      </select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Contact Information</Label>
                        <p className="text-sm text-muted-foreground">
                          Control who can see your contact details.
                        </p>
                      </div>
                      <select className="h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option value="tpo">TPO Only</option>
                        <option value="selected">Selected Companies</option>
                        <option value="all">All Companies</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Privacy Settings</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>
                    Manage your data on the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Data Export</Label>
                        <p className="text-sm text-muted-foreground">
                          Download a copy of your personal data.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Account Deletion</Label>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all data.
                        </p>
                      </div>
                      <Button variant="destructive" size="sm" className="h-8">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Academic Info Settings */}
            <TabsContent value="academics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>
                    Manage your academic information for placement eligibility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <select
                        id="department"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="cse">
                          Computer Science & Engineering
                        </option>
                        <option value="it">Information Technology</option>
                        <option value="ece">Electronics & Communication</option>
                        <option value="ee">Electrical Engineering</option>
                        <option value="me">Mechanical Engineering</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch">Graduation Year</Label>
                      <select
                        id="batch"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cgpa">Current CGPA</Label>
                      <Input
                        id="cgpa"
                        type="number"
                        defaultValue="8.5"
                        step="0.1"
                        min="0"
                        max="10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roll-number">Roll Number</Label>
                      <Input id="roll-number" defaultValue="CS20B001" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="backlogs">Active Backlogs</Label>
                      <select
                        id="backlogs"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="0">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">More than 2</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Sync with College Database
                  </Button>
                  <Button>Update Information</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education History</CardTitle>
                  <CardDescription>
                    Manage your educational background information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <h4 className="font-medium">Bachelor of Technology</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Computer Science & Engineering, 2020 - 2024
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <p className="text-sm">CGPA: 8.5/10</p>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <h4 className="font-medium">
                        Higher Secondary Education
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Delhi Public School, 2018 - 2020
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <p className="text-sm">Percentage: 92%</p>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <h4 className="font-medium">Secondary Education</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Delhi Public School, 2018
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <p className="text-sm">Percentage: 90%</p>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-2">
                      Add Education
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex justify-between">
        <Button variant="outline" className="flex items-center">
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
        <Button variant="destructive">Deactivate Account</Button>
      </div>
    </div>
  );
}
