import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Education Support Program",
    description: "Providing resources and mentorship to at-risk students to keep them in school.",
  },
  {
    id: 2,
    title: "Women Empowerment Initiative",
    description: "Creating opportunities for women through skill development and leadership training.",
  },
  {
    id: 3,
    title: "Youth Leadership Academy",
    description: "Building the next generation of leaders through comprehensive training programs.",
  },
  {
    id: 4,
    title: "Rural Education Outreach",
    description: "Bringing quality education to remote communities across Nepal.",
  },
  {
    id: 5,
    title: "Community Development",
    description: "Empowering local communities to create sustainable change.",
  },
];

const ProjectHighlights = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Project List */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Our Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-lg bg-background border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Circular Layout */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Center Circle */}
            <div className="absolute w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-primary animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80"
                alt="Main Project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbital Circles */}
            {[0, 1, 2, 3, 4].map((index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-secondary group hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px - 3rem)`,
                    top: `calc(50% + ${y}px - 3rem)`,
                  }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1509062522246-3755977927d7",
                        "1488521787991-ed7bbaae773c",
                        "1523050854073-702d18b0d3b7",
                        "1531545514256-b1400bc00f31",
                        "1517164850305-99a3e65bb47e",
                      ][index]
                    }?w=200&q=80`}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
