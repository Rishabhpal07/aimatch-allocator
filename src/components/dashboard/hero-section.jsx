import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-allocation.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="flex items-center mb-6">
              <BrainCircuit className="h-12 w-12 mr-4" />
              <span className="text-lg font-semibold opacity-90">AI-Powered Allocation</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Internship
              <span className="block gradient-text">Matching Engine</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Revolutionizing the PM Internship Scheme with AI-driven allocation that ensures 
              optimal and equitable matching of students to internships based on skills, 
              preferences, and affirmative action policies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-75">Match Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1,200+</div>
                <div className="text-sm opacity-75">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-75">Partner Companies</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage}
              alt="AI Internship Allocation System"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-strong">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">AI Matching</div>
                  <div className="text-sm text-muted-foreground">Active Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}