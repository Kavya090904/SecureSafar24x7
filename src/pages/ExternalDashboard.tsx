import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Briefcase, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Building, 
  MapPin, 
  Clock, 
  Star,
  User,
  FileText,
  Search,
  MessageSquare,
  Award,
  Target,
  Calendar,
  Brain
} from "lucide-react";
import careerIcons from "@/assets/career-icons.jpg";

const ExternalDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("opportunities");

  const jobOpportunities = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Amazon",
      type: "Full-time",
      location: "Bengaluru",
      salary: "₹25-35 LPA",
      experience: "3-5 years",
      skills: ["React", "Node.js", "AWS", "Microservices"],
      description: "Lead development of scalable e-commerce solutions.",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Flipkart",
      type: "Full-time",
      location: "Hyderabad",
      salary: "₹30-40 LPA",
      experience: "4-6 years",
      skills: ["Python", "Machine Learning", "Deep Learning", "SQL"],
      description: "Drive data-driven insights for business growth.",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Microsoft",
      type: "Full-time",
      location: "Mumbai",
      salary: "₹35-45 LPA",
      experience: "5-8 years",
      skills: ["Product Strategy", "Analytics", "Leadership", "Agile"],
      description: "Lead product development for enterprise solutions.",
      posted: "3 days ago",
    },
  ];

  const mncCompanies = [
    {
      name: "Amazon",
      process: ["Online Assessment", "Technical Interview", "Bar Raiser", "HR Round"],
      eligibility: "B.Tech/M.Tech with 60%+ marks",
      lastHired: "200+ positions in 2024",
      avgPackage: "₹28 LPA",
    },
    {
      name: "Google",
      process: ["Coding Round", "Technical Interview x2", "Googleyness", "HR Round"],
      eligibility: "B.Tech/M.Tech with 65%+ marks",
      lastHired: "150+ positions in 2024",
      avgPackage: "₹45 LPA",
    },
    {
      name: "Microsoft",
      process: ["Online Test", "Technical Interview x3", "AA Round", "HR Round"],
      eligibility: "B.Tech/M.Tech with 60%+ marks",
      lastHired: "180+ positions in 2024",
      avgPackage: "₹38 LPA",
    },
  ];

  const aptitudeCategories = [
    {
      title: "Quantitative Aptitude",
      topics: ["Number System", "Algebra", "Geometry", "Statistics"],
      tests: 15,
      avgScore: "78%",
    },
    {
      title: "Logical Reasoning",
      topics: ["Puzzles", "Blood Relations", "Seating Arrangement", "Coding"],
      tests: 12,
      avgScore: "82%",
    },
    {
      title: "Verbal Ability",
      topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Synonyms"],
      tests: 10,
      avgScore: "75%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">External User Dashboard</h1>
              <p className="text-muted-foreground">Explore opportunities and advance your career!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Network
              </Button>
              <Button variant="hero">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4">
            <TabsTrigger value="opportunities" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="mnc-guide" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">MNC Guide</span>
            </TabsTrigger>
            <TabsTrigger value="aptitude" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Aptitude</span>
            </TabsTrigger>
            <TabsTrigger value="networking" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Network</span>
            </TabsTrigger>
          </TabsList>

          {/* Job Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search job opportunities..."
                  className="w-full"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="bangalore">Bengaluru</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {jobOpportunities.map((job) => (
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
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.posted}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {job.salary}
                        </span>
                        <span>Experience: {job.experience}</span>
                      </div>
                      <Button variant="placement">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* MNC Guide Tab */}
          <TabsContent value="mnc-guide" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top MNC Companies</CardTitle>
                <CardDescription>Detailed hiring process and preparation guide for dream companies</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="w-full h-32 bg-muted rounded-lg mb-6 bg-cover bg-center"
                  style={{ backgroundImage: `url(${careerIcons})` }}
                />
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {mncCompanies.map((company, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      {company.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Hiring Process</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                          {company.process.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Eligibility</h4>
                          <p className="text-sm text-muted-foreground">{company.eligibility}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">2024 Hiring</h4>
                          <p className="text-sm text-muted-foreground">{company.lastHired}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Average Package</h4>
                          <p className="text-sm text-primary font-medium">{company.avgPackage}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <Button variant="placement" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Past Papers
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Mock Test
                      </Button>
                      <Button variant="outline" size="sm">
                        <Target className="mr-2 h-4 w-4" />
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aptitude Preparation Tab */}
          <TabsContent value="aptitude" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Aptitude Test Preparation</CardTitle>
                <CardDescription>Practice with past 5 years question papers and mock tests</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {aptitudeCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Topics Covered</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.topics.map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Available Tests: {category.tests}</span>
                        <span className="text-primary font-medium">Avg Score: {category.avgScore}</span>
                      </div>
                      <div className="space-y-2">
                        <Button variant="placement" className="w-full" size="sm">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Start Practice
                        </Button>
                        <Button variant="outline" className="w-full" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Download Papers
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mock Test Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24</div>
                    <p className="text-muted-foreground">Tests Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">78%</div>
                    <p className="text-muted-foreground">Average Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">12</div>
                    <p className="text-muted-foreground">Days Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Networking Tab */}
          <TabsContent value="networking" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alumni Network</CardTitle>
                  <CardDescription>Connect with alumni working in top companies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="placement" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Browse Alumni Profiles
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discussion Forums
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Upcoming Webinars
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Award className="mr-2 h-4 w-4" />
                    Mentorship Program
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Career Resources</CardTitle>
                  <CardDescription>Tools and resources for career growth</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="placement" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume Templates
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Interview Guides
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Skill Assessment
                  </Button>
                  <Button variant="placement" className="w-full justify-start">
                    <Target className="mr-2 h-4 w-4" />
                    Career Roadmaps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExternalDashboard;