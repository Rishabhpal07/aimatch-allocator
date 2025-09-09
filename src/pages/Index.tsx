import { HeroSection } from "@/components/dashboard/hero-section";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <DashboardOverview />
      </div>
    </div>
  );
};

export default Index;
