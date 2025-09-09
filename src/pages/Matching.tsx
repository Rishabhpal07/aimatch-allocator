import { MatchingAlgorithm } from "@/components/dashboard/matching-algorithm";

const Matching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Matching Engine</h1>
        <p className="text-muted-foreground">
          Configure and monitor the AI-powered allocation system for optimal student-internship matching
        </p>
      </div>

      <MatchingAlgorithm />
    </div>
  );
};

export default Matching;