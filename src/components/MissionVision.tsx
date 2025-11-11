import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MissionVision = () => {
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Mission Card */}
          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow">
            <button
              onClick={() => setMissionOpen(!missionOpen)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <ChevronDown
                className={`h-6 w-6 text-primary transition-transform ${
                  missionOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                missionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our mission is to empower youth and eliminate school dropouts across Nepal through 
                  comprehensive education support, community engagement, and sustainable development programs.
                </p>
                <p>
                  We strive to create an inclusive society where every child has access to quality education 
                  and the opportunity to reach their full potential, regardless of their background or circumstances.
                </p>
                <p>
                  Through volunteer-driven initiatives and strategic partnerships, we build bridges between 
                  communities and create lasting positive change that transforms lives and strengthens society.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow">
            <button
              onClick={() => setVisionOpen(!visionOpen)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <ChevronDown
                className={`h-6 w-6 text-secondary transition-transform ${
                  visionOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                visionOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We envision a Nepal where every child completes their education and has the tools to build 
                  a successful future. A nation where youth leadership drives social change and community 
                  development becomes a collective responsibility.
                </p>
                <p>
                  We see communities where education is valued, protected, and accessible to all - where no 
                  child is left behind due to economic, social, or geographical barriers.
                </p>
                <p>
                  Our vision extends to creating a sustainable ecosystem of volunteers, donors, and community 
                  leaders who work together to ensure that every Nepali child has the opportunity to learn, 
                  grow, and contribute to building a prosperous nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
