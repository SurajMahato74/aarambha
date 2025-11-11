import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const initiatives = [
  "Quality Education for All Children",
  "Women Empowerment & Leadership",
  "Youth Leadership Development",
  "Rural Community Outreach",
  "Volunteer & Member Engagement",
  "Sustainable Community Projects",
];

const WhatWeDo = () => {
  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Overlapping Images */}
          <div className="relative h-[500px]">
            {/* Hexagon-style image */}
            <div className="absolute left-0 top-0 w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-primary rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circle image */}
            <div className="absolute right-12 top-12 w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-secondary -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80"
                alt="Youth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rectangle with smooth borders */}
            <div className="absolute left-16 bottom-0 w-72 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-primary rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold">Our Work for Change</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Aarambha Foundation, we believe in creating sustainable impact through 
              comprehensive programs that address the root causes of educational inequality. 
              Our multi-faceted approach ensures that we reach every corner of Nepal with 
              meaningful interventions.
            </p>

            <div className="space-y-3">
              {initiatives.map((initiative) => (
                <div key={initiative} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{initiative}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-6 bg-secondary hover:bg-secondary/90">
              See All Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
