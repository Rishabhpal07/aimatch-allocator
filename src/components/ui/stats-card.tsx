import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  variant?: "default" | "primary" | "secondary";
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
  variant = "default"
}: StatsCardProps) {
  return (
    <Card className={cn(
      "transition-smooth hover:shadow-medium",
      variant === "primary" && "gradient-primary text-primary-foreground",
      variant === "secondary" && "gradient-secondary text-secondary-foreground"
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          "text-sm font-medium",
          variant !== "default" && "text-current opacity-90"
        )}>
          {title}
        </CardTitle>
        <Icon className={cn(
          "h-4 w-4",
          variant === "default" ? "text-muted-foreground" : "text-current opacity-90"
        )} />
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-2xl font-bold",
          variant !== "default" && "text-current"
        )}>
          {value}
        </div>
        {change && (
          <p className={cn(
            "text-xs flex items-center mt-1",
            variant === "default" && changeType === "positive" && "text-secondary",
            variant === "default" && changeType === "negative" && "text-destructive",
            variant === "default" && changeType === "neutral" && "text-muted-foreground",
            variant !== "default" && "text-current opacity-75"
          )}>
            {change}
          </p>
        )}
        {description && (
          <p className={cn(
            "text-xs mt-1",
            variant === "default" ? "text-muted-foreground" : "text-current opacity-75"
          )}>
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}