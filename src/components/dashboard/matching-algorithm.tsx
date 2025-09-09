import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BrainCircuit, 
  Play, 
  Settings, 
  Target,
  Users,
  Building2,
  Zap,
  Shield
} from "lucide-react";

export function MatchingAlgorithm() {
  const algorithmMetrics = [
    { label: "Skills Matching", weight: 35, score: 94 },
    { label: "Location Preference", weight: 20, score: 87 },
    { label: "Industry Interest", weight: 25, score: 91 },
    { label: "Affirmative Action", weight: 20, score: 96 }
  ];

  const recentRuns = [
    {
      id: "RUN-2024-001",
      timestamp: "2024-01-15 14:30",
      students: 847,
      companies: 156,
      matches: 789,
      efficiency: 93.2,
      status: "completed"
    },
    {
      id: "RUN-2024-002", 
      timestamp: "2024-01-14 09:15",
      students: 823,
      companies: 149,
      matches: 761,
      efficiency: 92.5,
      status: "completed"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Algorithm Control Panel */}
      <Card className="shadow-medium gradient-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <BrainCircuit className="h-6 w-6 mr-3" />
            AI Matching Engine Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">ACTIVE</div>
              <div className="text-sm opacity-90">Current Status</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">847</div>
              <div className="text-sm opacity-90">Students in Queue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2.3s</div>
              <div className="text-sm opacity-90">Avg Processing Time</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="lg" className="flex items-center">
              <Play className="h-4 w-4 mr-2" />
              Run New Allocation
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Settings className="h-4 w-4 mr-2" />
              Configure Algorithm
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Algorithm Weights */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-primary" />
              Algorithm Weighting & Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {algorithmMetrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{metric.label}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {metric.weight}% weight
                    </Badge>
                    <span className="text-sm font-medium text-secondary">
                      {metric.score}%
                    </span>
                  </div>
                </div>
                <Progress value={metric.score} className="h-2" />
              </div>
            ))}
            
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Overall Algorithm Score</span>
                <span className="text-lg font-bold text-secondary">92.1%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Algorithm Runs */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              Recent Algorithm Executions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRuns.map((run) => (
                <div key={run.id} className="border rounded-lg p-4 bg-muted/30">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium text-sm">{run.id}</div>
                      <div className="text-xs text-muted-foreground">{run.timestamp}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {run.efficiency}% efficient
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1 text-muted-foreground" />
                      {run.students} students
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-3 w-3 mr-1 text-muted-foreground" />
                      {run.companies} companies
                    </div>
                    <div className="flex items-center">
                      <Target className="h-3 w-3 mr-1 text-muted-foreground" />
                      {run.matches} matches
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Algorithm Features */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            AI Algorithm Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Skills-Based Matching",
                description: "Advanced NLP analysis of student profiles and job requirements",
                icon: Target
              },
              {
                title: "Bias Mitigation",
                description: "Built-in fairness algorithms ensuring equitable opportunities",
                icon: Shield
              },
              {
                title: "Real-time Learning",
                description: "Continuous improvement from successful placement outcomes",
                icon: BrainCircuit
              },
              {
                title: "Multi-criteria Optimization",
                description: "Balancing multiple objectives including diversity and preferences",
                icon: Zap
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center space-y-3">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}