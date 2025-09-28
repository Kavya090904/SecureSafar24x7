import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Users, Building, UserCheck, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  // Simple login state for each user type
  const isStudentLoggedIn = typeof window !== 'undefined' && localStorage.getItem('studentLoggedIn') === 'true';
  const isExternalLoggedIn = typeof window !== 'undefined' && localStorage.getItem('externalLoggedIn') === 'true';
  const isMentorLoggedIn = typeof window !== 'undefined' && localStorage.getItem('mentorLoggedIn') === 'true';
  const isPlacementLoggedIn = typeof window !== 'undefined' && localStorage.getItem('placementLoggedIn') === 'true';
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: GraduationCap },
    {
      label: "Student",
      icon: Users,
      links: [
        { path: "/student", label: "Dashboard" },
        { path: "/student/login", label: "Login" },
        { path: "/student/register", label: "Register" },
      ],
    },
    {
      label: "External",
      icon: Building,
      links: [
        { path: "/external", label: "Dashboard" },
        { path: "/external/login", label: "Login" },
        { path: "/external/register", label: "Register" },
      ],
    },
    {
      label: "Mentor",
      icon: UserCheck,
      links: [
        { path: "/mentor", label: "Dashboard" },
        { path: "/mentor/login", label: "Login" },
        { path: "/mentor/register", label: "Register" },
      ],
    },
    {
      label: "Placement Cell",
      icon: Shield,
      links: [
        { path: "/placement", label: "Dashboard" },
        { path: "/placement/login", label: "Login" },
        { path: "/placement/register", label: "Register" },
      ],
    },
  ];


  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">PlacePortal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => {
              if (!item.links) {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              }
              // Dropdown for login/register/dashboard
              const Icon = item.icon;
              let loggedIn = false;
              if (item.label === 'Student') loggedIn = isStudentLoggedIn;
              if (item.label === 'External') loggedIn = isExternalLoggedIn;
              if (item.label === 'Mentor') loggedIn = isMentorLoggedIn;
              if (item.label === 'Placement Cell') loggedIn = isPlacementLoggedIn;
              return (
                <div key={item.label} className="relative group">
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-card border border-border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    {item.links.filter(link => {
                      if (link.label === 'Dashboard') return loggedIn;
                      return true;
                    }).map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2 text-sm hover:bg-accent/30 ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;