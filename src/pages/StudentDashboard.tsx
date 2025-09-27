import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  FileText, 
  Briefcase, 
  Calendar, 
  Award, 
  TrendingUp,
  BookOpen,
  MessageSquare,
  Bell,
  Search,
  Filter,
  MapPin,
  Clock,
  Building,
  Star
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import studentsImage from "@/assets/students-working.jpg";

const StudentDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("opportunities");

  const opportunities = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Amazon",
      type: "Internship",
      location: "Bengaluru",
      stipend: "₹50,000/month",
      deadline: "2024-10-15",
      skills: ["React", "Java", "Python"],
      status: "Applied",
      description: "Join our team to work on cutting-edge e-commerce solutions.",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flipkart",
      type: "Internship",
      location: "Hyderabad",
      stipend: "₹45,000/month",
      deadline: "2024-10-20",
      skills: ["Python", "Machine Learning", "SQL"],
      status: "Eligible",
      description: "Work with large-scale data to drive business insights.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Microsoft",
      type: "Full-time",
      location: "Mumbai",
      stipend: "₹12 LPA",
      deadline: "2024-11-01",
      skills: ["React", "TypeScript", "Azure"],
      status: "Eligible",
      description: "Build next-generation web applications for global users.",
    },
  ];

  const applications = [
    {
      id: 1,
      company: "Amazon",
      position: "Software Developer Intern",
      status: "Interview Scheduled",
      appliedDate: "2024-09-15",
      nextStep: "Technical Interview - Oct 5, 2024",
    },
    {
      id: 2,
      company: "Google",
      position: "SDE Intern",
      status: "Under Review",
      appliedDate: "2024-09-20",
      nextStep: "Waiting for response",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-500/10 text-blue-500";
      case "Interview Scheduled":
        return "bg-yellow-500/10 text-yellow-500";
      case "Under Review":
        return "bg-orange-500/10 text-orange-500";
      case "Eligible":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Student!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:grid-cols-5">
            <TabsTrigger value="opportunities" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Opportunities</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Applications</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="guidance" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Guidance</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities..."
                  className="w-full pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="ec">Electronics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Building className="h-4 w-4" />
                          {opportunity.company}
                          <MapPin className="h-4 w-4 ml-2" />
                          {opportunity.location}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(opportunity.status)}>
                        {opportunity.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {opportunity.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {opportunity.stipend}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Deadline: {opportunity.deadline}
                        </span>
                      </div>
                      <Button variant="placement">
                        {opportunity.status === "Applied" ? "View Application" : "Apply Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Tracker</CardTitle>
                <CardDescription>Track the status of your applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{application.position}</h3>
                          <p className="text-muted-foreground">{application.company}</p>
                        </div>
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Applied: {application.appliedDate}</p>
                        <p>Next Step: {application.nextStep}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="Student Name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="student@college.edu" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Department</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="ec">Electronics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Current Semester</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6th Semester</SelectItem>
                        <SelectItem value="7">7th Semester</SelectItem>
                        <SelectItem value="8">8th Semester</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Update Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills & Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="w-full h-48 bg-muted rounded-lg mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${studentsImage})` }}
                  />
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Technical Skills</label>
                      <Input placeholder="e.g., React, Python, Java" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Projects</label>
                      <Input placeholder="Add your project links" />
                    </div>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Upload Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Guidance Tab */}
          <TabsContent value="guidance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Guidance</CardTitle>
                  <CardDescription>Resources to help you succeed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="placement" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Resume Writing Tips
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Interview Preparation
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Award className="mr-2 h-4 w-4" />
                    Skill Development
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Connect with Mentors
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mock Tests & Practice</CardTitle>
                  <CardDescription>Prepare for aptitude tests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="placement" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Quantitative Aptitude
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Logical Reasoning
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Verbal Ability
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Technical Questions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <p className="text-muted-foreground">Total applications</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-muted-foreground">Scheduled interviews</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">25%</div>
                  <p className="text-muted-foreground">Application success</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;