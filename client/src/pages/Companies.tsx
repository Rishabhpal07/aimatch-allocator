import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Building2, MapPin, Users, Briefcase } from "lucide-react";

const companies = [
  {
    id: "COMP001",
    name: "TechCorp India",
    industry: "Technology",
    location: "Bangalore",
    size: "500-1000 employees",
    openings: 25,
    filled: 18,
    requirements: ["React", "Node.js", "Python", "AWS"],
    description: "Leading technology company specializing in cloud solutions and AI-driven products.",
    tier: "Tier 1"
  },
  {
    id: "COMP002",
    name: "FinanceXpert Ltd",
    industry: "Financial Services", 
    location: "Mumbai",
    size: "200-500 employees",
    openings: 15,
    filled: 12,
    requirements: ["Financial Analysis", "Excel", "Bloomberg", "Risk Management"],
    description: "Premier investment banking and financial advisory services company.",
    tier: "Tier 1"
  },
  {
    id: "COMP003",
    name: "HealthTech Solutions",
    industry: "Healthcare",
    location: "Hyderabad",
    size: "100-200 employees",
    openings: 10,
    filled: 7,
    requirements: ["Medical Devices", "Regulatory Affairs", "Clinical Research", "Data Analysis"],
    description: "Innovative healthcare technology company developing next-gen medical solutions.",
    tier: "Tier 2"
  },
  {
    id: "COMP004",
    name: "Manufacturing Pro",
    industry: "Manufacturing",
    location: "Chennai",
    size: "1000+ employees",
    openings: 20,
    filled: 14,
    requirements: ["Six Sigma", "Lean Manufacturing", "Supply Chain", "Quality Control"],
    description: "Large-scale manufacturing company with operations across India and Southeast Asia.",
    tier: "Tier 2"
  }
];

const Companies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Partner Companies</h1>
        <p className="text-muted-foreground">
          Manage industry partners and internship opportunities in the PM Scheme ecosystem
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="mb-6 shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search companies by name, industry, or location..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-primary">
              Add Company
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Companies Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {companies.map((company) => (
          <Card key={company.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{company.id}</p>
                  </div>
                </div>
                <Badge 
                  variant={company.tier === "Tier 1" ? "default" : "secondary"}
                  className={company.tier === "Tier 1" ? "bg-primary" : ""}
                >
                  {company.tier}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {company.description}
              </p>

              <div className="grid grid-cols-2 gap-4 py-3 border-y bg-muted/30 rounded-lg px-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{company.filled}</div>
                  <div className="text-xs text-muted-foreground">Allocated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{company.openings}</div>
                  <div className="text-xs text-muted-foreground">Total Available</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {company.industry}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {company.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {company.size}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {company.requirements.map((req) => (
                    <Badge key={req} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  Manage Allocations
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Companies;