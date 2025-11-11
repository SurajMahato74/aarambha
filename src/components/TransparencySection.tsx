import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Users, DollarSign } from "lucide-react";

const stats = [
  { icon: Users, label: "Students Supported", value: "5,000+" },
  { icon: TrendingUp, label: "Success Rate", value: "92%" },
  { icon: DollarSign, label: "Funds Raised", value: "NPR 50L+" },
  { icon: FileText, label: "Projects Completed", value: "150+" },
];

const TransparencySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl font-bold">We Believe in Transparency</h2>
            <p className="text-lg text-muted-foreground">
              Explore our impact reports, financials, and stories. We maintain complete 
              transparency in all our operations to build trust with our donors and community.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-lg bg-muted/50 border border-border hover:border-primary transition-all hover:shadow-lg group"
                >
                  <Icon className="h-8 w-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Report Button */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              <FileText className="mr-2 h-5 w-5" />
              Read Our Reports
            </Button>
          </div>

          {/* Document Theme Background */}
          <div className="mt-12 p-8 rounded-lg bg-muted/30 border-2 border-dashed border-border">
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <FileText className="h-12 w-12" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Annual Report 2023</div>
                <div className="text-sm">Detailed impact analysis and financial statements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
