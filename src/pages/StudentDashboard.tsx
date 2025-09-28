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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const allOpportunities = [
    {
      id: 1,
      title: "Software Developer Intern",
      role: "Software Developer",
      company: "Amazon",
      type: "Internship",
      location: "Bengaluru",
      distance: "0 km",
      stipend: "₹50,000/month",
      deadline: "2024-10-15",
      skills: ["React", "Java", "Python"],
      status: "Applied",
      description: "Join our team to work on cutting-edge e-commerce solutions.",
    },
    {
      id: 2,
      title: "Data Science Intern",
      role: "Data Scientist",
      company: "Flipkart",
      type: "Internship",
      location: "Hyderabad",
      distance: "2 km",
      stipend: "₹45,000/month",
      deadline: "2024-10-20",
      skills: ["Python", "Machine Learning", "SQL"],
      status: "Eligible",
      description: "Work with large-scale data to drive business insights.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      role: "Frontend Developer",
      company: "Microsoft",
      type: "Full-time",
      location: "Mumbai",
      distance: "5 km",
      stipend: "₹12 LPA",
      deadline: "2024-11-01",
      skills: ["React", "TypeScript", "Azure"],
      status: "Eligible",
      description: "Build next-generation web applications for global users.",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      role: "UI/UX Designer",
      company: "Zomato",
      type: "Internship",
      location: "Ahmedabad",
      distance: "1 km",
      stipend: "₹35,000/month",
      deadline: "2024-10-25",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      status: "Eligible",
      description: "Design user-friendly interfaces for food delivery platform.",
    },
    {
      id: 5,
      title: "Backend Developer",
      role: "Backend Developer",
      company: "Paytm",
      type: "Full-time",
      location: "Pune",
      distance: "3 km",
      stipend: "₹15 LPA",
      deadline: "2024-11-05",
      skills: ["Node.js", "MongoDB", "Redis"],
      status: "Eligible",
      description: "Build scalable backend systems for fintech applications.",
    },
    {
      id: 6,
      title: "Mobile App Developer",
      role: "Mobile Developer",
      company: "Swiggy",
      type: "Internship",
      location: "Ahmedabad",
      distance: "4 km",
      stipend: "₹40,000/month",
      deadline: "2024-10-30",
      skills: ["React Native", "Flutter", "Firebase"],
      status: "Eligible",
      description: "Develop mobile applications for food delivery services.",
    },
  ];

  // Filter opportunities based on search criteria
  const filteredOpportunities = allOpportunities.filter((opportunity) => {
    const matchesSearch = searchQuery === "" || 
      opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRole = selectedRole === "all" || opportunity.role === selectedRole;
    const matchesLocation = selectedLocation === "all" || opportunity.location === selectedLocation;
    const matchesType = selectedType === "all" || opportunity.type === selectedType;
    
    return matchesSearch && matchesRole && matchesLocation && matchesType;
  });

  // Sort by distance (closest first)
  const opportunities = filteredOpportunities.sort((a, b) => {
    const distanceA = parseFloat(a.distance);
    const distanceB = parseFloat(b.distance);
    return distanceA - distanceB;
  });

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
            <div className="bg-card p-4 rounded-lg border border-border mb-6">
              <h3 className="text-lg font-semibold mb-4">Find Jobs by Role & Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by role, company, skills..."
                    className="w-full pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="Software Developer">Software Developer</SelectItem>
                    <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                    <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {(searchQuery || selectedRole !== "all" || selectedLocation !== "all" || selectedType !== "all") && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Showing {opportunities.length} opportunities
                    {selectedLocation !== "all" && ` near ${selectedLocation}`}
                    {selectedRole !== "all" && ` for ${selectedRole}`}
                    {searchQuery && ` matching "${searchQuery}"`}
                    {opportunities.length > 0 && " (sorted by distance)"}
                  </p>
                </div>
              )}
            </div>

            <div className="grid gap-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {opportunity.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {opportunity.location}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {opportunity.distance} away
                          </Badge>
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
                    <form
                      className="w-full"
                      onSubmit={e => e.preventDefault()}
                    >
                      <label htmlFor="resume-upload" className="w-full">
                        <Button variant="outline" className="w-full" asChild>
                          <span>
                            <FileText className="mr-2 h-4 w-4" />
                            Upload Resume
                          </span>
                        </Button>
                        <input
                          id="resume-upload"
                          type="file"
                          accept=".pdf,.docx"
                          style={{ display: 'none' }}
                          onChange={async (e) => {
                            const file = e.target.files?.[0] || null;
                            if (file) {
                              // Use navigate to redirect and pass file
                              // Use window.history.state for file transfer
                              // But React Router v6 supports location.state
                              // So use useNavigate
                              // Import useNavigate at top
                              // @ts-ignore
                              const navigate = require('react-router-dom').useNavigate();
                              navigate('/resume-verification', { state: { resumeFile: file } });
                            }
                          }}
                        />
                      </label>
                    </form>
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