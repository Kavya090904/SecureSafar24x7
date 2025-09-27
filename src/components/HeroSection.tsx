import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Building, GraduationCap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-hero-gradient">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Gateway to
            <span className="text-primary block">Career Success</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect students, faculty, and employers through our comprehensive placement portal. 
            From internships to dream careers at top MNCs like Amazon and Flipkart.
          </p>
          
          {/* User Type Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* College Student Card */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">College Student</h3>
                  <p className="text-muted-foreground mb-6">
                    Currently enrolled students seeking internships, placements, and career guidance
                  </p>
                  <Link to="/student">
                    <Button variant="hero" size="lg" className="w-full">
                      Enter as Student
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* External User Card */}
            <Card className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">External User</h3>
                  <p className="text-muted-foreground mb-6">
                    Alumni, professionals, and job seekers looking for opportunities and guidance
                  </p>
                  <Link to="/external">
                    <Button variant="hero" size="lg" className="w-full">
                      Enter as External User
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/faculty">
              <Button variant="outline" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Faculty Portal
              </Button>
            </Link>
            <Link to="/placement">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Placement Cell
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;