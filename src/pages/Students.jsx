import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, User, MapPin, GraduationCap } from "lucide-react";

const students = [
  {
    id: "STU001",
    name: "Priya Sharma",
    email: "priya.sharma@university.edu",
    university: "IIT Delhi",
    course: "Computer Science",
    year: "Final Year",
    location: "Delhi",
    skills: ["React", "Python", "Machine Learning", "Data Analysis"],
    cgpa: 8.9,
    preferences: ["Technology", "Fintech", "AI/ML"],
    matchScore: 96
  },
  {
    id: "STU002", 
    name: "Rahul Kumar",
    email: "rahul.kumar@college.ac.in",
    university: "BITS Pilani",
    course: "Finance",
    year: "Pre-final Year",
    location: "Rajasthan", 
    skills: ["Financial Modeling", "Excel", "Analytics", "Bloomberg"],
    cgpa: 8.6,
    preferences: ["Banking", "Investment", "Consulting"],
    matchScore: 94
  },
  {
    id: "STU003",
    name: "Anjali Patel",
    email: "anjali.patel@university.edu",
    university: "NIT Ahmedabad",
    course: "Biomedical Engineering",
    year: "Final Year",
    location: "Gujarat",
    skills: ["Biomedical Devices", "Research", "MATLAB", "Clinical Analysis"],
    cgpa: 9.1,
    preferences: ["Healthcare", "Medical Devices", "Research"],
    matchScore: 92
  }
];

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Student Management</h1>
        <p className="text-muted-foreground">
          Manage student profiles, preferences, and matching eligibility for the PM Internship Scheme
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="mb-6 shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search students by name, university, or skills..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-primary">
              Add Student
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <Card key={student.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={`/api/placeholder/40/40`} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.id}</p>
                  </div>
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-secondary/20 text-secondary font-semibold"
                >
                  {student.matchScore}% Match
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  {student.university} • {student.course}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {student.location} • CGPA: {student.cgpa}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {student.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {student.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{student.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Preferences</h4>
                <div className="flex flex-wrap gap-1">
                  {student.preferences.map((pref) => (
                    <Badge key={pref} className="text-xs bg-primary/10 text-primary">
                      {pref}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Allocate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Students;