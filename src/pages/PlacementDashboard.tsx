import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus,
  Building,
  Users,
  Calendar,
  TrendingUp,
  FileText,
  Briefcase,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Target,
  Award,
  BarChart3
} from "lucide-react";

const PlacementDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [showAddJob, setShowAddJob] = useState(false);

  const activeJobs = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Amazon",
      type: "Internship",
      department: "Computer Science",
      applications: 45,
      shortlisted: 12,
      interviewed: 8,
      selected: 3,
      deadline: "2024-10-15",
      stipend: "₹50,000/month",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Flipkart",
      type: "Internship",
      department: "All Engineering",
      applications: 32,
      shortlisted: 8,
      interviewed: 5,
      selected: 2,
      deadline: "2024-10-20",
      stipend: "₹45,000/month",
      status: "Active",
    },
  ];

  const recentApplications = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      company: "Amazon",
      position: "SDE Intern",
      appliedDate: "2024-09-25",
      status: "Mentor Approved",
      nextStep: "HR Screening",
    },
    {
      id: 2,
      studentName: "Priya Patel",
      company: "Google",
      position: "Product Intern",
      appliedDate: "2024-09-26",
      status: "Pending Faculty Approval",
      nextStep: "Faculty Review",
    },
  ];

  const upcomingInterviews = [
    {
      id: 1,
      student: "Rahul Sharma",
      company: "Amazon",
      position: "SDE Intern",
      date: "2024-10-05",
      time: "10:00 AM",
      type: "Technical",
      interviewer: "Senior SDE",
    },
    {
      id: 2,
      student: "Priya Patel",
      company: "Microsoft",
      position: "Product Intern",
      date: "2024-10-06",
      time: "2:00 PM",
      type: "Behavioral",
      interviewer: "Product Manager",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500";
      case "Closed":
        return "bg-red-500/10 text-red-500";
      case "Mentor Approved":
        return "bg-blue-500/10 text-blue-500";
      case "Pending Faculty Approval":
        return "bg-yellow-500/10 text-yellow-500";
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
              <h1 className="text-3xl font-bold text-foreground">Placement Cell Dashboard</h1>
              <p className="text-muted-foreground">Manage placements, track applications, and coordinate with employers</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Export Reports
              </Button>
              <Button variant="hero" onClick={() => setShowAddJob(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Job Posting
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Job Postings</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Applications</span>
            </TabsTrigger>
            <TabsTrigger value="interviews" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Interviews</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">Across 12 companies</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Placed Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">78% placement rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Package</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹8.2L</div>
                  <p className="text-xs text-muted-foreground">+15% from last year</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest student applications requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between border border-border rounded-lg p-3">
                        <div>
                          <h4 className="font-semibold">{app.studentName}</h4>
                          <p className="text-sm text-muted-foreground">{app.company} - {app.position}</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                  <CardDescription>Scheduled interviews for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingInterviews.slice(0, 3).map((interview) => (
                      <div key={interview.id} className="border border-border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{interview.student}</h4>
                            <p className="text-sm text-muted-foreground">{interview.company} - {interview.position}</p>
                          </div>
                          <Badge variant="secondary">{interview.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {interview.date} at {interview.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Job Postings Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Job Postings</h2>
                <p className="text-muted-foreground">Manage and track job opportunities</p>
              </div>
              <Button variant="hero" onClick={() => setShowAddJob(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New Job
              </Button>
            </div>

            {showAddJob && (
              <Card>
                <CardHeader>
                  <CardTitle>Add New Job Posting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Job Title</label>
                      <Input placeholder="e.g., Software Developer Intern" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Company Name</label>
                      <Input placeholder="e.g., Amazon" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Job Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="internship">Internship</SelectItem>
                          <SelectItem value="fulltime">Full-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Engineering</SelectItem>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="ec">Electronics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="e.g., Bengaluru" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Stipend/Salary</label>
                      <Input placeholder="e.g., ₹50,000/month" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium">Job Description</label>
                      <Textarea placeholder="Describe the role, requirements, and responsibilities..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Application Deadline</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Required Skills</label>
                      <Input placeholder="e.g., React, Python, Java" />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button variant="hero">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Post Job
                    </Button>
                    <Button variant="outline" onClick={() => setShowAddJob(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-6">
              {activeJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {job.company}
                          </span>
                          <span>{job.department}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Deadline: {job.deadline}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{job.applications}</div>
                        <p className="text-sm text-muted-foreground">Applications</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{job.shortlisted}</div>
                        <p className="text-sm text-muted-foreground">Shortlisted</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{job.interviewed}</div>
                        <p className="text-sm text-muted-foreground">Interviewed</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{job.selected}</div>
                        <p className="text-sm text-muted-foreground">Selected</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-4 w-4" />
                        {job.stipend}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="placement" size="sm">
                          View Applications
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit Posting
                        </Button>
                      </div>
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
                <CardTitle>Application Management</CardTitle>
                <CardDescription>Track and manage student applications across all job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{app.studentName}</h4>
                          <p className="text-muted-foreground">{app.company} - {app.position}</p>
                          <p className="text-sm text-muted-foreground">Applied: {app.appliedDate}</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Next: {app.nextStep}</span>
                        <div className="flex gap-2">
                          <Button variant="placement" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Update Status</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interviews Tab */}
          <TabsContent value="interviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interview Coordination</CardTitle>
                <CardDescription>Schedule and manage interviews with employers</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              {upcomingInterviews.map((interview) => (
                <Card key={interview.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{interview.student}</CardTitle>
                        <CardDescription>
                          {interview.company} - {interview.position}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{interview.type} Interview</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{interview.date} at {interview.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>Interviewer: {interview.interviewer}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="placement" size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Placement Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Computer Science</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Information Technology</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Electronics</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Recruiting Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Amazon</span>
                      <span className="font-medium">24 hires</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Microsoft</span>
                      <span className="font-medium">18 hires</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Google</span>
                      <span className="font-medium">15 hires</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Flipkart</span>
                      <span className="font-medium">12 hires</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlacementDashboard;