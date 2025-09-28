import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import ExternalLogin from "./pages/ExternalLogin";
import ExternalRegister from "./pages/ExternalRegister";
import MentorLogin from "./pages/MentorLogin";
import MentorRegister from "./pages/MentorRegister";
import StudentDashboard from "./pages/StudentDashboard";
import ExternalDashboard from "./pages/ExternalDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import PlacementLogin from "./pages/PlacementLogin";
import PlacementRegister from "./pages/PlacementRegister";
import PlacementDashboard from "./pages/PlacementDashboard";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Chatbot from "./components/Chatbot";
import DocumentVerification from "./pages/DocumentVerification";
import MentorVerifyDocuments from "./pages/MentorVerifyDocuments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Chatbot />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/register" element={<StudentRegister />} />
            <Route path="/external" element={<ExternalDashboard />} />
            <Route path="/external/login" element={<ExternalLogin />} />
            <Route path="/external/register" element={<ExternalRegister />} />
            <Route path="/faculty" element={<Navigate to="/mentor" replace />} />
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route path="/mentor/login" element={<MentorLogin />} />
            <Route path="/mentor/register" element={<MentorRegister />} />
            <Route path="/placement" element={<PlacementDashboard />} />
            <Route path="/placement/login" element={<PlacementLogin />} />
            <Route path="/placement/register" element={<PlacementRegister />} />
            <Route path="/document-verification" element={<DocumentVerification />} />
            <Route path="/mentor/verify-documents" element={<MentorVerifyDocuments />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
