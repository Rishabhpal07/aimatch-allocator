import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  CheckCircle,
  Clock,
  AlertCircle,
  BrainCircuit
} from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12.5% from last month",
      changeType: "positive" as const,
      icon: Users,
      description: "Active applicants in the system"
    },
    {
      title: "Partner Companies",
      value: "189",
      change: "+3 new this week",
      changeType: "positive" as const,
      icon: Building2,
      description: "Verified industry partners"
    },
    {
      title: "Successful Matches",
      value: "1,254",
      change: "+8.3% match rate",
      changeType: "positive" as const,
      icon: CheckCircle,
      description: "AI-powered placements completed",
      variant: "secondary" as const
    },
    {
      title: "AI Efficiency Score",
      value: "94.2%",
      change: "+2.1% optimization",
      changeType: "positive" as const,
      icon: BrainCircuit,
      description: "Current allocation accuracy",
      variant: "primary" as const
    }
  ];

  const allocationProgress = [
    { category: "Technology", allocated: 78, total: 120, color: "bg-primary" },
    { category: "Finance", allocated: 65, total: 80, color: "bg-secondary" },
    { category: "Healthcare", allocated: 45, total: 60, color: "bg-accent" },
    { category: "Manufacturing", allocated: 32, total: 45, color: "bg-muted-foreground" }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            description={stat.description}
            variant={stat.variant}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Allocation Progress */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Sector-wise Allocation Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {allocationProgress.map((sector) => (
              <div key={sector.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{sector.category}</span>
                  <span className="text-muted-foreground">
                    {sector.allocated}/{sector.total}
                  </span>
                </div>
                <Progress 
                  value={(sector.allocated / sector.total) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Recent AI Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  student: "Priya Sharma",
                  company: "TechCorp India",
                  match: 96,
                  status: "confirmed"
                },
                {
                  student: "Rahul Kumar",
                  company: "FinanceXpert Ltd",
                  match: 94,
                  status: "pending"
                },
                {
                  student: "Anjali Patel",
                  company: "HealthTech Solutions",
                  match: 92,
                  status: "confirmed"
                },
                {
                  student: "Vikram Singh",
                  company: "Manufacturing Pro",
                  match: 89,
                  status: "review"
                }
              ].map((match, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{match.student}</div>
                    <div className="text-xs text-muted-foreground">{match.company}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-medium text-secondary">
                      {match.match}% match
                    </div>
                    {match.status === "confirmed" && (
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    )}
                    {match.status === "pending" && (
                      <Clock className="h-4 w-4 text-amber-500" />
                    )}
                    {match.status === "review" && (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}