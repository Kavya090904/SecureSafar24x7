import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  FileCheck, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Building,
  Star,
  AlertCircle,
  BookOpen,
  Award
} from "lucide-react";

const FacultyDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("applications");

  const pendingApplications = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      rollNumber: "CS2021001",
      company: "Amazon",
      position: "Software Developer Intern",
      department: "Computer Science",
      semester: "6th",
      cgpa: "8.5",
      appliedDate: "2024-09-25",
      status: "Pending",
      conflicts: [],
    },
    {
      id: 2,
      studentName: "Priya Patel",
      rollNumber: "IT2021045",
      company: "Google",
      position: "SDE Intern",
      department: "Information Technology",
      semester: "6th",
      cgpa: "9.1",
      appliedDate: "2024-09-26",
      status: "Pending",
      conflicts: ["Interview clashes with OS Lab"],
    },
    {
      id: 3,
      studentName: "Amit Kumar",
      rollNumber: "CS2021102",
      company: "Microsoft",
      position: "Product Intern",
      department: "Computer Science",
      semester: "7th",
      cgpa: "7.8",
      appliedDate: "2024-09-27",
      status: "Pending",
      conflicts: [],
    },
  ];

  const assignedStudents = [
    {
      id: 1,
      name: "Rahul Sharma",
      rollNumber: "CS2021001",
      department: "Computer Science",
      semester: "6th",
      cgpa: "8.5",
      applicationsCount: 3,
      interviewsScheduled: 1,
      employabilityScore: 85,
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNumber: "IT2021045",
      department: "Information Technology",
      semester: "6th",
      cgpa: "9.1",
      applicationsCount: 2,
      interviewsScheduled: 2,
      employabilityScore: 92,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/10 text-green-500";
      case "Rejected":
        return "bg-red-500/10 text-red-500";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getEmployabilityColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Faculty Dashboard</h1>
              <p className="text-muted-foreground">Manage student applications and provide guidance</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
              </Button>
              <Button variant="hero">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4">
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Applications</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Application Approvals</CardTitle>
                <CardDescription>Review and approve student applications for internships and jobs</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              {pendingApplications.map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          {application.studentName}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span>Roll: {application.rollNumber}</span>
                          <span>{application.department}</span>
                          <span>{application.semester} Semester</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            CGPA: {application.cgpa}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Application Details</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {application.company}
                          </span>
                          <span>{application.position}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Applied: {application.appliedDate}
                          </span>
                        </div>
                      </div>

                      {application.conflicts.length > 0 && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                            <span className="font-semibold text-yellow-700">Schedule Conflicts</span>
                          </div>
                          <ul className="text-sm text-yellow-600">
                            {application.conflicts.map((conflict, index) => (
                              <li key={index}>• {conflict}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="space-y-3">
                        <Textarea 
                          placeholder="Add feedback/comments for the student..." 
                          className="min-h-[80px]"
                        />
                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                          <Button variant="destructive" className="flex-1">
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Discuss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Students</CardTitle>
                <CardDescription>Monitor and guide students under your mentorship</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6">
              {assignedStudents.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          {student.name}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span>Roll: {student.rollNumber}</span>
                          <span>{student.department}</span>
                          <span>{student.semester} Semester</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            CGPA: {student.cgpa}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className={getEmployabilityColor(student.employabilityScore)}>
                        Employability: {student.employabilityScore}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{student.applicationsCount}</div>
                        <p className="text-sm text-muted-foreground">Applications</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{student.interviewsScheduled}</div>
                        <p className="text-sm text-muted-foreground">Interviews</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getEmployabilityColor(student.employabilityScore)}`}>
                          {student.employabilityScore}%
                        </div>
                        <p className="text-sm text-muted-foreground">Ready Score</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="placement" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Meeting
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileCheck className="mr-2 h-4 w-4" />
                        View Applications
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Student Meeting</h4>
                        <p className="text-sm text-muted-foreground">Rahul Sharma - Career Guidance</p>
                      </div>
                      <Badge variant="secondary">10:00 AM</Badge>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Interview Review</h4>
                        <p className="text-sm text-muted-foreground">Priya Patel - Google Interview</p>
                      </div>
                      <Badge variant="secondary">2:00 PM</Badge>
                    </div>
                  </div>
                  <Button variant="placement" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Full Calendar
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="placement" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Schedule Student Meeting
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <FileCheck className="mr-2 h-4 w-4" />
                    Review Pending Applications
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Conduct Mock Interview
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Award className="mr-2 h-4 w-4" />
                    Provide Feedback
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">24</div>
                  <p className="text-muted-foreground">Under guidance</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">47</div>
                  <p className="text-muted-foreground">Reviewed this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">78%</div>
                  <p className="text-muted-foreground">Student placement</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">8</div>
                  <p className="text-muted-foreground">Applications to review</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Student placement statistics by department</CardDescription>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FacultyDashboard;